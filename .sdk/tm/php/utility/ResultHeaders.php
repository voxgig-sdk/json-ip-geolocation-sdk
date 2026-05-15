<?php
declare(strict_types=1);

// JsonIpGeolocation SDK utility: result_headers

class JsonIpGeolocationResultHeaders
{
    public static function call(JsonIpGeolocationContext $ctx): ?JsonIpGeolocationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
