# JsonIpGeolocation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module JsonIpGeolocationFeatures
  def self.make_feature(name)
    case name
    when "base"
      JsonIpGeolocationBaseFeature.new
    when "ratelimit"
      JsonIpGeolocationRatelimitFeature.new
    when "retry"
      JsonIpGeolocationRetryFeature.new
    when "test"
      JsonIpGeolocationTestFeature.new
    when "timeout"
      JsonIpGeolocationTimeoutFeature.new
    else
      JsonIpGeolocationBaseFeature.new
    end
  end
end
