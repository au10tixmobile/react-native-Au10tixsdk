import Au10tixCore

@objc(Au10tixsdk)
class Au10tixsdk: NSObject {

   @objc(prepareSdk:withResolver:withRejecter:)
   func prepareSdk(token: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        Au10tix.shared.prepare(with: token) { result in
        switch result {
        case .success(let sessionID):
            print("prepare success \(sessionID)")
            resolve(sessionID)
        case .failure(let error):
            print("prepare failure \(error.localizedDescription)")
        }
      }
   }
}
		
