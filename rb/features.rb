# JsonIpGeolocation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module JsonIpGeolocationFeatures
  def self.make_feature(name)
    case name
    when "base"
      JsonIpGeolocationBaseFeature.new
    when "test"
      JsonIpGeolocationTestFeature.new
    else
      JsonIpGeolocationBaseFeature.new
    end
  end
end
