

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { JsonIpGeolocationSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CurrencygpEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JSON_IP_GEOLOCATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('JSON_IP_GEOLOCATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JsonIpGeolocationSDK.test()
    const ent = testsdk.Currencygp()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JSON_IP_GEOLOCATION_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'currencygp.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"h":"Amount","n":"amount","r":false,"sh":"Original amount to convert","t":"`$NUMBER`","key$":"amount","index$":0},"converted_amount":{"a":true,"h":"Converted Amount","n":"converted_amount","r":false,"sh":"Converted amount in target currency","t":"`$NUMBER`","key$":"converted_amount","index$":1},"exchange_rate":{"a":true,"h":"Exchange Rate","n":"exchange_rate","r":false,"sh":"Exchange rate used for conversion","t":"`$NUMBER`","key$":"exchange_rate","index$":2},"from":{"a":true,"h":"From","n":"from","r":false,"sh":"Source currency code","t":"`$STRING`","key$":"from","index$":3},"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","r":false,"sh":"Timestamp of the conversion","t":"`$STRING`","key$":"timestamp","index$":4},"to":{"a":true,"h":"To","n":"to","r":false,"sh":"Target currency code","t":"`$STRING`","key$":"to","index$":5}},"name":"currencygp","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /currency.gp","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":100,"k":"query","n":"amount","or":"amount","r":true,"t":"`$NUMBER`","index$":0},{"a":true,"ex":"USD","k":"query","n":"from","or":"from","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"EUR","k":"query","n":"to","or":"to","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/currency.gp","q":{"exist":["amount","from","to"]},"r":{},"s":[{"lit":"currency.gp"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"currencygp","name__orig":"currencygp","Name":"Currencygp","name_":"currencygp","name-":"currencygp","NAME":"CURRENCYGP","index$":0}, {"active":true,"entity":"currencygp","key$":"BasicCurrencygpFlow","kind":"basic","name":"BasicCurrencygpFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"currencygp_ref01","srcdatavar":"currencygp_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-currencygp_ref01"}}],"index$":0}]}, 'Currencygp', {"GET /currency.gp":{"protocol":"http","operationId":"convertCurrency","responses":{"200":{"description":"Successful currency conversion response","content":{"application/json":{"schema":{"type":"object","properties":{"from":{"description":"Source currency code","example":"USD","key$":"from","type":"string"},"to":{"description":"Target currency code","example":"EUR","key$":"to","type":"string"},"amount":{"description":"Original amount to convert","example":100,"key$":"amount","type":"number"},"converted_amount":{"description":"Converted amount in target currency","example":92.15,"key$":"converted_amount","type":"number"},"exchange_rate":{"description":"Exchange rate used for conversion","example":0.9215,"key$":"exchange_rate","type":"number"},"timestamp":{"description":"Timestamp of the conversion","format":"date-time","key$":"timestamp","type":"string"}},"x-ref":"#/components/schemas/CurrencyConversionResponse","index$":0},"examples":{"success":{"value":{"from":"USD","to":"EUR","amount":100,"converted_amount":92.15,"exchange_rate":0.9215,"timestamp":"2024-01-15T10:30:00Z"}}}}}},"400":{"description":"Invalid currency code or amount","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing what went wrong"},"status":{"type":"integer","description":"HTTP status code"}},"x-ref":"#/components/schemas/ErrorResponse"}}}},"429":{"description":"Rate limit exceeded (120 requests per minute on free plan)","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing what went wrong"},"status":{"type":"integer","description":"HTTP status code"}},"x-ref":"#/components/schemas/ErrorResponse"}}}}},"parameters":[{"name":"from","in":"query","description":"Source currency code (3-letter ISO code)","required":true,"schema":{"type":"string","example":"USD","minLength":3,"maxLength":3},"index$":0},{"name":"to","in":"query","description":"Target currency code (3-letter ISO code)","required":true,"schema":{"type":"string","example":"EUR","minLength":3,"maxLength":3},"index$":1},{"name":"amount","in":"query","description":"Amount to convert","required":true,"schema":{"type":"number","format":"double","example":100,"minimum":0},"index$":2}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let currencygp_ref01_data = Object.values(setup.data.existing.currencygp)[0] as any

    // LOAD
    const currencygp_ref01_ent = client.Currencygp()
    const currencygp_ref01_match_dt0: any = {}
    const currencygp_ref01_data_dt0 = (await currencygp_ref01_ent.load(currencygp_ref01_match_dt0)).data()
    assert(null != currencygp_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/currencygp/CurrencygpTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = JsonIpGeolocationSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['currencygp01','currencygp02','currencygp03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JSON_IP_GEOLOCATION_TEST_CURRENCYGP_ENTID': idmap,
    'JSON_IP_GEOLOCATION_TEST_LIVE': 'FALSE',
    'JSON_IP_GEOLOCATION_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JSON_IP_GEOLOCATION_TEST_CURRENCYGP_ENTID']

  const live = 'TRUE' === env.JSON_IP_GEOLOCATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JSON_IP_GEOLOCATION_TEST_CURRENCYGP_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new JsonIpGeolocationSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
