# Typed models for the JsonIpGeolocation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Currencygp(TypedDict, total=False):
    amount: float
    converted_amount: float
    exchange_rate: float
    timestamp: str
    to: str


class CurrencygpLoadMatch(TypedDict, total=False):
    amount: float
    converted_amount: float
    exchange_rate: float
    timestamp: str
    to: str


class Jsongp(TypedDict, total=False):
    geoplugin_area_code: str
    geoplugin_city: str
    geoplugin_continent_code: str
    geoplugin_country_code: str
    geoplugin_country_name: str
    geoplugin_credit: str
    geoplugin_currency_code: str
    geoplugin_currency_converter: float
    geoplugin_currency_symbol: str
    geoplugin_currency_symbol_utf8: str
    geoplugin_dma_code: str
    geoplugin_latitude: str
    geoplugin_longitude: str
    geoplugin_region: str
    geoplugin_region_code: str
    geoplugin_region_name: str
    geoplugin_request: str
    geoplugin_status: int


class JsongpLoadMatch(TypedDict, total=False):
    geoplugin_area_code: str
    geoplugin_city: str
    geoplugin_continent_code: str
    geoplugin_country_code: str
    geoplugin_country_name: str
    geoplugin_credit: str
    geoplugin_currency_code: str
    geoplugin_currency_converter: float
    geoplugin_currency_symbol: str
    geoplugin_currency_symbol_utf8: str
    geoplugin_dma_code: str
    geoplugin_latitude: str
    geoplugin_longitude: str
    geoplugin_region: str
    geoplugin_region_code: str
    geoplugin_region_name: str
    geoplugin_request: str
    geoplugin_status: int
