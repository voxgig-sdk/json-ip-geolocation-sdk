<?php
declare(strict_types=1);

// JsonIpGeolocation SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class JsonIpGeolocationMakeContext
{
    public static function call(array $ctxmap, ?JsonIpGeolocationContext $basectx): JsonIpGeolocationContext
    {
        return new JsonIpGeolocationContext($ctxmap, $basectx);
    }
}
