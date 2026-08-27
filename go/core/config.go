package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "JsonIpGeolocation",
			"slug": "json-ip-geolocation",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "http://www.geoplugin.net",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"currencygp": map[string]any{},
				"jsongp": map[string]any{},
			},
		},
		"entity": map[string]any{
			"currencygp": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "amount",
						"short": "Original amount to convert",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "converted_amount",
						"short": "Converted amount in target currency",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "exchange_rate",
						"short": "Exchange rate used for conversion",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "from",
						"short": "Source currency code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timestamp",
						"short": "Timestamp of the conversion",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "to",
						"short": "Target currency code",
						"type": "`$STRING`",
					},
				},
				"name": "currencygp",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "amount",
											"orig": "amount",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "USD",
											"kind": "query",
											"name": "from",
											"orig": "from",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "EUR",
											"kind": "query",
											"name": "to",
											"orig": "to",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/currency.gp",
								"parts": []any{
									"currency.gp",
								},
								"select": map[string]any{
									"exist": []any{
										"amount",
										"from",
										"to",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"jsongp": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "geoplugin_areaCode",
						"short": "Telephone area code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_city",
						"short": "City name derived from IP address",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_continentCode",
						"short": "Continent code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_countryCode",
						"short": "ISO 3166-1 alpha-2 country code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_countryName",
						"short": "Full country name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_credit",
						"short": "Attribution credit for data sources",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_currencyCode",
						"short": "ISO 4217 currency code for the location",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_currencyConverter",
						"short": "Exchange rate converter value",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "geoplugin_currencySymbol",
						"short": "Currency symbol",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_currencySymbol_UTF8",
						"short": "UTF-8 encoded currency symbol",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_dmaCode",
						"short": "Designated Market Area code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_latitude",
						"short": "Latitude coordinate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_longitude",
						"short": "Longitude coordinate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_region",
						"short": "Region or state name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_regionCode",
						"short": "Region or state code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_regionName",
						"short": "Full region or state name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_request",
						"short": "The IP address that was geolocated",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_status",
						"short": "HTTP status code of the response",
						"type": "`$INTEGER`",
					},
				},
				"name": "jsongp",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "USD",
											"kind": "query",
											"name": "base_currency",
											"orig": "base_currency",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "8.8.8.8",
											"kind": "query",
											"name": "ip",
											"orig": "ip",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/json.gp",
								"parts": []any{
									"json.gp",
								},
								"select": map[string]any{
									"exist": []any{
										"base_currency",
										"ip",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
