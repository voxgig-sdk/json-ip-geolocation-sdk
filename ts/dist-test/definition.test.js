"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "currencygp",
        "accessor": "Currencygp",
        "op": "load",
        "method": "GET",
        "path": "/currency.gp",
        "args": [],
        "select": {
            "amount": 100,
            "from": "USD",
            "to": "EUR"
        },
        "headers": [],
        "query": [
            "from",
            "to",
            "amount"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "from": "USD",
            "to": "EUR",
            "amount": 100,
            "converted_amount": 92.15,
            "exchange_rate": 0.9215,
            "timestamp": "2024-01-15T10:30:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "jsongp",
        "accessor": "Jsongp",
        "op": "load",
        "method": "GET",
        "path": "/json.gp",
        "args": [],
        "select": {
            "base_currency": "USD",
            "ip": "8.8.8.8"
        },
        "headers": [],
        "query": [
            "ip",
            "base_currency"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "geoplugin_request": "8.8.8.8",
            "geoplugin_status": 200,
            "geoplugin_credit": "Some of the returned data includes GeoLite data created by MaxMind, available from http://www.maxmind.com",
            "geoplugin_city": "Mountain View",
            "geoplugin_region": "California",
            "geoplugin_regionCode": "CA",
            "geoplugin_regionName": "California",
            "geoplugin_areaCode": "650",
            "geoplugin_dmaCode": "807",
            "geoplugin_countryCode": "US",
            "geoplugin_countryName": "United States",
            "geoplugin_continentCode": "NA",
            "geoplugin_latitude": "37.386",
            "geoplugin_longitude": "-122.0838",
            "geoplugin_currencyCode": "USD",
            "geoplugin_currencySymbol": "$",
            "geoplugin_currencySymbol_UTF8": "$",
            "geoplugin_currencyConverter": 1
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map