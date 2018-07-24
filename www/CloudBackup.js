document.addEventListener('deviceready', function() {
  cordova.exec(success, failure, 'ESCloudBackup', 'initialize', []);

  function success(status) {
    console.info('tabris-plugin-cloud-backup: localStorage backup ' + (status ? 'enabled' : 'disabled'));
  }

  function failure(error) {
    console.error('tabris-plugin-cloud-backup: Error setting localStorage file system properties: ' + error);
  }
});
