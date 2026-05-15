# JsonIpGeolocation SDK exists test

require "minitest/autorun"
require_relative "../JsonIpGeolocation_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = JsonIpGeolocationSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
