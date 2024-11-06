const { notarize } = require('@electron/notarize');
const { build } = require('../../package.json');
const dotenv = require('dotenv');
const { signAsync } = require('@electron/osx-sign');

dotenv.config();

exports.default = async function notarizeMacos(context) {
  const { electronPlatformName, appOutDir } = context;
  if (electronPlatformName !== 'darwin') {
    return;
  }

  if (process.env.CI !== 'true') {
    console.warn('Skipping notarizing step. Packaging is not running in CI');
    return;
  }

  if (
    !(
      'APPLE_ID' in process.env &&
      'APPLE_ID_PASS' in process.env &&
      'APPLE_TEAM_ID' in process.env
    )
  ) {
    console.warn(
      'Skipping notarizing step. APPLE_ID, APPLE_ID_PASS, and APPLE_TEAM_ID env variables must be set',
    );
    return;
  }

  const appName = context.packager.appInfo.productFilename;

  console.log(
    'reach this ? ...',
    process.env.APPLE_ID,
    process.env.APPLE_ID_PASS,
    process.env.APPLE_TEAM_ID,
  );
  try {
    signAsync({
      app: '/Users/macbook/electron-Desktop-app/Admin/Admin/release/build/mac-universal/Admin.app',
      identity: 'Apple Distribution',
    });

    // signAsync({
    //   app: '/Users/macbook/electron-Desktop-app/LawFirm/LawFirm_Desktop/release/build/mac-universal/LawFirm.app',
    //   identity: 'Developer ID Application',
    //   provisioningProfile: '/Users/macbook/electron-Desktop-app/LawFirm/LawFirm_Desktop/macosdevelopmentcer.provisionprofile'
    // });
  } catch (error) {
    console.log('error: ', error);
  }
  try {
    await notarize({
      tool: 'notarytool',
      appBundleId: build.appId,
      appPath: `${appOutDir}/${appName}.app`,
      appleId: process.env.APPLE_ID,
      appleIdPassword: process.env.APPLE_ID_PASS,
      teamId: process.env.APPLE_TEAM_ID,
    });
    console.log('Notarization complete');
  } catch (error) {
    console.error('Notarization failed:', error);
  }
};
