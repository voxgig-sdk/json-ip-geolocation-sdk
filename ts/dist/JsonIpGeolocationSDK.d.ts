import { CurrencygpEntity } from './entity/CurrencygpEntity';
import { JsongpEntity } from './entity/JsongpEntity';
export type * from './JsonIpGeolocationTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { JsonIpGeolocationEntityBase } from './JsonIpGeolocationEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class JsonIpGeolocationSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Currencygp(entopts?: Record<string, any>): CurrencygpEntity;
    Jsongp(entopts?: Record<string, any>): JsongpEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): JsonIpGeolocationSDK;
    tester(testopts?: any, sdkopts?: any): JsonIpGeolocationSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof JsonIpGeolocationSDK;
export { stdutil, config, BaseFeature, JsonIpGeolocationEntityBase, JsonIpGeolocationSDK, SDK, };
