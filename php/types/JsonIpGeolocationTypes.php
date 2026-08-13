<?php
declare(strict_types=1);

// Typed models for the JsonIpGeolocation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Currencygp entity data model. */
class Currencygp
{
    public ?float $amount = null;
    public ?float $converted_amount = null;
    public ?float $exchange_rate = null;
    public ?string $from = null;
    public ?string $timestamp = null;
    public ?string $to = null;
}

/** Request payload for Currencygp#load. */
class CurrencygpLoadMatch
{
    public ?float $amount = null;
    public ?float $converted_amount = null;
    public ?float $exchange_rate = null;
    public ?string $from = null;
    public ?string $timestamp = null;
    public ?string $to = null;
}

/** Jsongp entity data model. */
class Jsongp
{
    public ?string $geoplugin_areaCode = null;
    public ?string $geoplugin_city = null;
    public ?string $geoplugin_continentCode = null;
    public ?string $geoplugin_countryCode = null;
    public ?string $geoplugin_countryName = null;
    public ?string $geoplugin_credit = null;
    public ?string $geoplugin_currencyCode = null;
    public ?float $geoplugin_currencyConverter = null;
    public ?string $geoplugin_currencySymbol = null;
    public ?string $geoplugin_currencySymbol_UTF8 = null;
    public ?string $geoplugin_dmaCode = null;
    public ?string $geoplugin_latitude = null;
    public ?string $geoplugin_longitude = null;
    public ?string $geoplugin_region = null;
    public ?string $geoplugin_regionCode = null;
    public ?string $geoplugin_regionName = null;
    public ?string $geoplugin_request = null;
    public ?int $geoplugin_status = null;
}

/** Request payload for Jsongp#load. */
class JsongpLoadMatch
{
    public ?string $geoplugin_areaCode = null;
    public ?string $geoplugin_city = null;
    public ?string $geoplugin_continentCode = null;
    public ?string $geoplugin_countryCode = null;
    public ?string $geoplugin_countryName = null;
    public ?string $geoplugin_credit = null;
    public ?string $geoplugin_currencyCode = null;
    public ?float $geoplugin_currencyConverter = null;
    public ?string $geoplugin_currencySymbol = null;
    public ?string $geoplugin_currencySymbol_UTF8 = null;
    public ?string $geoplugin_dmaCode = null;
    public ?string $geoplugin_latitude = null;
    public ?string $geoplugin_longitude = null;
    public ?string $geoplugin_region = null;
    public ?string $geoplugin_regionCode = null;
    public ?string $geoplugin_regionName = null;
    public ?string $geoplugin_request = null;
    public ?int $geoplugin_status = null;
}

