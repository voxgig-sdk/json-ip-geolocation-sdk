# Typed models for the JsonIpGeolocation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Currencygp:
    amount: Optional[float] = None
    converted_amount: Optional[float] = None
    exchange_rate: Optional[float] = None
    timestamp: Optional[str] = None
    to: Optional[str] = None


@dataclass
class CurrencygpLoadMatch:
    amount: Optional[float] = None
    converted_amount: Optional[float] = None
    exchange_rate: Optional[float] = None
    timestamp: Optional[str] = None
    to: Optional[str] = None


@dataclass
class Jsongp:
    geoplugin_area_code: Optional[str] = None
    geoplugin_city: Optional[str] = None
    geoplugin_continent_code: Optional[str] = None
    geoplugin_country_code: Optional[str] = None
    geoplugin_country_name: Optional[str] = None
    geoplugin_credit: Optional[str] = None
    geoplugin_currency_code: Optional[str] = None
    geoplugin_currency_converter: Optional[float] = None
    geoplugin_currency_symbol: Optional[str] = None
    geoplugin_currency_symbol_utf8: Optional[str] = None
    geoplugin_dma_code: Optional[str] = None
    geoplugin_latitude: Optional[str] = None
    geoplugin_longitude: Optional[str] = None
    geoplugin_region: Optional[str] = None
    geoplugin_region_code: Optional[str] = None
    geoplugin_region_name: Optional[str] = None
    geoplugin_request: Optional[str] = None
    geoplugin_status: Optional[int] = None


@dataclass
class JsongpLoadMatch:
    geoplugin_area_code: Optional[str] = None
    geoplugin_city: Optional[str] = None
    geoplugin_continent_code: Optional[str] = None
    geoplugin_country_code: Optional[str] = None
    geoplugin_country_name: Optional[str] = None
    geoplugin_credit: Optional[str] = None
    geoplugin_currency_code: Optional[str] = None
    geoplugin_currency_converter: Optional[float] = None
    geoplugin_currency_symbol: Optional[str] = None
    geoplugin_currency_symbol_utf8: Optional[str] = None
    geoplugin_dma_code: Optional[str] = None
    geoplugin_latitude: Optional[str] = None
    geoplugin_longitude: Optional[str] = None
    geoplugin_region: Optional[str] = None
    geoplugin_region_code: Optional[str] = None
    geoplugin_region_name: Optional[str] = None
    geoplugin_request: Optional[str] = None
    geoplugin_status: Optional[int] = None

