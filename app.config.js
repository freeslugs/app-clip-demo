// app.config.js
import { getConfig } from "@expo/config";

export default ({ config }) => {
  const orientations = [
    "UIInterfaceOrientationPortrait",
    "UIInterfaceOrientationPortraitUpsideDown",
    "UIInterfaceOrientationLandscapeLeft",
    "UIInterfaceOrientationLandscapeRight",
  ];

  // Patch infoPlist for main app
  config.ios = {
    ...config.ios,
    infoPlist: {
      ...config.ios?.infoPlist,
      UISupportedInterfaceOrientations: orientations,
    },
  };

  // Patch the App Clip Info.plist
  config.extra ??= {};
  config.extra.eas ??= {};
  config.extra.eas.build ??= {};
  config.extra.eas.build.experimental ??= {};
  config.extra.eas.build.experimental.ios = {
    ...config.extra.eas.build.experimental.ios,
    appExtensions: [
      {
        bundleIdentifier: "com.bauhaus.app-clip-demo.clip",
        targetName: "clip",
        entitlements: {
          "com.apple.developer.parent-application-identifiers": [
            "$(AppIdentifierPrefix)com.bauhaus.app-clip-demo",
          ],
        },
        infoPlist: {
          UISupportedInterfaceOrientations: orientations,
        },
      },
    ],
  };

  return config;
};
