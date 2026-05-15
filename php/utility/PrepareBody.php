<?php
declare(strict_types=1);

// JsonIpGeolocation SDK utility: prepare_body

class JsonIpGeolocationPrepareBody
{
    public static function call(JsonIpGeolocationContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
