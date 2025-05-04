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

  return config;
};
