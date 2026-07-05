# JsonIpGeolocation Golang SDK



The Golang SDK for the JsonIpGeolocation API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Currencygp(nil)` — each with the same small set of operations (`Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/json-ip-geolocation-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/json-ip-geolocation-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/json-ip-geolocation-sdk/go=../json-ip-geolocation-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/json-ip-geolocation-sdk/go"
)

func main() {
    client := sdk.New()

    // Load a single currencygp — the value is the loaded record.
    currencygp, err := client.Currencygp(nil).Load(nil, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(currencygp)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
currencygp, err := client.Currencygp(nil).Load(nil, nil)
if err != nil {
    // handle err
    return
}
_ = currencygp
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

currencygp, err := client.Currencygp(nil).Load(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(currencygp) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewJsonIpGeolocationSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
JSON_IP_GEOLOCATION_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewJsonIpGeolocationSDK

```go
func NewJsonIpGeolocationSDK(options map[string]any) *JsonIpGeolocationSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *JsonIpGeolocationSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### JsonIpGeolocationSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Currencygp` | `(data map[string]any) JsonIpGeolocationEntity` | Create a Currencygp entity instance. |
| `Jsongp` | `(data map[string]any) JsonIpGeolocationEntity` | Create a Jsongp entity instance. |

### Entity interface (JsonIpGeolocationEntity)

All entities implement the `JsonIpGeolocationEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    currencygp, err := client.Currencygp(nil).Load(nil, nil)
    if err != nil { /* handle */ }
    // currencygp is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Currencygp

| Field | Description |
| --- | --- |
| `"amount"` |  |
| `"converted_amount"` |  |
| `"exchange_rate"` |  |
| `"from"` |  |
| `"timestamp"` |  |
| `"to"` |  |

Operations: Load.

API path: `/currency.gp`

#### Jsongp

| Field | Description |
| --- | --- |
| `"geoplugin_area_code"` |  |
| `"geoplugin_city"` |  |
| `"geoplugin_continent_code"` |  |
| `"geoplugin_country_code"` |  |
| `"geoplugin_country_name"` |  |
| `"geoplugin_credit"` |  |
| `"geoplugin_currency_code"` |  |
| `"geoplugin_currency_converter"` |  |
| `"geoplugin_currency_symbol"` |  |
| `"geoplugin_currency_symbol_utf8"` |  |
| `"geoplugin_dma_code"` |  |
| `"geoplugin_latitude"` |  |
| `"geoplugin_longitude"` |  |
| `"geoplugin_region"` |  |
| `"geoplugin_region_code"` |  |
| `"geoplugin_region_name"` |  |
| `"geoplugin_request"` |  |
| `"geoplugin_status"` |  |

Operations: Load.

API path: `/json.gp`



## Entities


### Currencygp

Create an instance: `currencygp := client.Currencygp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `float64` |  |
| `converted_amount` | `float64` |  |
| `exchange_rate` | `float64` |  |
| `from` | `string` |  |
| `timestamp` | `string` |  |
| `to` | `string` |  |

#### Example: Load

```go
currencygp, err := client.Currencygp(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(currencygp) // the loaded record
```


### Jsongp

Create an instance: `jsongp := client.Jsongp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `geoplugin_area_code` | `string` |  |
| `geoplugin_city` | `string` |  |
| `geoplugin_continent_code` | `string` |  |
| `geoplugin_country_code` | `string` |  |
| `geoplugin_country_name` | `string` |  |
| `geoplugin_credit` | `string` |  |
| `geoplugin_currency_code` | `string` |  |
| `geoplugin_currency_converter` | `float64` |  |
| `geoplugin_currency_symbol` | `string` |  |
| `geoplugin_currency_symbol_utf8` | `string` |  |
| `geoplugin_dma_code` | `string` |  |
| `geoplugin_latitude` | `string` |  |
| `geoplugin_longitude` | `string` |  |
| `geoplugin_region` | `string` |  |
| `geoplugin_region_code` | `string` |  |
| `geoplugin_region_name` | `string` |  |
| `geoplugin_request` | `string` |  |
| `geoplugin_status` | `int` |  |

#### Example: Load

```go
jsongp, err := client.Jsongp(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(jsongp) // the loaded record
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/json-ip-geolocation-sdk/go/
├── json-ip-geolocation.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/json-ip-geolocation-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
currencygp := client.Currencygp(nil)
currencygp.Load(nil, nil)

// currencygp.Data() now returns the currencygp data from the last load
// currencygp.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
