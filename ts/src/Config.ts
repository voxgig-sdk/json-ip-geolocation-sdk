
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
    base: 'http://www.geoplugin.net',

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
          "active": true,
          "name": "amount",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 0
        },
        {
          "active": true,
          "name": "converted_amount",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 1
        },
        {
          "active": true,
          "name": "exchange_rate",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 2
        },
        {
          "active": true,
          "name": "from",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "timestamp",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "to",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        }
      ],
      "name": "currencygp",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": 100,
                    "kind": "query",
                    "name": "amount",
                    "orig": "amount",
                    "reqd": true,
                    "type": "`$NUMBER`"
                  },
                  {
                    "active": true,
                    "example": "USD",
                    "kind": "query",
                    "name": "from",
                    "orig": "from",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
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
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "jsongp": {
      "fields": [
        {
          "active": true,
          "name": "geoplugin_areaCode",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "geoplugin_city",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "geoplugin_continentCode",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "geoplugin_countryCode",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "geoplugin_countryName",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "geoplugin_credit",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "geoplugin_currencyCode",
          "req": false,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "geoplugin_currencyConverter",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 7
        },
        {
          "active": true,
          "name": "geoplugin_currencySymbol",
          "req": false,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "geoplugin_currencySymbol_UTF8",
          "req": false,
          "type": "`$STRING`",
          "index$": 9
        },
        {
          "active": true,
          "name": "geoplugin_dmaCode",
          "req": false,
          "type": "`$STRING`",
          "index$": 10
        },
        {
          "active": true,
          "name": "geoplugin_latitude",
          "req": false,
          "type": "`$STRING`",
          "index$": 11
        },
        {
          "active": true,
          "name": "geoplugin_longitude",
          "req": false,
          "type": "`$STRING`",
          "index$": 12
        },
        {
          "active": true,
          "name": "geoplugin_region",
          "req": false,
          "type": "`$STRING`",
          "index$": 13
        },
        {
          "active": true,
          "name": "geoplugin_regionCode",
          "req": false,
          "type": "`$STRING`",
          "index$": 14
        },
        {
          "active": true,
          "name": "geoplugin_regionName",
          "req": false,
          "type": "`$STRING`",
          "index$": 15
        },
        {
          "active": true,
          "name": "geoplugin_request",
          "req": false,
          "type": "`$STRING`",
          "index$": 16
        },
        {
          "active": true,
          "name": "geoplugin_status",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 17
        }
      ],
      "name": "jsongp",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "USD",
                    "kind": "query",
                    "name": "base_currency",
                    "orig": "base_currency",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "8.8.8.8",
                    "kind": "query",
                    "name": "ip",
                    "orig": "ip",
                    "reqd": false,
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
              },
              "index$": 0
            }
          ],
          "key$": "load"
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

