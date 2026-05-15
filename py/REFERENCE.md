# JsonIpGeolocation Python SDK Reference

Complete API reference for the JsonIpGeolocation Python SDK.


## JsonIpGeolocationSDK

### Constructor

```python
from json-ip-geolocation_sdk import JsonIpGeolocationSDK

client = JsonIpGeolocationSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
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

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## CurrencygpEntity

```python
currencygp = client.Currencygp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | ``$NUMBER`` | No |  |
| `converted_amount` | ``$NUMBER`` | No |  |
| `exchange_rate` | ``$NUMBER`` | No |  |
| `from` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `to` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Currencygp().load({"id": "currencygp_id"})
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
| `geoplugin_area_code` | ``$STRING`` | No |  |
| `geoplugin_city` | ``$STRING`` | No |  |
| `geoplugin_continent_code` | ``$STRING`` | No |  |
| `geoplugin_country_code` | ``$STRING`` | No |  |
| `geoplugin_country_name` | ``$STRING`` | No |  |
| `geoplugin_credit` | ``$STRING`` | No |  |
| `geoplugin_currency_code` | ``$STRING`` | No |  |
| `geoplugin_currency_converter` | ``$NUMBER`` | No |  |
| `geoplugin_currency_symbol` | ``$STRING`` | No |  |
| `geoplugin_currency_symbol_utf8` | ``$STRING`` | No |  |
| `geoplugin_dma_code` | ``$STRING`` | No |  |
| `geoplugin_latitude` | ``$STRING`` | No |  |
| `geoplugin_longitude` | ``$STRING`` | No |  |
| `geoplugin_region` | ``$STRING`` | No |  |
| `geoplugin_region_code` | ``$STRING`` | No |  |
| `geoplugin_region_name` | ``$STRING`` | No |  |
| `geoplugin_request` | ``$STRING`` | No |  |
| `geoplugin_status` | ``$INTEGER`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Jsongp().load({"id": "jsongp_id"})
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

