import { JsonIpGeolocationEntityBase } from '../JsonIpGeolocationEntityBase';
import type { JsonIpGeolocationSDK } from '../JsonIpGeolocationSDK';
import type { Control } from '../types';
import type { Jsongp, JsongpLoadMatch } from '../JsonIpGeolocationTypes';
declare class JsongpEntity extends JsonIpGeolocationEntityBase<Jsongp> {
    constructor(client: JsonIpGeolocationSDK, entopts: any);
    make(this: JsongpEntity): JsongpEntity;
    load(this: any, reqmatch?: JsongpLoadMatch, ctrl?: Control): Promise<JsongpEntity>;
}
export { JsongpEntity };
