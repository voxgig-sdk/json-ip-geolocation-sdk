# JsonIpGeolocation SDK utility: make_context
require_relative '../core/context'
module JsonIpGeolocationUtilities
  MakeContext = ->(ctxmap, basectx) {
    JsonIpGeolocationContext.new(ctxmap, basectx)
  }
end
