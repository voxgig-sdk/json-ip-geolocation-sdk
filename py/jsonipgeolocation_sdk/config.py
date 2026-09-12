# JsonIpGeolocation SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "JsonIpGeolocation",
            "slug": "json-ip-geolocation",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "http://www.geoplugin.net",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "currencygp": {},
                "jsongp": {},
            },
        },
        "entity": {
      "currencygp": {
        "fields": [
          {
            "name": "amount",
            "short": "Original amount to convert",
            "type": "`$NUMBER`",
          },
          {
            "name": "converted_amount",
            "short": "Converted amount in target currency",
            "type": "`$NUMBER`",
          },
          {
            "name": "exchange_rate",
            "short": "Exchange rate used for conversion",
            "type": "`$NUMBER`",
          },
          {
            "name": "from",
            "short": "Source currency code",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "timestamp",
            "short": "Timestamp of the conversion",
            "type": "`$STRING`",
          },
          {
            "name": "to",
            "short": "Target currency code",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": "USD",
                      "kind": "query",
                      "name": "from",
                      "orig": "from",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "EUR",
                      "kind": "query",
                      "name": "to",
                      "orig": "to",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/currency.gp",
                "segments": [
                  {
                    "lit": "currency.gp",
                  },
                ],
                "select": {
                  "exist": [
                    "amount",
                    "from",
                    "to",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "currency.gp",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "jsongp": {
        "fields": [
          {
            "name": "geoplugin_areaCode",
            "short": "Telephone area code",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_city",
            "short": "City name derived from IP address",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_continentCode",
            "short": "Continent code",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_countryCode",
            "short": "ISO 3166-1 alpha-2 country code",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_countryName",
            "short": "Full country name",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_credit",
            "short": "Attribution credit for data sources",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_currencyCode",
            "short": "ISO 4217 currency code for the location",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_currencyConverter",
            "short": "Exchange rate converter value",
            "type": "`$NUMBER`",
          },
          {
            "name": "geoplugin_currencySymbol",
            "short": "Currency symbol",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_currencySymbol_UTF8",
            "short": "UTF-8 encoded currency symbol",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_dmaCode",
            "short": "Designated Market Area code",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_latitude",
            "short": "Latitude coordinate",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_longitude",
            "short": "Longitude coordinate",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_region",
            "short": "Region or state name",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_regionCode",
            "short": "Region or state code",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_regionName",
            "short": "Full region or state name",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_request",
            "short": "The IP address that was geolocated",
            "type": "`$STRING`",
          },
          {
            "name": "geoplugin_status",
            "short": "HTTP status code of the response",
            "type": "`$INTEGER`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": "8.8.8.8",
                      "kind": "query",
                      "name": "ip",
                      "orig": "ip",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/json.gp",
                "segments": [
                  {
                    "lit": "json.gp",
                  },
                ],
                "select": {
                  "exist": [
                    "base_currency",
                    "ip",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "json.gp",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
