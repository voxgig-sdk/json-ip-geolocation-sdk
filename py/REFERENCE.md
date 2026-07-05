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
| `amount` | `float` | No |  |
| `converted_amount` | `float` | No |  |
| `exchange_rate` | `float` | No |  |
| `from` | `str` | No |  |
| `timestamp` | `str` | No |  |
| `to` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Currencygp().load()
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
| `geoplugin_area_code` | `str` | No |  |
| `geoplugin_city` | `str` | No |  |
| `geoplugin_continent_code` | `str` | No |  |
| `geoplugin_country_code` | `str` | No |  |
| `geoplugin_country_name` | `str` | No |  |
| `geoplugin_credit` | `str` | No |  |
| `geoplugin_currency_code` | `str` | No |  |
| `geoplugin_currency_converter` | `float` | No |  |
| `geoplugin_currency_symbol` | `str` | No |  |
| `geoplugin_currency_symbol_utf8` | `str` | No |  |
| `geoplugin_dma_code` | `str` | No |  |
| `geoplugin_latitude` | `str` | No |  |
| `geoplugin_longitude` | `str` | No |  |
| `geoplugin_region` | `str` | No |  |
| `geoplugin_region_code` | `str` | No |  |
| `geoplugin_region_name` | `str` | No |  |
| `geoplugin_request` | `str` | No |  |
| `geoplugin_status` | `int` | No |  |

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

