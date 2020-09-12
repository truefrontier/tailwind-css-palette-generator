export function createSaturationScale(tweakValue) {
  const tweak = parseInt(tweakValue) || 0;

  return [
    Math.round(tweak),
    Math.round(tweak * 0.75),
    Math.round(tweak * 0.5),
    Math.round(tweak * 0.25),
    0,
    Math.round(tweak * 0.25),
    Math.round(tweak * 0.5),
    Math.round(tweak * 0.75),
    Math.round(tweak),
  ];
}

export function createHueScale(tweakValue) {
  const tweak = parseInt(tweakValue) || 0;

  return [
    tweak ? tweak * 3 + tweak : 0,
    tweak ? tweak * 2 + tweak : 0,
    tweak ? tweak * 1 + tweak : 0,
    tweak ? tweak + 0 : 0,
    0,
    tweak || 0,
    tweak ? tweak * 1 + tweak : 0,
    tweak ? tweak * 2 + tweak : 0,
    tweak ? tweak * 3 + tweak : 0,
  ];
}

export function createDistributionValues(min, max, lightness, weighted = true) {
  const maxLightness = parseInt(max) || 100;
  const maxStep = (maxLightness - lightness) / 4;

  const minLightness = parseInt(min) || 0;
  const minStep = (lightness - minLightness) / 4;

  return [
    Math.round(lightness + maxStep * 4), // Should equal tweakMin, close to 100, lightest colour
    Math.round(lightness + maxStep * (weighted ? 3.3 : 3)),
    Math.round(lightness + maxStep * (weighted ? 2.6 : 2)),
    Math.round(lightness + maxStep * (weighted ? 1.6 : 3)),
    Math.round(lightness), // Lightness of original colour
    Math.round(minLightness + minStep * (weighted ? 2.4 : 3)),
    Math.round(minLightness + minStep * (weighted ? 1.4 : 2)),
    Math.round(minLightness + minStep * (weighted ? 0.7 : 1)),
    Math.round(minLightness), // Should equal tweakMax, close to 0, darkest colour
  ];
}
