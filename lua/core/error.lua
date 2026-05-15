-- JsonIpGeolocation SDK error

local JsonIpGeolocationError = {}
JsonIpGeolocationError.__index = JsonIpGeolocationError


function JsonIpGeolocationError.new(code, msg, ctx)
  local self = setmetatable({}, JsonIpGeolocationError)
  self.is_sdk_error = true
  self.sdk = "JsonIpGeolocation"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function JsonIpGeolocationError:error()
  return self.msg
end


function JsonIpGeolocationError:__tostring()
  return self.msg
end


return JsonIpGeolocationError
