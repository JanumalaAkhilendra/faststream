from typing import Optional, Pattern
from uuid import uuid4

from pydantic import BaseModel, Field

from faststream._compat import model_parse, model_to_json
from faststream.broker.message import StreamMessage
from faststream.broker.parsers import decode_message, encode_message
from faststream.redis.message import PubSubMessage, RedisMessage
from faststream.types import AnyDict, DecodedMessage, SendableMessage
from faststream.utils.context.main import context


class RawMessage(BaseModel):
    data: bytes
    headers: AnyDict = Field(default_factory=dict)

    @classmethod
    def encode(
        cls,
        message: SendableMessage,
        reply_to: str = "",
        headers: Optional[AnyDict] = None,
        correlation_id: Optional[str] = None,
    ) -> str:
        payload, content_type = encode_message(message)

        headers_to_send = {
            "correlation_id": correlation_id or str(uuid4()),
        }

        if content_type:
            headers_to_send["content-type"] = content_type

        if reply_to:
            headers_to_send["reply_to"] = reply_to

        if headers is not None:
            headers_to_send.update(headers)

        return model_to_json(
            cls(
                data=payload,
                headers=headers_to_send,
            )
        )


class RedisParser:
    @staticmethod
    async def parse_message(
        message: PubSubMessage,
    ) -> StreamMessage[PubSubMessage]:
        raw_data = message.get("data", b"")

        channel = message.get("channel", b"").decode()

        handler = context.get("handler_")
        path: AnyDict = {}
        path_re: Optional[Pattern[str]]
        if handler and (path_re := handler.path_regex):
            if path_re is not None:
                match = path_re.match(channel)
                if match:
                    path = match.groupdict()

        try:
            obj = model_parse(RawMessage, raw_data)
        except Exception:
            # Raw Redis message format
            data = raw_data
            headers: AnyDict = {}
        else:
            # FastStream message format
            data = obj.data
            headers = obj.headers

        return RedisMessage(
            raw_message=message,
            body=data,
            path=path,
            headers=headers,
            reply_to=headers.get("reply_to", ""),
            content_type=headers.get("content-type", ""),
            message_id=headers.get("message_id", str(uuid4())),
            correlation_id=headers.get("correlation_id", str(uuid4())),
        )

    @staticmethod
    async def decode_message(
        msg: StreamMessage[PubSubMessage],
    ) -> DecodedMessage:
        return decode_message(msg)