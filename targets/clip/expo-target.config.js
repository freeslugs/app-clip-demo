/** @type {import('@bacons/apple-targets/app.plugin').ConfigFunction} */
module.exports = config => ({
  type: "clip",
  icon: 'https://github.com/expo.png',
  entitlements: { /* Add entitlements */ },
  infoPlist: {
    UISupportedInterfaceOrientations: [
      "UIInterfaceOrientationPortrait",
      "UIInterfaceOrientationPortraitUpsideDown",
      "UIInterfaceOrientationLandscapeLeft",
      "UIInterfaceOrientationLandscapeRight"
    ]
  }
});