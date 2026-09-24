

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


describe('JsongpEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JSON_IP_GEOLOCATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('JSON_IP_GEOLOCATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JsonIpGeolocationSDK.test()
    const ent = testsdk.Jsongp()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JSON_IP_GEOLOCATION_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'jsongp.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"geoplugin_areaCode":{"a":true,"h":"Geoplugin Area Code","n":"geoplugin_areaCode","r":false,"sh":"Telephone area code","t":"`$STRING`","key$":"geoplugin_areaCode","index$":0},"geoplugin_city":{"a":true,"h":"Geoplugin City","n":"geoplugin_city","r":false,"sh":"City name derived from IP address","t":"`$STRING`","key$":"geoplugin_city","index$":1},"geoplugin_continentCode":{"a":true,"h":"Geoplugin Continent Code","n":"geoplugin_continentCode","r":false,"sh":"Continent code","t":"`$STRING`","key$":"geoplugin_continentCode","index$":2},"geoplugin_countryCode":{"a":true,"h":"Geoplugin Country Code","n":"geoplugin_countryCode","r":false,"sh":"ISO 3166-1 alpha-2 country code","t":"`$STRING`","key$":"geoplugin_countryCode","index$":3},"geoplugin_countryName":{"a":true,"h":"Geoplugin Country Name","n":"geoplugin_countryName","r":false,"sh":"Full country name","t":"`$STRING`","key$":"geoplugin_countryName","index$":4},"geoplugin_credit":{"a":true,"h":"Geoplugin Credit","n":"geoplugin_credit","r":false,"sh":"Attribution credit for data sources","t":"`$STRING`","key$":"geoplugin_credit","index$":5},"geoplugin_currencyCode":{"a":true,"h":"Geoplugin Currency Code","n":"geoplugin_currencyCode","r":false,"sh":"ISO 4217 currency code for the location","t":"`$STRING`","key$":"geoplugin_currencyCode","index$":6},"geoplugin_currencyConverter":{"a":true,"h":"Geoplugin Currency Converter","n":"geoplugin_currencyConverter","r":false,"sh":"Exchange rate converter value","t":"`$NUMBER`","key$":"geoplugin_currencyConverter","index$":7},"geoplugin_currencySymbol":{"a":true,"h":"Geoplugin Currency Symbol","n":"geoplugin_currencySymbol","r":false,"sh":"Currency symbol","t":"`$STRING`","key$":"geoplugin_currencySymbol","index$":8},"geoplugin_currencySymbol_UTF8":{"a":true,"h":"Geoplugin Currency Symbol Utf8","n":"geoplugin_currencySymbol_UTF8","r":false,"sh":"UTF-8 encoded currency symbol","t":"`$STRING`","key$":"geoplugin_currencySymbol_UTF8","index$":9},"geoplugin_dmaCode":{"a":true,"h":"Geoplugin Dma Code","n":"geoplugin_dmaCode","r":false,"sh":"Designated Market Area code","t":"`$STRING`","key$":"geoplugin_dmaCode","index$":10},"geoplugin_latitude":{"a":true,"h":"Geoplugin Latitude","n":"geoplugin_latitude","r":false,"sh":"Latitude coordinate","t":"`$STRING`","key$":"geoplugin_latitude","index$":11},"geoplugin_longitude":{"a":true,"h":"Geoplugin Longitude","n":"geoplugin_longitude","r":false,"sh":"Longitude coordinate","t":"`$STRING`","key$":"geoplugin_longitude","index$":12},"geoplugin_region":{"a":true,"h":"Geoplugin Region","n":"geoplugin_region","r":false,"sh":"Region or state name","t":"`$STRING`","key$":"geoplugin_region","index$":13},"geoplugin_regionCode":{"a":true,"h":"Geoplugin Region Code","n":"geoplugin_regionCode","r":false,"sh":"Region or state code","t":"`$STRING`","key$":"geoplugin_regionCode","index$":14},"geoplugin_regionName":{"a":true,"h":"Geoplugin Region Name","n":"geoplugin_regionName","r":false,"sh":"Full region or state name","t":"`$STRING`","key$":"geoplugin_regionName","index$":15},"geoplugin_request":{"a":true,"h":"Geoplugin Request","n":"geoplugin_request","r":false,"sh":"The IP address that was geolocated","t":"`$STRING`","key$":"geoplugin_request","index$":16},"geoplugin_status":{"a":true,"h":"Geoplugin Status","n":"geoplugin_status","r":false,"sh":"HTTP status code of the response","t":"`$INTEGER`","key$":"geoplugin_status","index$":17}},"name":"jsongp","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /json.gp","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"USD","k":"query","n":"base_currency","or":"base_currency","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"8.8.8.8","k":"query","n":"ip","or":"ip","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/json.gp","q":{"exist":["base_currency","ip"]},"r":{},"s":[{"lit":"json.gp"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"jsongp","name__orig":"jsongp","Name":"Jsongp","name_":"jsongp","name-":"jsongp","NAME":"JSONGP","index$":1}, {"active":true,"entity":"jsongp","key$":"BasicJsongpFlow","kind":"basic","name":"BasicJsongpFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"jsongp_ref01","srcdatavar":"jsongp_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-jsongp_ref01"}}],"index$":0}]}, 'Jsongp', {"GET /json.gp":{"protocol":"http","operationId":"getGeolocation","responses":{"200":{"description":"Successful geolocation response","content":{"application/json":{"schema":{"type":"object","properties":{"geoplugin_request":{"description":"The IP address that was geolocated","example":"8.8.8.8","key$":"geoplugin_request","type":"string"},"geoplugin_status":{"description":"HTTP status code of the response","example":200,"key$":"geoplugin_status","type":"integer"},"geoplugin_credit":{"description":"Attribution credit for data sources","key$":"geoplugin_credit","type":"string"},"geoplugin_city":{"description":"City name derived from IP address","example":"Mountain View","key$":"geoplugin_city","type":"string"},"geoplugin_region":{"description":"Region or state name","example":"California","key$":"geoplugin_region","type":"string"},"geoplugin_regionCode":{"description":"Region or state code","example":"CA","key$":"geoplugin_regionCode","type":"string"},"geoplugin_regionName":{"description":"Full region or state name","example":"California","key$":"geoplugin_regionName","type":"string"},"geoplugin_areaCode":{"description":"Telephone area code","example":"650","key$":"geoplugin_areaCode","type":"string"},"geoplugin_dmaCode":{"description":"Designated Market Area code","example":"807","key$":"geoplugin_dmaCode","type":"string"},"geoplugin_countryCode":{"description":"ISO 3166-1 alpha-2 country code","example":"US","key$":"geoplugin_countryCode","type":"string"},"geoplugin_countryName":{"description":"Full country name","example":"United States","key$":"geoplugin_countryName","type":"string"},"geoplugin_continentCode":{"description":"Continent code","example":"NA","key$":"geoplugin_continentCode","type":"string"},"geoplugin_latitude":{"description":"Latitude coordinate","example":"37.386","key$":"geoplugin_latitude","type":"string"},"geoplugin_longitude":{"description":"Longitude coordinate","example":"-122.0838","key$":"geoplugin_longitude","type":"string"},"geoplugin_currencyCode":{"description":"ISO 4217 currency code for the location","example":"USD","key$":"geoplugin_currencyCode","type":"string"},"geoplugin_currencySymbol":{"description":"Currency symbol","example":"$","key$":"geoplugin_currencySymbol","type":"string"},"geoplugin_currencySymbol_UTF8":{"description":"UTF-8 encoded currency symbol","example":"$","key$":"geoplugin_currencySymbol_UTF8","type":"string"},"geoplugin_currencyConverter":{"description":"Exchange rate converter value","example":1,"key$":"geoplugin_currencyConverter","type":"number"}},"x-ref":"#/components/schemas/GeolocationResponse","index$":0},"examples":{"success":{"value":{"geoplugin_request":"8.8.8.8","geoplugin_status":200,"geoplugin_credit":"Some of the returned data includes GeoLite data created by MaxMind, available from http://www.maxmind.com","geoplugin_city":"Mountain View","geoplugin_region":"California","geoplugin_regionCode":"CA","geoplugin_regionName":"California","geoplugin_areaCode":"650","geoplugin_dmaCode":"807","geoplugin_countryCode":"US","geoplugin_countryName":"United States","geoplugin_continentCode":"NA","geoplugin_latitude":"37.386","geoplugin_longitude":"-122.0838","geoplugin_currencyCode":"USD","geoplugin_currencySymbol":"$","geoplugin_currencySymbol_UTF8":"$","geoplugin_currencyConverter":1}}}}}},"429":{"description":"Rate limit exceeded (120 requests per minute on free plan)","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing what went wrong"},"status":{"type":"integer","description":"HTTP status code"}},"x-ref":"#/components/schemas/ErrorResponse"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message describing what went wrong"},"status":{"type":"integer","description":"HTTP status code"}},"x-ref":"#/components/schemas/ErrorResponse"}}}}},"parameters":[{"name":"ip","in":"query","description":"The IP address to geolocate. If not provided, the IP address of the requesting client will be used automatically.","required":false,"schema":{"type":"string","format":"ipv4","example":"8.8.8.8"},"index$":0},{"name":"base_currency","in":"query","description":"Base currency code for currency conversion","required":false,"schema":{"type":"string","example":"USD"},"index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let jsongp_ref01_data = Object.values(setup.data.existing.jsongp)[0] as any

    // LOAD
    const jsongp_ref01_ent = client.Jsongp()
    const jsongp_ref01_match_dt0: any = {}
    const jsongp_ref01_data_dt0 = (await jsongp_ref01_ent.load(jsongp_ref01_match_dt0)).data()
    assert(null != jsongp_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/jsongp/JsongpTestData.json')

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
    ['jsongp01','jsongp02','jsongp03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JSON_IP_GEOLOCATION_TEST_JSONGP_ENTID': idmap,
    'JSON_IP_GEOLOCATION_TEST_LIVE': 'FALSE',
    'JSON_IP_GEOLOCATION_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JSON_IP_GEOLOCATION_TEST_JSONGP_ENTID']

  const live = 'TRUE' === env.JSON_IP_GEOLOCATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JSON_IP_GEOLOCATION_TEST_JSONGP_ENTID']
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
  
