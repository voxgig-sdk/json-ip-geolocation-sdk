// Typed models for the JsonIpGeolocation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/json-ip-geolocation-sdk/go/core"
)

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
	GeopluginAreaCode *string `json:"geoplugin_areaCode,omitempty"`
	GeopluginCity *string `json:"geoplugin_city,omitempty"`
	GeopluginContinentCode *string `json:"geoplugin_continentCode,omitempty"`
	GeopluginCountryCode *string `json:"geoplugin_countryCode,omitempty"`
	GeopluginCountryName *string `json:"geoplugin_countryName,omitempty"`
	GeopluginCredit *string `json:"geoplugin_credit,omitempty"`
	GeopluginCurrencyCode *string `json:"geoplugin_currencyCode,omitempty"`
	GeopluginCurrencyConverter *float64 `json:"geoplugin_currencyConverter,omitempty"`
	GeopluginCurrencySymbol *string `json:"geoplugin_currencySymbol,omitempty"`
	GeopluginCurrencySymbolUTF8 *string `json:"geoplugin_currencySymbol_UTF8,omitempty"`
	GeopluginDmaCode *string `json:"geoplugin_dmaCode,omitempty"`
	GeopluginLatitude *string `json:"geoplugin_latitude,omitempty"`
	GeopluginLongitude *string `json:"geoplugin_longitude,omitempty"`
	GeopluginRegion *string `json:"geoplugin_region,omitempty"`
	GeopluginRegionCode *string `json:"geoplugin_regionCode,omitempty"`
	GeopluginRegionName *string `json:"geoplugin_regionName,omitempty"`
	GeopluginRequest *string `json:"geoplugin_request,omitempty"`
	GeopluginStatus *int `json:"geoplugin_status,omitempty"`
}

// JsongpLoadMatch is the typed request payload for Jsongp.LoadTyped.
type JsongpLoadMatch struct {
	GeopluginAreaCode *string `json:"geoplugin_areaCode,omitempty"`
	GeopluginCity *string `json:"geoplugin_city,omitempty"`
	GeopluginContinentCode *string `json:"geoplugin_continentCode,omitempty"`
	GeopluginCountryCode *string `json:"geoplugin_countryCode,omitempty"`
	GeopluginCountryName *string `json:"geoplugin_countryName,omitempty"`
	GeopluginCredit *string `json:"geoplugin_credit,omitempty"`
	GeopluginCurrencyCode *string `json:"geoplugin_currencyCode,omitempty"`
	GeopluginCurrencyConverter *float64 `json:"geoplugin_currencyConverter,omitempty"`
	GeopluginCurrencySymbol *string `json:"geoplugin_currencySymbol,omitempty"`
	GeopluginCurrencySymbolUTF8 *string `json:"geoplugin_currencySymbol_UTF8,omitempty"`
	GeopluginDmaCode *string `json:"geoplugin_dmaCode,omitempty"`
	GeopluginLatitude *string `json:"geoplugin_latitude,omitempty"`
	GeopluginLongitude *string `json:"geoplugin_longitude,omitempty"`
	GeopluginRegion *string `json:"geoplugin_region,omitempty"`
	GeopluginRegionCode *string `json:"geoplugin_regionCode,omitempty"`
	GeopluginRegionName *string `json:"geoplugin_regionName,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
