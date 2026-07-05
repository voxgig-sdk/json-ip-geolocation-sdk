# JsonIpGeolocation TypeScript SDK Reference

Complete API reference for the JsonIpGeolocation TypeScript SDK.


## JsonIpGeolocationSDK

### Constructor

```ts
new JsonIpGeolocationSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `JsonIpGeolocationSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = JsonIpGeolocationSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `JsonIpGeolocationSDK` instance in test mode.


### Instance Methods

#### `Currencygp(data?: object)`

Create a new `Currencygp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CurrencygpEntity` instance.

#### `Jsongp(data?: object)`

Create a new `Jsongp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JsongpEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `JsonIpGeolocationSDK.test()`.

**Returns:** `JsonIpGeolocationSDK` instance in test mode.


---

## CurrencygpEntity

```ts
const currencygp = client.Currencygp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | No |  |
| `converted_amount` | `number` | No |  |
| `exchange_rate` | `number` | No |  |
| `from` | `string` | No |  |
| `timestamp` | `string` | No |  |
| `to` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Currencygp().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CurrencygpEntity` instance with the same client and
options.

#### `client()`

Return the parent `JsonIpGeolocationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JsongpEntity

```ts
const jsongp = client.Jsongp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geoplugin_area_code` | `string` | No |  |
| `geoplugin_city` | `string` | No |  |
| `geoplugin_continent_code` | `string` | No |  |
| `geoplugin_country_code` | `string` | No |  |
| `geoplugin_country_name` | `string` | No |  |
| `geoplugin_credit` | `string` | No |  |
| `geoplugin_currency_code` | `string` | No |  |
| `geoplugin_currency_converter` | `number` | No |  |
| `geoplugin_currency_symbol` | `string` | No |  |
| `geoplugin_currency_symbol_utf8` | `string` | No |  |
| `geoplugin_dma_code` | `string` | No |  |
| `geoplugin_latitude` | `string` | No |  |
| `geoplugin_longitude` | `string` | No |  |
| `geoplugin_region` | `string` | No |  |
| `geoplugin_region_code` | `string` | No |  |
| `geoplugin_region_name` | `string` | No |  |
| `geoplugin_request` | `string` | No |  |
| `geoplugin_status` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Jsongp().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JsongpEntity` instance with the same client and
options.

#### `client()`

Return the parent `JsonIpGeolocationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new JsonIpGeolocationSDK({
  feature: {
    test: { active: true },
  }
})
```

