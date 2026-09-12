import { JsonIpGeolocationEntityBase } from '../JsonIpGeolocationEntityBase';
import type { JsonIpGeolocationSDK } from '../JsonIpGeolocationSDK';
import type { Control } from '../types';
import type { Currencygp, CurrencygpLoadMatch } from '../JsonIpGeolocationTypes';
declare class CurrencygpEntity extends JsonIpGeolocationEntityBase<Currencygp> {
    constructor(client: JsonIpGeolocationSDK, entopts: any);
    make(this: CurrencygpEntity): CurrencygpEntity;
    load(this: any, reqmatch?: CurrencygpLoadMatch, ctrl?: Control): Promise<CurrencygpEntity>;
}
export { CurrencygpEntity };
