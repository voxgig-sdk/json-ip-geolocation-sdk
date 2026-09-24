
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { JsonIpGeolocationSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = JsonIpGeolocationSDK.test()
    equal(testsdk instanceof JsonIpGeolocationSDK, true,
      'JsonIpGeolocationSDK.test() must return a client synchronously')
  })

})
