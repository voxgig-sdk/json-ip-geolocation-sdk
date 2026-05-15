# JsonIpGeolocation SDK utility: make_context

from core.context import JsonIpGeolocationContext


def make_context_util(ctxmap, basectx):
    return JsonIpGeolocationContext(ctxmap, basectx)
