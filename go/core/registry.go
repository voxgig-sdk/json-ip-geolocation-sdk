package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCurrencygpEntityFunc func(client *JsonIpGeolocationSDK, entopts map[string]any) JsonIpGeolocationEntity

var NewJsongpEntityFunc func(client *JsonIpGeolocationSDK, entopts map[string]any) JsonIpGeolocationEntity

