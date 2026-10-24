# JsonIpGeolocation SDK utility: prepare_body
require_relative 'media'
module JsonIpGeolocationUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return JsonIpGeolocationUtilities.raw_body(ctx.reqdata) if JsonIpGeolocationUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
