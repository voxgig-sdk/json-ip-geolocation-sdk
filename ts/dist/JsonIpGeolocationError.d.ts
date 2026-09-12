import { Context } from './Context';
declare class JsonIpGeolocationError extends Error {
    isJsonIpGeolocationError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { JsonIpGeolocationError };
