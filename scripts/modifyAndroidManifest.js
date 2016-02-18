#!/usr/bin/env node

module.exports = function(context) {

  var fs = context.requireCordovaModule('fs'),
    path = context.requireCordovaModule('path');

  var platformRoot = path.join(context.opts.projectRoot, 'platforms/android');


  var manifestFile = path.join(platformRoot, 'AndroidManifest.xml');

  if (fs.existsSync(manifestFile)) {

    fs.readFile(manifestFile, 'utf8', function (err,data) {
      if (err) {
        throw new Error('Unable to find AndroidManifest.xml: ' + err);
      }

      var result = '';

      // add Main app class
      var appClass = 'com.adobe.phonegap.csdk.AdobeAuthCredentialsApp';
      if (data.indexOf(appClass) === -1) {
        result = data.replace(/<application/g, '<application android:name="' + appClass + '"');
      }

      // remove small screen support
      var attribute = 'android:smallScreens="true"';
      if (data.indexOf(attribute) !== -1) {
        result = data.replace(/android:smallScreens="true"/g, 'android:smallScreens="false"');
      }

      // set min sdk to 16
      var attribute = 'android:minSdkVersion="14"';
      if (data.indexOf(attribute) !== -1) {
        result = data.replace(/android:minSdkVersion="14"/g, 'android:minSdkVersion="16"');
      }

      if (result !== '') {
          fs.writeFile(manifestFile, result, 'utf8', function (err) {
            if (err) {
                throw new Error('Unable to write into AndroidManifest.xml: ' + err);
            }
          });
      }
    });
  }
};
