# ProjectName SDK exists test

import pytest
from jsonipgeolocation_sdk import JsonIpGeolocationSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = JsonIpGeolocationSDK.test(None, None)
        assert testsdk is not None
