import pytest

from examples.e10_middlewares import app, broker, handle
from faststream.rabbit import TestApp, TestRabbitBroker


@pytest.mark.asyncio
async def test_example():
    async with TestRabbitBroker(broker, connect_only=True):
        async with TestApp(app):
            await handle.wait_call(3)

            handle.mock.assert_called_with("fake message")
