// Typed models for the JsonIpGeolocation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Currencygp {
  amount?: number
  converted_amount?: number
  exchange_rate?: number
  from?: string
  timestamp?: string
  to?: string
}

export type CurrencygpLoadMatch = Partial<Currencygp>

export interface Jsongp {
  geoplugin_area_code?: string
  geoplugin_city?: string
  geoplugin_continent_code?: string
  geoplugin_country_code?: string
  geoplugin_country_name?: string
  geoplugin_credit?: string
  geoplugin_currency_code?: string
  geoplugin_currency_converter?: number
  geoplugin_currency_symbol?: string
  geoplugin_currency_symbol_utf8?: string
  geoplugin_dma_code?: string
  geoplugin_latitude?: string
  geoplugin_longitude?: string
  geoplugin_region?: string
  geoplugin_region_code?: string
  geoplugin_region_name?: string
  geoplugin_request?: string
  geoplugin_status?: number
}

export type JsongpLoadMatch = Partial<Jsongp>

