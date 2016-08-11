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

- [Prerequisites](#prereqs)
- [Installation](#install)
- [Setup guide](#setup)


<a name="prereqs"></a>
# Prerequisites

## Supported PhoneGap platforms

1. Android
1. iOS

## Registering for a Client ID and Secret

Before you can work with the Creative SDK, you must register your application and get your Client ID and Client Secret. 

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


<a name="install"></a>
# Installation

## Adding the plugin

Use the command below to add the plugin to your app.

_**Note:** be sure to replace the Client ID and Secret strings with the values you received from the Creative SDK site (see "Registering for a Client ID and Secret" above)._

```
phonegap plugin add --save https://github.com/CreativeSDK/phonegap-plugin-csdk-client-auth --variable CREATIVE_SDK_CLIENT_ID="Client ID" --variable CREATIVE_SDK_CLIENT_SECRET="Client Secret"
```

## Downloading the Creative SDK

**iOS** 

To get the iOS SDK, go to the [Downloads page](https://creativesdk.adobe.com/downloads.html), download the ZIP files, and extract them to the `src/ios` folder of this plugin. Extracting the ZIP will create an `AdobeCreativeSDKFrameworks` folder. 

The ZIP files contain all the frameworks in the Creative SDK, but for this plugin we will only be using the `AdobeCreativeSDKCore.framework`.


**Android** 

No action is required for Android. The Creative SDK for Android is delivered as a remote Maven repository, and the required framework will be downloaded automatically by the plugin.


<a name="setup"></a>
# Setup guide

1. Create a new PhoneGap app or `cd` into an existing one
1. Add this plugin (see "Adding the plugin" above)
1. **iOS only:** download and add the Creative SDK to this plugin's `src/ios` directory (see "Downloading the Creative SDK" above)
1. Build and run for your platform