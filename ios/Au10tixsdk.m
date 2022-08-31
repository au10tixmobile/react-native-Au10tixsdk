#import <React/RCTBridgeModule.h>
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTEventDispatcher.h>

@interface RCT_EXTERN_MODULE(Au10tixsdk, NSObject)

RCT_EXTERN_METHOD(prepareSdk:(id)data
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
