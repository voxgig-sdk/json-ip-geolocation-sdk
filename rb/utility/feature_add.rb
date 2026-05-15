# JsonIpGeolocation SDK utility: feature_add
module JsonIpGeolocationUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
