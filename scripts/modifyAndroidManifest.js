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

      var result = data;

      // add Main app class
      var plugins = context.opts.cordova.plugins;
      var appClass = 'com.adobe.phonegap.csdk.AdobeAuthCredentialsApp';
      var redirectAppClass = 'com.adobe.phonegap.csdk.AdobeAuthRedirectCredentialsApp';
      if (plugins.find(function(element) {
          return element === 'phonegap-plugin-csdk-image-editor';
        })) {

        if (data.indexOf(appClass) >= 0) {
          result = result.replace(/AdobeAuthCredentialsApp/g, 'AdobeAuthRedirectCredentialsApp');
        } else {
          if (data.indexOf(redirectAppClass) === -1) {
            result = result.replace(/<application/g, '<application android:name="' + redirectAppClass + '"');
          }
        }
      } else {
        if (data.indexOf(redirectAppClass) >= 0) {
          result = result.replace(/AdobeAuthRedirectCredentialsApp/g, 'AdobeAuthCredentialsApp');
        } else {
          result = result.replace(/<application/g, '<application android:name="' + appClass + '"');
        }
      }

      // remove small screen support
      var attribute = 'android:smallScreens="true"';
      if (data.indexOf(attribute) !== -1) {
        result = result.replace(/android:smallScreens="true"/g, 'android:smallScreens="false"');
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
