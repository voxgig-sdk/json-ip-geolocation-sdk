<?php
declare(strict_types=1);

// JsonIpGeolocation SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class JsonIpGeolocationFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new JsonIpGeolocationBaseFeature();
            case "test":
                return new JsonIpGeolocationTestFeature();
            default:
                return new JsonIpGeolocationBaseFeature();
        }
    }
}
