/*
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

package com.adobe.phonegap.csdk;

import android.support.multidex.MultiDexApplication;
import android.util.Log;

import org.json.JSONObject;
import org.json.JSONException;
import java.io.InputStream;
import java.io.IOException;

import com.adobe.creativesdk.foundation.AdobeCSDKFoundation;
import com.adobe.creativesdk.foundation.auth.IAdobeAuthClientCredentials;

/**
* This class exposes methods in Cordova that can be called from JavaScript.
*/
public class AdobeAuthCredentialsApp extends MultiDexApplication implements IAdobeAuthClientCredentials {

    private static final String LOG_TAG = "Creative SDK Client Auth: AdobeAuthCredentialsApp";

    /* Be sure to fill in the two strings below. */
    private static String CREATIVE_SDK_CLIENT_ID;
    private static String CREATIVE_SDK_CLIENT_SECRET;

    @Override
    public void onCreate() {
        super.onCreate();

        CREATIVE_SDK_CLIENT_ID = getStringResourceByName("csdk_client_id_android");
        CREATIVE_SDK_CLIENT_SECRET = getStringResourceByName("csdk_client_secret_android");
        Log.d(LOG_TAG, CREATIVE_SDK_CLIENT_ID);

        AdobeCSDKFoundation.initializeCSDKFoundation(getApplicationContext());
    }

    private String getStringResourceByName(String aString) {
        String packageName = getPackageName();
        int resId = getResources().getIdentifier(aString, "string", packageName);
        return getString(resId);
    }

    @Override
    public String getClientID() {
        return CREATIVE_SDK_CLIENT_ID;
    }

    @Override
    public String getClientSecret() {
        return CREATIVE_SDK_CLIENT_SECRET;
    }
}
