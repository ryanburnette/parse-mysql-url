'use strict';

function parse(url) {
  url = String(url);
  var match;
  if (url.split(':').length == 4) {
    match = url.match(/mysql:\/\/(.*):(.*)@(.*):(.*)\/(.*)/);
    if (match) {
      return {
        username: match[1],
        password: match[2],
        host: match[3],
        port: match[4],
        db: match[5]
      };
    }
  }
  if (url.split(':').length == 3) {
    match = String(url).match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)/);
    if (match) {
      return {
        username: match[1],
        password: match[2],
        host: match[3],
        port: '3306',
        db: match[4]
      };
    }
  }
}

module.exports = parse;
