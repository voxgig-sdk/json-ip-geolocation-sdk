# JsonIpGeolocation SDK utility: make_context

from projectname_sdk.core.context import JsonIpGeolocationContext


def make_context_util(ctxmap, basectx):
    return JsonIpGeolocationContext(ctxmap, basectx)
