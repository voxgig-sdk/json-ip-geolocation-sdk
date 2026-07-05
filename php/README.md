# JsonIpGeolocation PHP SDK



The PHP SDK for the JsonIpGeolocation API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Currencygp()` — with named operations (`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/json-ip-geolocation-sdk/releases](https://github.com/voxgig-sdk/json-ip-geolocation-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'jsonipgeolocation_sdk.php';

$client = new JsonIpGeolocationSDK();
```

### 3. Load a currencygp

```php
try {
    // load() returns the bare Currencygp record (throws on error).
    $currencygp = $client->Currencygp()->load();
    print_r($currencygp);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $currencygp = $client->Currencygp()->load();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = JsonIpGeolocationSDK::test();

// Entity ops return the bare mock record (throws on error).
$currencygp = $client->Currencygp()->load();
print_r($currencygp);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new JsonIpGeolocationSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
JSON_IP_GEOLOCATION_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### JsonIpGeolocationSDK

```php
require_once 'jsonipgeolocation_sdk.php';
$client = new JsonIpGeolocationSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = JsonIpGeolocationSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### JsonIpGeolocationSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Currencygp` | `($data): CurrencygpEntity` | Create a Currencygp entity instance. |
| `Jsongp` | `($data): JsongpEntity` | Create a Jsongp entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Currencygp

| Field | Description |
| --- | --- |
| `amount` |  |
| `converted_amount` |  |
| `exchange_rate` |  |
| `from` |  |
| `timestamp` |  |
| `to` |  |

Operations: Load.

API path: `/currency.gp`

#### Jsongp

| Field | Description |
| --- | --- |
| `geoplugin_area_code` |  |
| `geoplugin_city` |  |
| `geoplugin_continent_code` |  |
| `geoplugin_country_code` |  |
| `geoplugin_country_name` |  |
| `geoplugin_credit` |  |
| `geoplugin_currency_code` |  |
| `geoplugin_currency_converter` |  |
| `geoplugin_currency_symbol` |  |
| `geoplugin_currency_symbol_utf8` |  |
| `geoplugin_dma_code` |  |
| `geoplugin_latitude` |  |
| `geoplugin_longitude` |  |
| `geoplugin_region` |  |
| `geoplugin_region_code` |  |
| `geoplugin_region_name` |  |
| `geoplugin_request` |  |
| `geoplugin_status` |  |

Operations: Load.

API path: `/json.gp`



## Entities


### Currencygp

Create an instance: `$currencygp = $client->Currencygp();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `float` |  |
| `converted_amount` | `float` |  |
| `exchange_rate` | `float` |  |
| `from` | `string` |  |
| `timestamp` | `string` |  |
| `to` | `string` |  |

#### Example: Load

```php
// load() returns the bare Currencygp record (throws on error).
$currencygp = $client->Currencygp()->load();
```


### Jsongp

Create an instance: `$jsongp = $client->Jsongp();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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
| `geoplugin_currency_converter` | `float` |  |
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

```php
// load() returns the bare Jsongp record (throws on error).
$jsongp = $client->Jsongp()->load();
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── jsonipgeolocation_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`jsonipgeolocation_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$currencygp = $client->Currencygp();
$currencygp->load();

// $currencygp->data_get() now returns the currencygp data from the last load
// $currencygp->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
