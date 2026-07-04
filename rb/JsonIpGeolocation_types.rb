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

# Match filter for Currencygp#load (any subset of Currencygp fields).
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
# @!attribute [rw] geoplugin_area_code
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_city
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_continent_code
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_country_code
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_country_name
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_credit
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_currency_code
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_currency_converter
#   @return [Float, nil]
#
# @!attribute [rw] geoplugin_currency_symbol
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_currency_symbol_utf8
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_dma_code
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
# @!attribute [rw] geoplugin_region_code
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_region_name
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_request
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_status
#   @return [Integer, nil]
Jsongp = Struct.new(
  :geoplugin_area_code,
  :geoplugin_city,
  :geoplugin_continent_code,
  :geoplugin_country_code,
  :geoplugin_country_name,
  :geoplugin_credit,
  :geoplugin_currency_code,
  :geoplugin_currency_converter,
  :geoplugin_currency_symbol,
  :geoplugin_currency_symbol_utf8,
  :geoplugin_dma_code,
  :geoplugin_latitude,
  :geoplugin_longitude,
  :geoplugin_region,
  :geoplugin_region_code,
  :geoplugin_region_name,
  :geoplugin_request,
  :geoplugin_status,
  keyword_init: true
)

# Match filter for Jsongp#load (any subset of Jsongp fields).
#
# @!attribute [rw] geoplugin_area_code
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_city
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_continent_code
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_country_code
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_country_name
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_credit
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_currency_code
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_currency_converter
#   @return [Float, nil]
#
# @!attribute [rw] geoplugin_currency_symbol
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_currency_symbol_utf8
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_dma_code
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
# @!attribute [rw] geoplugin_region_code
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_region_name
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_request
#   @return [String, nil]
#
# @!attribute [rw] geoplugin_status
#   @return [Integer, nil]
JsongpLoadMatch = Struct.new(
  :geoplugin_area_code,
  :geoplugin_city,
  :geoplugin_continent_code,
  :geoplugin_country_code,
  :geoplugin_country_name,
  :geoplugin_credit,
  :geoplugin_currency_code,
  :geoplugin_currency_converter,
  :geoplugin_currency_symbol,
  :geoplugin_currency_symbol_utf8,
  :geoplugin_dma_code,
  :geoplugin_latitude,
  :geoplugin_longitude,
  :geoplugin_region,
  :geoplugin_region_code,
  :geoplugin_region_name,
  :geoplugin_request,
  :geoplugin_status,
  keyword_init: true
)

