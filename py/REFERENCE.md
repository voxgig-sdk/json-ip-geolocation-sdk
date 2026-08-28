# JsonIpGeolocation Python SDK Reference

Complete API reference for the JsonIpGeolocation Python SDK.


## JsonIpGeolocationSDK

### Constructor

```python
from jsonipgeolocation_sdk import JsonIpGeolocationSDK

client = JsonIpGeolocationSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `JsonIpGeolocationSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = JsonIpGeolocationSDK.test()
```


### Instance Methods

#### `Currencygp(data=None)`

Create a new `CurrencygpEntity` instance. Pass `None` for no initial data.

#### `Jsongp(data=None)`

Create a new `JsongpEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CurrencygpEntity

```python
currencygp = client.Currencygp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `float` | No | Original amount to convert |
| `converted_amount` | `float` | No | Converted amount in target currency |
| `exchange_rate` | `float` | No | Exchange rate used for conversion |
| `from` | `str` | No | Source currency code |
| `timestamp` | `str` | No | Timestamp of the conversion |
| `to` | `str` | No | Target currency code |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Currencygp().load({"amount": 1, "from": "from", "to": "to"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CurrencygpEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## JsongpEntity

```python
jsongp = client.Jsongp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geoplugin_areaCode` | `str` | No | Telephone area code |
| `geoplugin_city` | `str` | No | City name derived from IP address |
| `geoplugin_continentCode` | `str` | No | Continent code |
| `geoplugin_countryCode` | `str` | No | ISO 3166-1 alpha-2 country code |
| `geoplugin_countryName` | `str` | No | Full country name |
| `geoplugin_credit` | `str` | No | Attribution credit for data sources |
| `geoplugin_currencyCode` | `str` | No | ISO 4217 currency code for the location |
| `geoplugin_currencyConverter` | `float` | No | Exchange rate converter value |
| `geoplugin_currencySymbol` | `str` | No | Currency symbol |
| `geoplugin_currencySymbol_UTF8` | `str` | No | UTF-8 encoded currency symbol |
| `geoplugin_dmaCode` | `str` | No | Designated Market Area code |
| `geoplugin_latitude` | `str` | No | Latitude coordinate |
| `geoplugin_longitude` | `str` | No | Longitude coordinate |
| `geoplugin_region` | `str` | No | Region or state name |
| `geoplugin_regionCode` | `str` | No | Region or state code |
| `geoplugin_regionName` | `str` | No | Full region or state name |
| `geoplugin_request` | `str` | No | The IP address that was geolocated |
| `geoplugin_status` | `int` | No | HTTP status code of the response |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Jsongp().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JsongpEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = JsonIpGeolocationSDK({
    "feature": {
        "test": {"active": True},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

