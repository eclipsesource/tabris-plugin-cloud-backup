#import "ESCloudBackup.h"
#import "CordovaConfig.h"

@implementation ESCloudBackup

- (void) initialize:(CDVInvokedUrlCommand *)command {
    BOOL enableCloudBackup = [[[CordovaConfig config].settings objectForKey:@"enablecloudbackup"] boolValue];
    NSError *error = nil;
    BOOL success = [[NSURL fileURLWithPath:[self storeFilePath]] setResourceValue: [NSNumber numberWithBool: !enableCloudBackup]
                                                                           forKey: NSURLIsExcludedFromBackupKey
                                                                            error: &error];
    CDVPluginResult *result = success ?
        [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:enableCloudBackup] :
        [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:[error localizedDescription]];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (NSString *)storeFilePath {
    return [[self documentsDirectory] stringByAppendingPathComponent:@"tabris.ClientStore"];
}

- (NSString *)documentsDirectory {
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    return [paths objectAtIndex:0];
}

@end
