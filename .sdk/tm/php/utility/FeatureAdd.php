<?php
declare(strict_types=1);

// JsonIpGeolocation SDK utility: feature_add

class JsonIpGeolocationFeatureAdd
{
    public static function call(JsonIpGeolocationContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
