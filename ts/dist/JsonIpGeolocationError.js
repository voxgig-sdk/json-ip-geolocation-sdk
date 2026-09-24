"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonIpGeolocationError = void 0;
class JsonIpGeolocationError extends Error {
    isJsonIpGeolocationError = true;
    sdk = 'JsonIpGeolocation';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.JsonIpGeolocationError = JsonIpGeolocationError;
//# sourceMappingURL=JsonIpGeolocationError.js.map