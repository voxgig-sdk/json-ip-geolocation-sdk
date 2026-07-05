# JsonIpGeolocation Ruby SDK Reference

Complete API reference for the JsonIpGeolocation Ruby SDK.


## JsonIpGeolocationSDK

### Constructor

```ruby
require_relative 'JsonIpGeolocation_sdk'

client = JsonIpGeolocationSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `JsonIpGeolocationSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = JsonIpGeolocationSDK.test
```


### Instance Methods

#### `Currencygp(data = nil)`

Create a new `Currencygp` entity instance. Pass `nil` for no initial data.

#### `Jsongp(data = nil)`

Create a new `Jsongp` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CurrencygpEntity

```ruby
currencygp = client.Currencygp
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `Float` | No |  |
| `converted_amount` | `Float` | No |  |
| `exchange_rate` | `Float` | No |  |
| `from` | `String` | No |  |
| `timestamp` | `String` | No |  |
| `to` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Currencygp.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CurrencygpEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## JsongpEntity

```ruby
jsongp = client.Jsongp
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geoplugin_area_code` | `String` | No |  |
| `geoplugin_city` | `String` | No |  |
| `geoplugin_continent_code` | `String` | No |  |
| `geoplugin_country_code` | `String` | No |  |
| `geoplugin_country_name` | `String` | No |  |
| `geoplugin_credit` | `String` | No |  |
| `geoplugin_currency_code` | `String` | No |  |
| `geoplugin_currency_converter` | `Float` | No |  |
| `geoplugin_currency_symbol` | `String` | No |  |
| `geoplugin_currency_symbol_utf8` | `String` | No |  |
| `geoplugin_dma_code` | `String` | No |  |
| `geoplugin_latitude` | `String` | No |  |
| `geoplugin_longitude` | `String` | No |  |
| `geoplugin_region` | `String` | No |  |
| `geoplugin_region_code` | `String` | No |  |
| `geoplugin_region_name` | `String` | No |  |
| `geoplugin_request` | `String` | No |  |
| `geoplugin_status` | `Integer` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Jsongp.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `JsongpEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = JsonIpGeolocationSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

