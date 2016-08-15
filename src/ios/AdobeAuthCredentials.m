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

#import <Cordova/CDV.h>
#import <AdobeCreativeSDKCore/AdobeCreativeSDKCore.h>

@interface AdobeAuthCredentials : CDVPlugin
@end

@implementation AdobeAuthCredentials

//#define ADOBE_CSDK_CLIENT_ID       @""
//#define ADOBE_CSDK_CLIENT_SECRET   @""

- (void)pluginInitialize
{
    // TODO: this can be grabbed as part of the plugin installation process, for now to make it easy, we
    // hard-code this. We do NOT want to expose the CLIENT_SECRET in JavaScript, it has to be in native code.
    // This could be a post-build hook
    NSLog(@"WARNING - AdobeAuthCredentials - pluginInitialize");
    NSDictionary* creativesdkDict = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CreativeSDK"];
    NSString *ADOBE_CSDK_CLIENT_ID = [creativesdkDict objectForKey:@"CSDKClientID_iOS"];
    NSString *ADOBE_CSDK_CLIENT_SECRET = [creativesdkDict objectForKey:@"CSDKClientSecret_iOS"];

    if ([@"" isEqualToString:ADOBE_CSDK_CLIENT_ID]) {
        NSLog(@"WARNING - AdobeAuthCredentials - ADOBE_CSDK_CLIENT_ID is not set");
    }
    if ([@"" isEqualToString:ADOBE_CSDK_CLIENT_SECRET]) {
        NSLog(@"WARNING - AdobeAuthCredentials - ADOBE_CSDK_CLIENT_SECRET is not set");
    }

    [[AdobeUXAuthManager sharedManager]
        setAuthenticationParametersWithClientID:ADOBE_CSDK_CLIENT_ID
        withClientSecret:ADOBE_CSDK_CLIENT_SECRET];
}

@end
