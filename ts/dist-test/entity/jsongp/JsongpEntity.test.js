"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('JsongpEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when JSON_IP_GEOLOCATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('JSON_IP_GEOLOCATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.JsonIpGeolocationSDK.test();
        const ent = testsdk.Jsongp();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.JSON_IP_GEOLOCATION_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'jsongp.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "geoplugin_areaCode", "req": false, "short": "Telephone area code", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "geoplugin_city", "req": false, "short": "City name derived from IP address", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "geoplugin_continentCode", "req": false, "short": "Continent code", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "geoplugin_countryCode", "req": false, "short": "ISO 3166-1 alpha-2 country code", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "geoplugin_countryName", "req": false, "short": "Full country name", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "geoplugin_credit", "req": false, "short": "Attribution credit for data sources", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "geoplugin_currencyCode", "req": false, "short": "ISO 4217 currency code for the location", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "geoplugin_currencyConverter", "req": false, "short": "Exchange rate converter value", "type": "`$NUMBER`", "index$": 7 }, { "active": true, "name": "geoplugin_currencySymbol", "req": false, "short": "Currency symbol", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "geoplugin_currencySymbol_UTF8", "req": false, "short": "UTF-8 encoded currency symbol", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "geoplugin_dmaCode", "req": false, "short": "Designated Market Area code", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "geoplugin_latitude", "req": false, "short": "Latitude coordinate", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "geoplugin_longitude", "req": false, "short": "Longitude coordinate", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "geoplugin_region", "req": false, "short": "Region or state name", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "geoplugin_regionCode", "req": false, "short": "Region or state code", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "geoplugin_regionName", "req": false, "short": "Full region or state name", "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "geoplugin_request", "req": false, "short": "The IP address that was geolocated", "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "geoplugin_status", "req": false, "short": "HTTP status code of the response", "type": "`$INTEGER`", "index$": 17 }], "name": "jsongp", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "USD", "kind": "query", "name": "base_currency", "orig": "base_currency", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "8.8.8.8", "kind": "query", "name": "ip", "orig": "ip", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /json.gp", "json": "{\"operationId\":\"getGeolocation\",\"parameters\":[{\"description\":\"The IP address to geolocate. If not provided, the IP address of the requesting client will be used automatically.\",\"in\":\"query\",\"name\":\"ip\",\"required\":false,\"schema\":{\"example\":\"8.8.8.8\",\"format\":\"ipv4\",\"type\":\"string\"}},{\"description\":\"Base currency code for currency conversion\",\"in\":\"query\",\"name\":\"base_currency\",\"required\":false,\"schema\":{\"example\":\"USD\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"success\":{\"value\":{\"geoplugin_areaCode\":\"650\",\"geoplugin_city\":\"Mountain View\",\"geoplugin_continentCode\":\"NA\",\"geoplugin_countryCode\":\"US\",\"geoplugin_countryName\":\"United States\",\"geoplugin_credit\":\"Some of the returned data includes GeoLite data created by MaxMind, available from http://www.maxmind.com\",\"geoplugin_currencyCode\":\"USD\",\"geoplugin_currencyConverter\":1,\"geoplugin_currencySymbol\":\"$\",\"geoplugin_currencySymbol_UTF8\":\"$\",\"geoplugin_dmaCode\":\"807\",\"geoplugin_latitude\":\"37.386\",\"geoplugin_longitude\":\"-122.0838\",\"geoplugin_region\":\"California\",\"geoplugin_regionCode\":\"CA\",\"geoplugin_regionName\":\"California\",\"geoplugin_request\":\"8.8.8.8\",\"geoplugin_status\":200}}},\"schema\":{\"properties\":{\"geoplugin_areaCode\":{\"description\":\"Telephone area code\",\"example\":\"650\",\"type\":\"string\"},\"geoplugin_city\":{\"description\":\"City name derived from IP address\",\"example\":\"Mountain View\",\"type\":\"string\"},\"geoplugin_continentCode\":{\"description\":\"Continent code\",\"example\":\"NA\",\"type\":\"string\"},\"geoplugin_countryCode\":{\"description\":\"ISO 3166-1 alpha-2 country code\",\"example\":\"US\",\"type\":\"string\"},\"geoplugin_countryName\":{\"description\":\"Full country name\",\"example\":\"United States\",\"type\":\"string\"},\"geoplugin_credit\":{\"description\":\"Attribution credit for data sources\",\"type\":\"string\"},\"geoplugin_currencyCode\":{\"description\":\"ISO 4217 currency code for the location\",\"example\":\"USD\",\"type\":\"string\"},\"geoplugin_currencyConverter\":{\"description\":\"Exchange rate converter value\",\"example\":1,\"type\":\"number\"},\"geoplugin_currencySymbol\":{\"description\":\"Currency symbol\",\"example\":\"$\",\"type\":\"string\"},\"geoplugin_currencySymbol_UTF8\":{\"description\":\"UTF-8 encoded currency symbol\",\"example\":\"$\",\"type\":\"string\"},\"geoplugin_dmaCode\":{\"description\":\"Designated Market Area code\",\"example\":\"807\",\"type\":\"string\"},\"geoplugin_latitude\":{\"description\":\"Latitude coordinate\",\"example\":\"37.386\",\"type\":\"string\"},\"geoplugin_longitude\":{\"description\":\"Longitude coordinate\",\"example\":\"-122.0838\",\"type\":\"string\"},\"geoplugin_region\":{\"description\":\"Region or state name\",\"example\":\"California\",\"type\":\"string\"},\"geoplugin_regionCode\":{\"description\":\"Region or state code\",\"example\":\"CA\",\"type\":\"string\"},\"geoplugin_regionName\":{\"description\":\"Full region or state name\",\"example\":\"California\",\"type\":\"string\"},\"geoplugin_request\":{\"description\":\"The IP address that was geolocated\",\"example\":\"8.8.8.8\",\"type\":\"string\"},\"geoplugin_status\":{\"description\":\"HTTP status code of the response\",\"example\":200,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful geolocation response\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded (120 requests per minute on free plan)\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/json.gp", "segments": [{ "lit": "json.gp" }], "select": { "exist": ["base_currency", "ip"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "jsongp", "name__orig": "jsongp", "Name": "Jsongp", "name_": "jsongp", "name-": "jsongp", "NAME": "JSONGP", "index$": 1 }, { "active": true, "entity": "jsongp", "key$": "BasicJsongpFlow", "kind": "basic", "name": "BasicJsongpFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "jsongp_ref01", "srcdatavar": "jsongp_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-jsongp_ref01" } }], "index$": 0 }] }, 'Jsongp');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let jsongp_ref01_data = Object.values(setup.data.existing.jsongp)[0];
        // LOAD
        const jsongp_ref01_ent = client.Jsongp();
        const jsongp_ref01_match_dt0 = {};
        const jsongp_ref01_data_dt0 = (await jsongp_ref01_ent.load(jsongp_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != jsongp_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/jsongp/JsongpTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.JsonIpGeolocationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['jsongp01', 'jsongp02', 'jsongp03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'JSON_IP_GEOLOCATION_TEST_JSONGP_ENTID': idmap,
        'JSON_IP_GEOLOCATION_TEST_LIVE': 'FALSE',
        'JSON_IP_GEOLOCATION_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['JSON_IP_GEOLOCATION_TEST_JSONGP_ENTID'];
    const live = 'TRUE' === env.JSON_IP_GEOLOCATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['JSON_IP_GEOLOCATION_TEST_JSONGP_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.JsonIpGeolocationSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.JSON_IP_GEOLOCATION_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=JsongpEntity.test.js.map