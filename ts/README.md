# JsonIpGeolocation TypeScript SDK



The TypeScript SDK for the JsonIpGeolocation API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Currencygp()` — each with a small set of operations (`load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/json-ip-geolocation-sdk/releases](https://github.com/voxgig-sdk/json-ip-geolocation-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { JsonIpGeolocationSDK } from '@voxgig-sdk/json-ip-geolocation'

const client = new JsonIpGeolocationSDK()
```

### 3. Load a currencygp

`load()` returns the entity directly and throws on failure:

```ts
try {
  const currencygp = await client.Currencygp().load({ amount: 1, from: 'example_from', to: 'example_to' })
  console.log(currencygp)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const currencygp = await client.Currencygp().load({ amount: 1, from: "example", to: "example" })
  console.log(currencygp)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = JsonIpGeolocationSDK.test()

const currencygp = await client.Currencygp().load({ amount: 1, from: 'example_from', to: 'example_to' })
// currencygp is the entity, populated with mock response data
// — call currencygp.data() for the record itself
console.log(currencygp)
```

You can also use the instance method:

```ts
const client = new JsonIpGeolocationSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Currencygp()

// First call runs the operation and stores its result
await entity.load({ amount: 1, from: 'example_from', to: 'example_to' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new JsonIpGeolocationSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
JSON_IP_GEOLOCATION_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### JsonIpGeolocationSDK

#### Constructor

```ts
new JsonIpGeolocationSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Currencygp(data?)` | `CurrencygpEntity` | Create a Currencygp entity instance. |
| `Jsongp(data?)` | `JsongpEntity` | Create a Jsongp entity instance. |
| `tester(testopts?, sdkopts?)` | `JsonIpGeolocationSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `JsonIpGeolocationSDK.test(testopts?, sdkopts?)` | `JsonIpGeolocationSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): JsonIpGeolocationSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Currencygp

| Field | Description |
| --- | --- |
| `amount` | Original amount to convert |
| `converted_amount` | Converted amount in target currency |
| `exchange_rate` | Exchange rate used for conversion |
| `from` | Source currency code |
| `timestamp` | Timestamp of the conversion |
| `to` | Target currency code |

Operations: load.

API path: `/currency.gp`

#### Jsongp

| Field | Description |
| --- | --- |
| `geoplugin_areaCode` | Telephone area code |
| `geoplugin_city` | City name derived from IP address |
| `geoplugin_continentCode` | Continent code |
| `geoplugin_countryCode` | ISO 3166-1 alpha-2 country code |
| `geoplugin_countryName` | Full country name |
| `geoplugin_credit` | Attribution credit for data sources |
| `geoplugin_currencyCode` | ISO 4217 currency code for the location |
| `geoplugin_currencyConverter` | Exchange rate converter value |
| `geoplugin_currencySymbol` | Currency symbol |
| `geoplugin_currencySymbol_UTF8` | UTF-8 encoded currency symbol |
| `geoplugin_dmaCode` | Designated Market Area code |
| `geoplugin_latitude` | Latitude coordinate |
| `geoplugin_longitude` | Longitude coordinate |
| `geoplugin_region` | Region or state name |
| `geoplugin_regionCode` | Region or state code |
| `geoplugin_regionName` | Full region or state name |
| `geoplugin_request` | The IP address that was geolocated |
| `geoplugin_status` | HTTP status code of the response |

Operations: load.

API path: `/json.gp`



## Entities


### Currencygp

Create an instance: `const currencygp = client.Currencygp()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `number` | Original amount to convert |
| `converted_amount` | `number` | Converted amount in target currency |
| `exchange_rate` | `number` | Exchange rate used for conversion |
| `from` | `string` | Source currency code |
| `timestamp` | `string` | Timestamp of the conversion |
| `to` | `string` | Target currency code |

#### Example: Load

```ts
const currencygp = await client.Currencygp().load({ amount: 1, from: 'from', to: 'to' })
```


### Jsongp

Create an instance: `const jsongp = client.Jsongp()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `geoplugin_areaCode` | `string` | Telephone area code |
| `geoplugin_city` | `string` | City name derived from IP address |
| `geoplugin_continentCode` | `string` | Continent code |
| `geoplugin_countryCode` | `string` | ISO 3166-1 alpha-2 country code |
| `geoplugin_countryName` | `string` | Full country name |
| `geoplugin_credit` | `string` | Attribution credit for data sources |
| `geoplugin_currencyCode` | `string` | ISO 4217 currency code for the location |
| `geoplugin_currencyConverter` | `number` | Exchange rate converter value |
| `geoplugin_currencySymbol` | `string` | Currency symbol |
| `geoplugin_currencySymbol_UTF8` | `string` | UTF-8 encoded currency symbol |
| `geoplugin_dmaCode` | `string` | Designated Market Area code |
| `geoplugin_latitude` | `string` | Latitude coordinate |
| `geoplugin_longitude` | `string` | Longitude coordinate |
| `geoplugin_region` | `string` | Region or state name |
| `geoplugin_regionCode` | `string` | Region or state code |
| `geoplugin_regionName` | `string` | Full region or state name |
| `geoplugin_request` | `string` | The IP address that was geolocated |
| `geoplugin_status` | `number` | HTTP status code of the response |

#### Example: Load

```ts
const jsongp = await client.Jsongp().load()
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
json-ip-geolocation/
├── src/
│   ├── JsonIpGeolocationSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { JsonIpGeolocationSDK } from '@voxgig-sdk/json-ip-geolocation'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const currencygp = client.Currencygp()
await currencygp.load({ amount: 1, from: "example", to: "example" })

// currencygp.data() now returns the currencygp data from the last `load`
// currencygp.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
