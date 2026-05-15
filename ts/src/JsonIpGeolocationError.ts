
import { Context } from './Context'


class JsonIpGeolocationError extends Error {

  isJsonIpGeolocationError = true

  sdk = 'JsonIpGeolocation'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  JsonIpGeolocationError
}

