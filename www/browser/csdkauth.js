/* globals AdobeCreativeSDK */
/* globals document */

// Add manifest.json to main HTML file
var scriptElement = document.createElement('script');
scriptElement.src = 'https://cdn-creativesdk.adobe.io/v1/csdk.js';
document.getElementsByTagName('head')[0].appendChild(scriptElement);

document.addEventListener('deviceready', function() {
    AdobeCreativeSDK.init({
        clientID: '<YOUR_CLIENT_ID_HERE>',
        onError: function(error) {
            if (error.type === AdobeCreativeSDK.ErrorTypes.AUTHENTICATION) {
                console.log('You must be logged in to use the Creative SDK');
            } else if (error.type === AdobeCreativeSDK.ErrorTypes.GLOBAL_CONFIGURATION) {
                console.log('Please check your configuration');
            } else if (error.type === AdobeCreativeSDK.ErrorTypes.SERVER_ERROR) {
                console.log('Oops, something went wrong');
            }
        }
    });
}, false);
