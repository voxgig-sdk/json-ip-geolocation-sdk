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
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "converted_amount",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "exchange_rate",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "from",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "to",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_city",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_continentCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_countryCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_countryName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_credit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_currencyCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_currencyConverter",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "geoplugin_currencySymbol",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_currencySymbol_UTF8",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_dmaCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_latitude",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_longitude",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_region",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_regionCode",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_regionName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_request",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "geoplugin_status",
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
