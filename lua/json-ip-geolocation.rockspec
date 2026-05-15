package = "voxgig-sdk-json-ip-geolocation"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/json-ip-geolocation-sdk.git"
}
description = {
  summary = "JsonIpGeolocation SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["json-ip-geolocation_sdk"] = "json-ip-geolocation_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
