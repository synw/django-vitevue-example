from ninja import NinjaAPI

api = NinjaAPI()


@api.get("/sample")  # type: ignore
def add(request):
    return {"data": {"foo": "bar"}}
