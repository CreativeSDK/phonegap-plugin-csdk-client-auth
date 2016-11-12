<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->

phonegap-plugin-csdk-client-auth
------------------------

[![Stories in Ready](https://badge.waffle.io/CreativeSDK/phonegap-plugin-csdk-client-auth.png?label=ready&title=Ready)](http://waffle.io/CreativeSDK/phonegap-plugin-csdk-client-auth)

Welcome to your first stop on the way to integrating the Adobe Creative SDK into your PhoneGap app!

Client Auth is required for all Creative SDK integrations. See the information below for info on using this Client Auth plugin.

### Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setup guide](#setup-guide)
- [API guide](#api-guide)


# Prerequisites

## Supported PhoneGap platforms

1. Android
1. iOS

## Registering for a Client ID and Secret

Before you can work with the Creative SDK, you must register your application and get your Client ID and Client Secret.

_**Note:** You need a Client ID and Secret for each platform you plan to use. If you plan to ship for both Android and iOS, you will need an ID/Secret pair for both platforms._

For details, see [Registering Your Application](https://creativesdk.adobe.com/docs/ios/#/articles/gettingstarted/index.html#register_application).

## Software requirements

**iOS**

- Xcode 7 or higher
- iOS 8.2 or higher

[See the Creative SDK Getting Started guide for further details](https://creativesdk.adobe.com/docs/ios/#/articles/gettingstarted/index.html#prerequisites).

**Android**

- Android Studio 2.0 or higher
- Android SDK 16 or higher

[See the Creative SDK Getting Started guide for further details](https://creativesdk.adobe.com/docs/android/#/articles/gettingstarted/index.html#prerequisites).


# Installation

## Adding the plugin

Use the command below to add the plugin to your app. If you only plan to ship on one platform, you can use dummy values for the Client ID and Secret variables for the platform you don't need.

_**Note:** be sure to replace the Client ID and Secret strings with the values you received from the Creative SDK site (see "Registering for a Client ID and Secret" above)._

### Adding released version

```
phonegap plugin add --save phonegap-plugin-csdk-client-auth \
  --variable CSDK_CLIENT_ID_IOS="iOS Client ID" \
  --variable CSDK_CLIENT_SECRET_IOS="iOS Secret" \
  --variable CSDK_CLIENT_ID_ANDROID="Android Client ID" \
  --variable CSDK_CLIENT_SECRET_ANDROID="Android Secret"
```

### Adding development version

```
phonegap plugin add --save https://github.com/CreativeSDK/phonegap-plugin-csdk-client-auth \
  --variable CSDK_CLIENT_ID_IOS="iOS Client ID" \
  --variable CSDK_CLIENT_SECRET_IOS="iOS Secret" \
  --variable CSDK_CLIENT_ID_ANDROID="Android Client ID" \
  --variable CSDK_CLIENT_SECRET_ANDROID="Android Secret"
```

## Downloading the Creative SDK

**iOS**

To get the iOS SDK, go to the [Downloads page](https://creativesdk.adobe.com/downloads.html), click the download link for `STATIC FRAMEWORKS (DEPRECATED)`, and extract it to the `src/ios` folder of this plugin. Extracting the ZIP will create an `AdobeCreativeSDKFrameworks` folder.

The ZIP files contain all the frameworks in the Creative SDK, but for this plugin we will only be using the `AdobeCreativeSDKCore.framework`.


**Android**

No action is required for Android. The Creative SDK for Android is delivered as a remote Maven repository, and the required framework will be downloaded automatically by the plugin.


# Setup guide

1. Create a new PhoneGap app or `cd` into an existing one
1. Add this plugin (see "Adding the plugin" above)
1. **iOS only:** download and add the Creative SDK to this project's `plugins/phonegap-plugin-csdk-client-auth/src/ios` directory (see "Downloading the Creative SDK" above)
1. Add your target PhoneGap platform
1. Build and run for your platform


<a name="api"></a>
# Api Guide

There is no JavaScript API for this plugin. All Client Auth code is added to your app automatically.

If you need to update your Creative SDK Client ID and Secret, or add a new ID and Secret for a new platform, you can do that in your app's `config.xml` file.

The Client ID and Secret pairs are stored like this in `config.xml`:

```
<plugin name="phonegap-plugin-csdk-client-auth" spec="~1.0.0">
        <variable name="CSDK_CLIENT_ID_IOS" value="iOS Client ID" />
        <variable name="CSDK_CLIENT_ID_ANDROID" value="Android Client ID" />
        <variable name="CSDK_CLIENT_SECRET_IOS" value="iOS Secret" />
        <variable name="CSDK_CLIENT_SECRET_ANDROID" value="Android Secret" />
</plugin>
```
