# JsonIpGeolocation Golang SDK Reference

Complete API reference for the JsonIpGeolocation Golang SDK.


## JsonIpGeolocationSDK

### Constructor

```go
func NewJsonIpGeolocationSDK(options map[string]any) *JsonIpGeolocationSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *JsonIpGeolocationSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *JsonIpGeolocationSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Currencygp(data map[string]any) JsonIpGeolocationEntity`

Create a new `Currencygp` entity instance. Pass `nil` for no initial data.

#### `Jsongp(data map[string]any) JsonIpGeolocationEntity`

Create a new `Jsongp` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CurrencygpEntity

```go
currencygp := client.Currencygp(nil)
fmt.Println(currencygp.GetName()) // "currencygp"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `float64` | No | Original amount to convert |
| `converted_amount` | `float64` | No | Converted amount in target currency |
| `exchange_rate` | `float64` | No | Exchange rate used for conversion |
| `from` | `string` | No | Source currency code |
| `timestamp` | `string` | No | Timestamp of the conversion |
| `to` | `string` | No | Target currency code |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Currencygp(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CurrencygpEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## JsongpEntity

```go
jsongp := client.Jsongp(nil)
fmt.Println(jsongp.GetName()) // "jsongp"
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
| `geoplugin_currencyConverter` | `float64` | No | Exchange rate converter value |
| `geoplugin_currencySymbol` | `string` | No | Currency symbol |
| `geoplugin_currencySymbol_UTF8` | `string` | No | UTF-8 encoded currency symbol |
| `geoplugin_dmaCode` | `string` | No | Designated Market Area code |
| `geoplugin_latitude` | `string` | No | Latitude coordinate |
| `geoplugin_longitude` | `string` | No | Longitude coordinate |
| `geoplugin_region` | `string` | No | Region or state name |
| `geoplugin_regionCode` | `string` | No | Region or state code |
| `geoplugin_regionName` | `string` | No | Full region or state name |
| `geoplugin_request` | `string` | No | The IP address that was geolocated |
| `geoplugin_status` | `int` | No | HTTP status code of the response |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Jsongp(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `JsongpEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewJsonIpGeolocationSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

