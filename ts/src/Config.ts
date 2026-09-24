
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
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
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "title": "Amount",
          "type": "`$NUMBER`",
          "short": "Original amount to convert"
        },
        {
          "name": "converted_amount",
          "title": "Converted Amount",
          "type": "`$NUMBER`",
          "short": "Converted amount in target currency"
        },
        {
          "name": "exchange_rate",
          "title": "Exchange Rate",
          "type": "`$NUMBER`",
          "short": "Exchange rate used for conversion"
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "short": "Source currency code"
        },
        {
          "name": "timestamp",
          "title": "Timestamp",
          "type": "`$STRING`",
          "short": "Timestamp of the conversion",
          "format": "date-time"
        },
        {
          "name": "to",
          "title": "To",
          "type": "`$STRING`",
          "short": "Target currency code"
        }
      ],
      "name": "currencygp",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/currency.gp",
              "segments": [
                {
                  "lit": "currency.gp"
                }
              ],
              "parts": [
                "currency.gp"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "amount",
                    "orig": "amount",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "reqd": true,
                    "example": 100
                  },
                  {
                    "name": "from",
                    "orig": "from",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "USD"
                  },
                  {
                    "name": "to",
                    "orig": "to",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "EUR"
                  }
                ]
              },
              "select": {
                "exist": [
                  "amount",
                  "from",
                  "to"
                ]
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
          "title": "Geoplugin Area Code",
          "type": "`$STRING`",
          "short": "Telephone area code"
        },
        {
          "name": "geoplugin_city",
          "title": "Geoplugin City",
          "type": "`$STRING`",
          "short": "City name derived from IP address"
        },
        {
          "name": "geoplugin_continentCode",
          "title": "Geoplugin Continent Code",
          "type": "`$STRING`",
          "short": "Continent code"
        },
        {
          "name": "geoplugin_countryCode",
          "title": "Geoplugin Country Code",
          "type": "`$STRING`",
          "short": "ISO 3166-1 alpha-2 country code"
        },
        {
          "name": "geoplugin_countryName",
          "title": "Geoplugin Country Name",
          "type": "`$STRING`",
          "short": "Full country name"
        },
        {
          "name": "geoplugin_credit",
          "title": "Geoplugin Credit",
          "type": "`$STRING`",
          "short": "Attribution credit for data sources"
        },
        {
          "name": "geoplugin_currencyCode",
          "title": "Geoplugin Currency Code",
          "type": "`$STRING`",
          "short": "ISO 4217 currency code for the location"
        },
        {
          "name": "geoplugin_currencyConverter",
          "title": "Geoplugin Currency Converter",
          "type": "`$NUMBER`",
          "short": "Exchange rate converter value"
        },
        {
          "name": "geoplugin_currencySymbol",
          "title": "Geoplugin Currency Symbol",
          "type": "`$STRING`",
          "short": "Currency symbol"
        },
        {
          "name": "geoplugin_currencySymbol_UTF8",
          "title": "Geoplugin Currency Symbol Utf8",
          "type": "`$STRING`",
          "short": "UTF-8 encoded currency symbol"
        },
        {
          "name": "geoplugin_dmaCode",
          "title": "Geoplugin Dma Code",
          "type": "`$STRING`",
          "short": "Designated Market Area code"
        },
        {
          "name": "geoplugin_latitude",
          "title": "Geoplugin Latitude",
          "type": "`$STRING`",
          "short": "Latitude coordinate"
        },
        {
          "name": "geoplugin_longitude",
          "title": "Geoplugin Longitude",
          "type": "`$STRING`",
          "short": "Longitude coordinate"
        },
        {
          "name": "geoplugin_region",
          "title": "Geoplugin Region",
          "type": "`$STRING`",
          "short": "Region or state name"
        },
        {
          "name": "geoplugin_regionCode",
          "title": "Geoplugin Region Code",
          "type": "`$STRING`",
          "short": "Region or state code"
        },
        {
          "name": "geoplugin_regionName",
          "title": "Geoplugin Region Name",
          "type": "`$STRING`",
          "short": "Full region or state name"
        },
        {
          "name": "geoplugin_request",
          "title": "Geoplugin Request",
          "type": "`$STRING`",
          "short": "The IP address that was geolocated"
        },
        {
          "name": "geoplugin_status",
          "title": "Geoplugin Status",
          "type": "`$INTEGER`",
          "short": "HTTP status code of the response"
        }
      ],
      "name": "jsongp",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/json.gp",
              "segments": [
                {
                  "lit": "json.gp"
                }
              ],
              "parts": [
                "json.gp"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "base_currency",
                    "orig": "base_currency",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "USD"
                  },
                  {
                    "name": "ip",
                    "orig": "ip",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "8.8.8.8"
                  }
                ]
              },
              "select": {
                "exist": [
                  "base_currency",
                  "ip"
                ]
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
  config,
  FEATURE_PLUGINS,
}

