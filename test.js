'use strict';

var parse = require('./');

function test(url, exp) {
  var got = parse(url);

  Object.keys(exp).forEach(function(k) {
    if (exp[k] != got[k]) {
      console.error(url, exp, got, k);
      throw new Error('FAIL');
    }
  });
}

test('mysql://username:password@host:port/db', {
  username: 'username',
  password: 'password',
  host: 'host',
  port: 'port',
  db: 'db'
});

test('mysql://username:password@host/db', {
  username: 'username',
  password: 'password',
  host: 'host',
  port: '3306',
  db: 'db'
});
