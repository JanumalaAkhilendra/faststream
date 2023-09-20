from faststream import Context, FastStream, context
from faststream.kafka import KafkaBroker

broker = KafkaBroker("localhost:9092")
app = FastStream(broker)
context.set_global("secret", "1")

@broker.subscriber("test-topic")
async def handle(
    secret: int = Context(),
):
    assert secret == "1"

@broker.subscriber("test-topic")
async def handle_int(
    secret: int = Context(cast=True),
):
    assert secret == 1