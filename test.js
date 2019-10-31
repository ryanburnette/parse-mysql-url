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

test('mysql://username:password@host:port/name', {
  username: 'username',
  password: 'password',
  host: 'host',
  port: 'port',
  name: 'name'
});

test('mysql://username:password@host/name', {
  username: 'username',
  password: 'password',
  host: 'host',
  port: '3306',
  name: 'name'
});
