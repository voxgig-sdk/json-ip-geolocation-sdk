
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


  main = {
    name: 'JsonIpGeolocation',
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
          "type": "`$NUMBER`"
        },
        {
          "name": "converted_amount",
          "type": "`$NUMBER`"
        },
        {
          "name": "exchange_rate",
          "type": "`$NUMBER`"
        },
        {
          "name": "from",
          "type": "`$STRING`"
        },
        {
          "name": "timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "to",
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
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_city",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_continentCode",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_countryCode",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_countryName",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_credit",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_currencyCode",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_currencyConverter",
          "type": "`$NUMBER`"
        },
        {
          "name": "geoplugin_currencySymbol",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_currencySymbol_UTF8",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_dmaCode",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_latitude",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_longitude",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_region",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_regionCode",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_regionName",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_request",
          "type": "`$STRING`"
        },
        {
          "name": "geoplugin_status",
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

