
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'JsonIpGeolocation',
        slug: "json-ip-geolocation",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "http://www.geoplugin.net",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      currencygp: {
      },

      jsongp: {
      },

    }
  }


  entity = {
    "currencygp": {
      "fields": [
        {
          "name": "amount",
          "short": "Original amount to convert",
          "type": "`$NUMBER`"
        },
        {
          "name": "converted_amount",
          "short": "Converted amount in target currency",
          "type": "`$NUMBER`"
        },
        {
          "name": "exchange_rate",
          "short": "Exchange rate used for conversion",
          "type": "`$NUMBER`"
        },
        {
          "name": "from",
          "short": "Source currency code",
          "type": "`$STRING`"
        },
        {
          "name": "timestamp",
          "short": "Timestamp of the conversion",
          "type": "`$STRING`"
        },
        {
          "name": "to",
          "short": "Target currency code",
          "type": "`$STRING`"
        }
      ],
      "name": "currencygp",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "amount",
                    "orig": "amount",
                    "reqd": true,
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "USD",
                    "kind": "query",
                    "name": "from",
                    "orig": "from",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "EUR",
                    "kind": "query",
                    "name": "to",
                    "orig": "to",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/currency.gp",
              "parts": [
                "currency.gp"
              ],
              "select": {
                "exist": [
                  "amount",
                  "from",
                  "to"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "jsongp": {
      "fields": [
        {
          "name": "geoplugin_areaCode",
          "short": "Telephone area code",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_city",
          "short": "City name derived from IP address",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_continentCode",
          "short": "Continent code",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_countryCode",
          "short": "ISO 3166-1 alpha-2 country code",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_countryName",
          "short": "Full country name",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_credit",
          "short": "Attribution credit for data sources",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_currencyCode",
          "short": "ISO 4217 currency code for the location",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_currencyConverter",
          "short": "Exchange rate converter value",
          "type": "`$NUMBER`"
        },
        {
          "name": "geoplugin_currencySymbol",
          "short": "Currency symbol",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_currencySymbol_UTF8",
          "short": "UTF-8 encoded currency symbol",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_dmaCode",
          "short": "Designated Market Area code",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_latitude",
          "short": "Latitude coordinate",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_longitude",
          "short": "Longitude coordinate",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_region",
          "short": "Region or state name",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_regionCode",
          "short": "Region or state code",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_regionName",
          "short": "Full region or state name",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_request",
          "short": "The IP address that was geolocated",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_status",
          "short": "HTTP status code of the response",
          "type": "`$INTEGER`"
        }
      ],
      "name": "jsongp",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "USD",
                    "kind": "query",
                    "name": "base_currency",
                    "orig": "base_currency",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "8.8.8.8",
                    "kind": "query",
                    "name": "ip",
                    "orig": "ip",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/json.gp",
              "parts": [
                "json.gp"
              ],
              "select": {
                "exist": [
                  "base_currency",
                  "ip"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

