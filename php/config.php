<?php
declare(strict_types=1);

// JsonIpGeolocation SDK configuration

class JsonIpGeolocationConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "JsonIpGeolocation",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "http://www.geoplugin.net",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "currencygp" => [],
                    "jsongp" => [],
                ],
            ],
            "entity" => [
        'currencygp' => [
          'fields' => [
            [
              'name' => 'amount',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'converted_amount',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'exchange_rate',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'from',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'timestamp',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'to',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'currencygp',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'amount',
                        'orig' => 'amount',
                        'reqd' => true,
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => 'USD',
                        'kind' => 'query',
                        'name' => 'from',
                        'orig' => 'from',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'EUR',
                        'kind' => 'query',
                        'name' => 'to',
                        'orig' => 'to',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/currency.gp',
                  'parts' => [
                    'currency.gp',
                  ],
                  'select' => [
                    'exist' => [
                      'amount',
                      'from',
                      'to',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'jsongp' => [
          'fields' => [
            [
              'name' => 'geoplugin_areaCode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_city',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_continentCode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_countryCode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_countryName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_credit',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_currencyCode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_currencyConverter',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'geoplugin_currencySymbol',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_currencySymbol_UTF8',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_dmaCode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_latitude',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_longitude',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_region',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_regionCode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_regionName',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_request',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'geoplugin_status',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'jsongp',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'USD',
                        'kind' => 'query',
                        'name' => 'base_currency',
                        'orig' => 'base_currency',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '8.8.8.8',
                        'kind' => 'query',
                        'name' => 'ip',
                        'orig' => 'ip',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/json.gp',
                  'parts' => [
                    'json.gp',
                  ],
                  'select' => [
                    'exist' => [
                      'base_currency',
                      'ip',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return JsonIpGeolocationFeatures::make_feature($name);
    }
}
