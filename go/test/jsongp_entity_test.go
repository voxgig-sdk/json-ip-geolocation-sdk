package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/json-ip-geolocation-sdk"
	"github.com/voxgig-sdk/json-ip-geolocation-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestJsongpEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Jsongp(nil)
		if ent == nil {
			t.Fatal("expected non-nil JsongpEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := jsongpBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "jsongp." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set JSONIPGEOLOCATION_TEST_JSONGP_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		jsongpRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.jsongp", setup.data)))
		var jsongpRef01Data map[string]any
		if len(jsongpRef01DataRaw) > 0 {
			jsongpRef01Data = core.ToMapAny(jsongpRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = jsongpRef01Data

		// LOAD
		jsongpRef01Ent := client.Jsongp(nil)
		jsongpRef01MatchDt0 := map[string]any{}
		jsongpRef01DataDt0Loaded, err := jsongpRef01Ent.Load(jsongpRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if jsongpRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func jsongpBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "jsongp", "JsongpTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read jsongp test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse jsongp test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"jsongp01", "jsongp02", "jsongp03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("JSONIPGEOLOCATION_TEST_JSONGP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"JSONIPGEOLOCATION_TEST_JSONGP_ENTID": idmap,
		"JSONIPGEOLOCATION_TEST_LIVE":      "FALSE",
		"JSONIPGEOLOCATION_TEST_EXPLAIN":   "FALSE",
		"JSONIPGEOLOCATION_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["JSONIPGEOLOCATION_TEST_JSONGP_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["JSONIPGEOLOCATION_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["JSONIPGEOLOCATION_APIKEY"],
			},
			extra,
		})
		client = sdk.NewJsonIpGeolocationSDK(core.ToMapAny(mergedOpts))
	}

	live := env["JSONIPGEOLOCATION_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["JSONIPGEOLOCATION_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
