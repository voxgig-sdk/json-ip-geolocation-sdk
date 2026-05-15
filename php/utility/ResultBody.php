<?php
declare(strict_types=1);

// JsonIpGeolocation SDK utility: result_body

class JsonIpGeolocationResultBody
{
    public static function call(JsonIpGeolocationContext $ctx): ?JsonIpGeolocationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
