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
(0, node_test_1.describe)('CurrencygpEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when JSON_IP_GEOLOCATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('JSON_IP_GEOLOCATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.JsonIpGeolocationSDK.test();
        const ent = testsdk.Currencygp();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.JSON_IP_GEOLOCATION_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'currencygp.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "amount", "req": false, "short": "Original amount to convert", "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "converted_amount", "req": false, "short": "Converted amount in target currency", "type": "`$NUMBER`", "index$": 1 }, { "active": true, "name": "exchange_rate", "req": false, "short": "Exchange rate used for conversion", "type": "`$NUMBER`", "index$": 2 }, { "active": true, "name": "from", "req": false, "short": "Source currency code", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "date-time", "name": "timestamp", "req": false, "short": "Timestamp of the conversion", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "to", "req": false, "short": "Target currency code", "type": "`$STRING`", "index$": 5 }], "name": "currencygp", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": 100, "kind": "query", "name": "amount", "orig": "amount", "reqd": true, "type": "`$NUMBER`", "index$": 0 }, { "active": true, "example": "USD", "kind": "query", "name": "from", "orig": "from", "reqd": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "EUR", "kind": "query", "name": "to", "orig": "to", "reqd": true, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /currency.gp", "json": "{\"operationId\":\"convertCurrency\",\"parameters\":[{\"description\":\"Source currency code (3-letter ISO code)\",\"in\":\"query\",\"name\":\"from\",\"required\":true,\"schema\":{\"example\":\"USD\",\"maxLength\":3,\"minLength\":3,\"type\":\"string\"}},{\"description\":\"Target currency code (3-letter ISO code)\",\"in\":\"query\",\"name\":\"to\",\"required\":true,\"schema\":{\"example\":\"EUR\",\"maxLength\":3,\"minLength\":3,\"type\":\"string\"}},{\"description\":\"Amount to convert\",\"in\":\"query\",\"name\":\"amount\",\"required\":true,\"schema\":{\"example\":100,\"format\":\"double\",\"minimum\":0,\"type\":\"number\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"success\":{\"value\":{\"amount\":100,\"converted_amount\":92.15,\"exchange_rate\":0.9215,\"from\":\"USD\",\"timestamp\":\"2024-01-15T10:30:00Z\",\"to\":\"EUR\"}}},\"schema\":{\"properties\":{\"amount\":{\"description\":\"Original amount to convert\",\"example\":100,\"type\":\"number\"},\"converted_amount\":{\"description\":\"Converted amount in target currency\",\"example\":92.15,\"type\":\"number\"},\"exchange_rate\":{\"description\":\"Exchange rate used for conversion\",\"example\":0.9215,\"type\":\"number\"},\"from\":{\"description\":\"Source currency code\",\"example\":\"USD\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the conversion\",\"format\":\"date-time\",\"type\":\"string\"},\"to\":{\"description\":\"Target currency code\",\"example\":\"EUR\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful currency conversion response\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Invalid currency code or amount\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded (120 requests per minute on free plan)\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/currency.gp", "segments": [{ "lit": "currency.gp" }], "select": { "exist": ["amount", "from", "to"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "currencygp", "name__orig": "currencygp", "Name": "Currencygp", "name_": "currencygp", "name-": "currencygp", "NAME": "CURRENCYGP", "index$": 0 }, { "active": true, "entity": "currencygp", "key$": "BasicCurrencygpFlow", "kind": "basic", "name": "BasicCurrencygpFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "currencygp_ref01", "srcdatavar": "currencygp_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-currencygp_ref01" } }], "index$": 0 }] }, 'Currencygp');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let currencygp_ref01_data = Object.values(setup.data.existing.currencygp)[0];
        // LOAD
        const currencygp_ref01_ent = client.Currencygp();
        const currencygp_ref01_match_dt0 = {};
        const currencygp_ref01_data_dt0 = (await currencygp_ref01_ent.load(currencygp_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != currencygp_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/currencygp/CurrencygpTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.JsonIpGeolocationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['currencygp01', 'currencygp02', 'currencygp03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'JSON_IP_GEOLOCATION_TEST_CURRENCYGP_ENTID': idmap,
        'JSON_IP_GEOLOCATION_TEST_LIVE': 'FALSE',
        'JSON_IP_GEOLOCATION_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['JSON_IP_GEOLOCATION_TEST_CURRENCYGP_ENTID'];
    const live = 'TRUE' === env.JSON_IP_GEOLOCATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['JSON_IP_GEOLOCATION_TEST_CURRENCYGP_ENTID'];
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
//# sourceMappingURL=CurrencygpEntity.test.js.map