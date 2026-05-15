<?php
declare(strict_types=1);

// JsonIpGeolocation SDK base feature

class JsonIpGeolocationBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(JsonIpGeolocationContext $ctx, array $options): void {}
    public function PostConstruct(JsonIpGeolocationContext $ctx): void {}
    public function PostConstructEntity(JsonIpGeolocationContext $ctx): void {}
    public function SetData(JsonIpGeolocationContext $ctx): void {}
    public function GetData(JsonIpGeolocationContext $ctx): void {}
    public function GetMatch(JsonIpGeolocationContext $ctx): void {}
    public function SetMatch(JsonIpGeolocationContext $ctx): void {}
    public function PrePoint(JsonIpGeolocationContext $ctx): void {}
    public function PreSpec(JsonIpGeolocationContext $ctx): void {}
    public function PreRequest(JsonIpGeolocationContext $ctx): void {}
    public function PreResponse(JsonIpGeolocationContext $ctx): void {}
    public function PreResult(JsonIpGeolocationContext $ctx): void {}
    public function PreDone(JsonIpGeolocationContext $ctx): void {}
    public function PreUnexpected(JsonIpGeolocationContext $ctx): void {}
}
