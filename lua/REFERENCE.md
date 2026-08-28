# JsonIpGeolocation Lua SDK Reference

Complete API reference for the JsonIpGeolocation Lua SDK.


## JsonIpGeolocationSDK

### Constructor

```lua
local sdk = require("json-ip-geolocation_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Currencygp(data)`

Create a new `Currencygp` entity instance. Pass `nil` for no initial data.

#### `Jsongp(data)`

Create a new `Jsongp` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CurrencygpEntity

```lua
local currencygp = client:Currencygp(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | No | Original amount to convert |
| `converted_amount` | `number` | No | Converted amount in target currency |
| `exchange_rate` | `number` | No | Exchange rate used for conversion |
| `from` | `string` | No | Source currency code |
| `timestamp` | `string` | No | Timestamp of the conversion |
| `to` | `string` | No | Target currency code |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Currencygp():load({ amount = 1, from = "from", to = "to" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CurrencygpEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## JsongpEntity

```lua
local jsongp = client:Jsongp(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geoplugin_areaCode` | `string` | No | Telephone area code |
| `geoplugin_city` | `string` | No | City name derived from IP address |
| `geoplugin_continentCode` | `string` | No | Continent code |
| `geoplugin_countryCode` | `string` | No | ISO 3166-1 alpha-2 country code |
| `geoplugin_countryName` | `string` | No | Full country name |
| `geoplugin_credit` | `string` | No | Attribution credit for data sources |
| `geoplugin_currencyCode` | `string` | No | ISO 4217 currency code for the location |
| `geoplugin_currencyConverter` | `number` | No | Exchange rate converter value |
| `geoplugin_currencySymbol` | `string` | No | Currency symbol |
| `geoplugin_currencySymbol_UTF8` | `string` | No | UTF-8 encoded currency symbol |
| `geoplugin_dmaCode` | `string` | No | Designated Market Area code |
| `geoplugin_latitude` | `string` | No | Latitude coordinate |
| `geoplugin_longitude` | `string` | No | Longitude coordinate |
| `geoplugin_region` | `string` | No | Region or state name |
| `geoplugin_regionCode` | `string` | No | Region or state code |
| `geoplugin_regionName` | `string` | No | Full region or state name |
| `geoplugin_request` | `string` | No | The IP address that was geolocated |
| `geoplugin_status` | `number` | No | HTTP status code of the response |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Jsongp():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JsongpEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
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

