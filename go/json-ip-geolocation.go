package voxgigjsonipgeolocationsdk

import (
	"github.com/voxgig-sdk/json-ip-geolocation-sdk/core"
	"github.com/voxgig-sdk/json-ip-geolocation-sdk/entity"
	"github.com/voxgig-sdk/json-ip-geolocation-sdk/feature"
	_ "github.com/voxgig-sdk/json-ip-geolocation-sdk/utility"
)

// Type aliases preserve external API.
type JsonIpGeolocationSDK = core.JsonIpGeolocationSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type JsonIpGeolocationEntity = core.JsonIpGeolocationEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type JsonIpGeolocationError = core.JsonIpGeolocationError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCurrencygpEntityFunc = func(client *core.JsonIpGeolocationSDK, entopts map[string]any) core.JsonIpGeolocationEntity {
		return entity.NewCurrencygpEntity(client, entopts)
	}
	core.NewJsongpEntityFunc = func(client *core.JsonIpGeolocationSDK, entopts map[string]any) core.JsonIpGeolocationEntity {
		return entity.NewJsongpEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewJsonIpGeolocationSDK = core.NewJsonIpGeolocationSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
