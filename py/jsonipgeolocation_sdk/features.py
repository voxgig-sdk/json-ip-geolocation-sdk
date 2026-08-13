# JsonIpGeolocation SDK feature factory

from jsonipgeolocation_sdk.feature.base_feature import JsonIpGeolocationBaseFeature
from jsonipgeolocation_sdk.feature.test_feature import JsonIpGeolocationTestFeature


def _make_feature(name):
    features = {
        "base": lambda: JsonIpGeolocationBaseFeature(),
        "test": lambda: JsonIpGeolocationTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
