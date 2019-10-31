# [parse-mysql-url](https://github.com/ryanburnette/parse-mysql-url)

[![repo](https://img.shields.io/badge/repository-Github-black.svg?style=flat-square)](https://github.com/ryanburnette/parse-mysql-url)
[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=flat-square)](https://www.npmjs.com/package/@ryanburnette/parse-mysql-url)

Parse MySQL database URL into an object.

## Usage

```js
var parse = require('@ryanburnette/parse-mysql-url');
console.log(parse('mysql://username:password@host:port/name'));
// {
//   username: 'username',
//   password: 'password',
//   host: 'host',
//   port: 'port',
//   name: 'name'
// };
```
