# frozen_string_literal: true

# Typed models for the JsonIpGeolocation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Currencygp entity data model.
#
# @!attribute [rw] amount
#   @return [Float, nil]
#
# @!attribute [rw] converted_amount
#   @return [Float, nil]
#
# @!attribute [rw] exchange_rate
#   @return [Float, nil]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String, nil]
Currencygp = Struct.new(
  :amount,
  :converted_amount,
  :exchange_rate,
  :from,
  :timestamp,
  :to,
  keyword_init: true
)

# Request payload for Currencygp#load.
#
# @!attribute [rw] amount
#   @return [Float, nil]
#
# @!attribute [rw] converted_amount
#   @return [Float, nil]
#
# @!attribute [rw] exchange_rate
#   @return [Float, nil]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String, nil]
CurrencygpLoadMatch = Struct.new(
  :amount,
  :converted_amount,
  :exchange_rate,
  :from,
  :timestamp,
  :to,
  keyword_init: true
)

# Jsongp entity data model.
#
# @!attribute [rw] geoplugin_areaCode
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_city
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_continentCode
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_countryCode
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_countryName
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_credit
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_currencyCode
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_currencyConverter
#   @return [Float, nil]
#
# @!attribute [rw] geoplugin_currencySymbol
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_currencySymbol_UTF8
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_dmaCode
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_latitude
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_longitude
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_region
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_regionCode
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_regionName
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_request
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_status
#   @return [Integer, nil]
Jsongp = Struct.new(
  :geoplugin_areaCode,
  :geoplugin_city,
  :geoplugin_continentCode,
  :geoplugin_countryCode,
  :geoplugin_countryName,
  :geoplugin_credit,
  :geoplugin_currencyCode,
  :geoplugin_currencyConverter,
  :geoplugin_currencySymbol,
  :geoplugin_currencySymbol_UTF8,
  :geoplugin_dmaCode,
  :geoplugin_latitude,
  :geoplugin_longitude,
  :geoplugin_region,
  :geoplugin_regionCode,
  :geoplugin_regionName,
  :geoplugin_request,
  :geoplugin_status,
  keyword_init: true
)

# Request payload for Jsongp#load.
#
# @!attribute [rw] geoplugin_areaCode
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_city
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_continentCode
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_countryCode
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_countryName
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_credit
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_currencyCode
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_currencyConverter
#   @return [Float, nil]
#
# @!attribute [rw] geoplugin_currencySymbol
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_currencySymbol_UTF8
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_dmaCode
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_latitude
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_longitude
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_region
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_regionCode
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_regionName
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_request
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_status
#   @return [Integer, nil]
JsongpLoadMatch = Struct.new(
  :geoplugin_areaCode,
  :geoplugin_city,
  :geoplugin_continentCode,
  :geoplugin_countryCode,
  :geoplugin_countryName,
  :geoplugin_credit,
  :geoplugin_currencyCode,
  :geoplugin_currencyConverter,
  :geoplugin_currencySymbol,
  :geoplugin_currencySymbol_UTF8,
  :geoplugin_dmaCode,
  :geoplugin_latitude,
  :geoplugin_longitude,
  :geoplugin_region,
  :geoplugin_regionCode,
  :geoplugin_regionName,
  :geoplugin_request,
  :geoplugin_status,
  keyword_init: true
)

