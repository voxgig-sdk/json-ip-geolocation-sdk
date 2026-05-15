<?php
declare(strict_types=1);

// JsonIpGeolocation SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

JsonIpGeolocationUtility::setRegistrar(function (JsonIpGeolocationUtility $u): void {
    $u->clean = [JsonIpGeolocationClean::class, 'call'];
    $u->done = [JsonIpGeolocationDone::class, 'call'];
    $u->make_error = [JsonIpGeolocationMakeError::class, 'call'];
    $u->feature_add = [JsonIpGeolocationFeatureAdd::class, 'call'];
    $u->feature_hook = [JsonIpGeolocationFeatureHook::class, 'call'];
    $u->feature_init = [JsonIpGeolocationFeatureInit::class, 'call'];
    $u->fetcher = [JsonIpGeolocationFetcher::class, 'call'];
    $u->make_fetch_def = [JsonIpGeolocationMakeFetchDef::class, 'call'];
    $u->make_context = [JsonIpGeolocationMakeContext::class, 'call'];
    $u->make_options = [JsonIpGeolocationMakeOptions::class, 'call'];
    $u->make_request = [JsonIpGeolocationMakeRequest::class, 'call'];
    $u->make_response = [JsonIpGeolocationMakeResponse::class, 'call'];
    $u->make_result = [JsonIpGeolocationMakeResult::class, 'call'];
    $u->make_point = [JsonIpGeolocationMakePoint::class, 'call'];
    $u->make_spec = [JsonIpGeolocationMakeSpec::class, 'call'];
    $u->make_url = [JsonIpGeolocationMakeUrl::class, 'call'];
    $u->param = [JsonIpGeolocationParam::class, 'call'];
    $u->prepare_auth = [JsonIpGeolocationPrepareAuth::class, 'call'];
    $u->prepare_body = [JsonIpGeolocationPrepareBody::class, 'call'];
    $u->prepare_headers = [JsonIpGeolocationPrepareHeaders::class, 'call'];
    $u->prepare_method = [JsonIpGeolocationPrepareMethod::class, 'call'];
    $u->prepare_params = [JsonIpGeolocationPrepareParams::class, 'call'];
    $u->prepare_path = [JsonIpGeolocationPreparePath::class, 'call'];
    $u->prepare_query = [JsonIpGeolocationPrepareQuery::class, 'call'];
    $u->result_basic = [JsonIpGeolocationResultBasic::class, 'call'];
    $u->result_body = [JsonIpGeolocationResultBody::class, 'call'];
    $u->result_headers = [JsonIpGeolocationResultHeaders::class, 'call'];
    $u->transform_request = [JsonIpGeolocationTransformRequest::class, 'call'];
    $u->transform_response = [JsonIpGeolocationTransformResponse::class, 'call'];
});
