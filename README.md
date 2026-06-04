# JsonIpGeolocation SDK

Look up visitor geolocation from an IP address and convert currencies using GeoPlugin's JSON endpoint

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About IP Geolocation & Currency Converter

[GeoPlugin](https://www.geoplugin.net) is a long-running IP geolocation and currency conversion service run by geoPlugin.com. It maps a visitor's IP address to country, region, city and coordinates, and pairs that with currency and locale metadata so a website can adapt content to the visitor without server-side detection.

What you get from the API:
- Visitor IP address echoed back
- Country, region/state and city
- Latitude and longitude
- Currency code, symbol and an up-to-date exchange rate against a chosen base
- Language and calling-code hints

The JSON endpoint lives at `http://www.geoplugin.net/json.gp` and can be called either with no parameters (lookup of the caller's own IP) or with `ip=` to look up an arbitrary address. Passing `base_currency=` returns conversion rates relative to that currency. Underlying geolocation data comes from MaxMind's GeoLite database. A free tier is available; paid plans exist for higher volume and SSL access.

## Try it

**TypeScript**
```bash
npm install json-ip-geolocation
```

**Python**
```bash
pip install json-ip-geolocation-sdk
```

**PHP**
```bash
composer require voxgig/json-ip-geolocation-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/json-ip-geolocation-sdk/go
```

**Ruby**
```bash
gem install json-ip-geolocation-sdk
```

**Lua**
```bash
luarocks install json-ip-geolocation-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { JsonIpGeolocationSDK } from 'json-ip-geolocation'

const client = new JsonIpGeolocationSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o json-ip-geolocation-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "json-ip-geolocation": {
      "command": "/abs/path/to/json-ip-geolocation-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Currencygp** |  | `/currency.gp` |
| **Jsongp** |  | `/json.gp` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from jsonipgeolocation_sdk import JsonIpGeolocationSDK

client = JsonIpGeolocationSDK({})


# Load a specific currencygp
currencygp, err = client.Currencygp(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'jsonipgeolocation_sdk.php';

$client = new JsonIpGeolocationSDK([]);


// Load a specific currencygp
[$currencygp, $err] = $client->Currencygp(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/json-ip-geolocation-sdk/go"

client := sdk.NewJsonIpGeolocationSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "JsonIpGeolocation_sdk"

client = JsonIpGeolocationSDK.new({})


# Load a specific currencygp
currencygp, err = client.Currencygp(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("json-ip-geolocation_sdk")

local client = sdk.new({})


-- Load a specific currencygp
local currencygp, err = client:Currencygp(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = JsonIpGeolocationSDK.test()
const result = await client.Currencygp().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = JsonIpGeolocationSDK.test(None, None)
result, err = client.Currencygp(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = JsonIpGeolocationSDK::test(null, null);
[$result, $err] = $client->Currencygp(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Currencygp(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = JsonIpGeolocationSDK.test(nil, nil)
result, err = client.Currencygp(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Currencygp(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the IP Geolocation & Currency Converter

- Upstream: [https://www.geoplugin.com/](https://www.geoplugin.com/)
- API docs: [https://www.geoplugin.com/webservices/json](https://www.geoplugin.com/webservices/json)

- Use of GeoPlugin geolocation data is conditional on accepting the Creative Commons Attribution-ShareAlike 3.0 Unported License.
- Attribution to GeoPlugin (and to MaxMind's GeoLite database, which underlies the data) is expected when the data is redistributed.
- Derivative works that share the data must be released under the same licence terms.

---

Generated from the IP Geolocation & Currency Converter OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
