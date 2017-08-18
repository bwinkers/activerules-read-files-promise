/*!
 * ACTIVERULES-read-files-promise | MIT (c) Brian Winkers
 * https://github.com/bwinkers/activerules-read-files-promise
*/
'use strict';

var multipleFiles = require('activerules-read-files');
var wrapPromise = require('wrap-promise');

module.exports = function activerulesReadFilesPromise(filePaths, options) {
  return wrapPromise(function(resolve, reject) {
    multipleFiles(filePaths, options, function(err, bufs) {
      if (err) {
        reject(err);
        return;
      }
      resolve(bufs);
    });
  });
};
