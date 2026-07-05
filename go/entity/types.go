// Typed models for the JsonIpGeolocation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Currencygp is the typed data model for the currencygp entity.
type Currencygp struct {
	Amount *float64 `json:"amount,omitempty"`
	ConvertedAmount *float64 `json:"converted_amount,omitempty"`
	ExchangeRate *float64 `json:"exchange_rate,omitempty"`
	From *string `json:"from,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	To *string `json:"to,omitempty"`
}

// CurrencygpLoadMatch is the typed request payload for Currencygp.LoadTyped.
type CurrencygpLoadMatch struct {
	Amount *float64 `json:"amount,omitempty"`
	ConvertedAmount *float64 `json:"converted_amount,omitempty"`
	ExchangeRate *float64 `json:"exchange_rate,omitempty"`
	From *string `json:"from,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	To *string `json:"to,omitempty"`
}

// Jsongp is the typed data model for the jsongp entity.
type Jsongp struct {
	GeopluginAreaCode *string `json:"geoplugin_area_code,omitempty"`
	GeopluginCity *string `json:"geoplugin_city,omitempty"`
	GeopluginContinentCode *string `json:"geoplugin_continent_code,omitempty"`
	GeopluginCountryCode *string `json:"geoplugin_country_code,omitempty"`
	GeopluginCountryName *string `json:"geoplugin_country_name,omitempty"`
	GeopluginCredit *string `json:"geoplugin_credit,omitempty"`
	GeopluginCurrencyCode *string `json:"geoplugin_currency_code,omitempty"`
	GeopluginCurrencyConverter *float64 `json:"geoplugin_currency_converter,omitempty"`
	GeopluginCurrencySymbol *string `json:"geoplugin_currency_symbol,omitempty"`
	GeopluginCurrencySymbolUtf8 *string `json:"geoplugin_currency_symbol_utf8,omitempty"`
	GeopluginDmaCode *string `json:"geoplugin_dma_code,omitempty"`
	GeopluginLatitude *string `json:"geoplugin_latitude,omitempty"`
	GeopluginLongitude *string `json:"geoplugin_longitude,omitempty"`
	GeopluginRegion *string `json:"geoplugin_region,omitempty"`
	GeopluginRegionCode *string `json:"geoplugin_region_code,omitempty"`
	GeopluginRegionName *string `json:"geoplugin_region_name,omitempty"`
	GeopluginRequest *string `json:"geoplugin_request,omitempty"`
	GeopluginStatus *int `json:"geoplugin_status,omitempty"`
}

// JsongpLoadMatch is the typed request payload for Jsongp.LoadTyped.
type JsongpLoadMatch struct {
	GeopluginAreaCode *string `json:"geoplugin_area_code,omitempty"`
	GeopluginCity *string `json:"geoplugin_city,omitempty"`
	GeopluginContinentCode *string `json:"geoplugin_continent_code,omitempty"`
	GeopluginCountryCode *string `json:"geoplugin_country_code,omitempty"`
	GeopluginCountryName *string `json:"geoplugin_country_name,omitempty"`
	GeopluginCredit *string `json:"geoplugin_credit,omitempty"`
	GeopluginCurrencyCode *string `json:"geoplugin_currency_code,omitempty"`
	GeopluginCurrencyConverter *float64 `json:"geoplugin_currency_converter,omitempty"`
	GeopluginCurrencySymbol *string `json:"geoplugin_currency_symbol,omitempty"`
	GeopluginCurrencySymbolUtf8 *string `json:"geoplugin_currency_symbol_utf8,omitempty"`
	GeopluginDmaCode *string `json:"geoplugin_dma_code,omitempty"`
	GeopluginLatitude *string `json:"geoplugin_latitude,omitempty"`
	GeopluginLongitude *string `json:"geoplugin_longitude,omitempty"`
	GeopluginRegion *string `json:"geoplugin_region,omitempty"`
	GeopluginRegionCode *string `json:"geoplugin_region_code,omitempty"`
	GeopluginRegionName *string `json:"geoplugin_region_name,omitempty"`
	GeopluginRequest *string `json:"geoplugin_request,omitempty"`
	GeopluginStatus *int `json:"geoplugin_status,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
