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

export interface CurrencygpLoadMatch {
  amount?: number
  converted_amount?: number
  exchange_rate?: number
  from?: string
  timestamp?: string
  to?: string
}

export interface Jsongp {
  geoplugin_areaCode?: string
  geoplugin_city?: string
  geoplugin_continentCode?: string
  geoplugin_countryCode?: string
  geoplugin_countryName?: string
  geoplugin_credit?: string
  geoplugin_currencyCode?: string
  geoplugin_currencyConverter?: number
  geoplugin_currencySymbol?: string
  geoplugin_currencySymbol_UTF8?: string
  geoplugin_dmaCode?: string
  geoplugin_latitude?: string
  geoplugin_longitude?: string
  geoplugin_region?: string
  geoplugin_regionCode?: string
  geoplugin_regionName?: string
  geoplugin_request?: string
  geoplugin_status?: number
}

export interface JsongpLoadMatch {
  geoplugin_areaCode?: string
  geoplugin_city?: string
  geoplugin_continentCode?: string
  geoplugin_countryCode?: string
  geoplugin_countryName?: string
  geoplugin_credit?: string
  geoplugin_currencyCode?: string
  geoplugin_currencyConverter?: number
  geoplugin_currencySymbol?: string
  geoplugin_currencySymbol_UTF8?: string
  geoplugin_dmaCode?: string
  geoplugin_latitude?: string
  geoplugin_longitude?: string
  geoplugin_region?: string
  geoplugin_regionCode?: string
  geoplugin_regionName?: string
  geoplugin_request?: string
  geoplugin_status?: number
}

