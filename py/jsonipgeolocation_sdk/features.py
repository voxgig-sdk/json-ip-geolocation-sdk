# JsonIpGeolocation SDK feature factory

from jsonipgeolocation_sdk.feature.base_feature import JsonIpGeolocationBaseFeature
from jsonipgeolocation_sdk.feature.ratelimit_feature import JsonIpGeolocationRatelimitFeature
from jsonipgeolocation_sdk.feature.retry_feature import JsonIpGeolocationRetryFeature
from jsonipgeolocation_sdk.feature.test_feature import JsonIpGeolocationTestFeature
from jsonipgeolocation_sdk.feature.timeout_feature import JsonIpGeolocationTimeoutFeature


_FEATURES = {
    "base": lambda: JsonIpGeolocationBaseFeature(),
    "ratelimit": lambda: JsonIpGeolocationRatelimitFeature(),
    "retry": lambda: JsonIpGeolocationRetryFeature(),
    "test": lambda: JsonIpGeolocationTestFeature(),
    "timeout": lambda: JsonIpGeolocationTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
