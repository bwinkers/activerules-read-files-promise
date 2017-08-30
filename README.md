# activerules-read-files-promise

[![NPM version](https://img.shields.io/npm/v/activerules-read-files-promise.svg)](https://www.npmjs.com/package/activerules-read-files-promise)
[![Build Status](https://travis-ci.org/bwinkers/activerules-read-files-promise.svg?branch=master)](https://travis-ci.org/bwinkers/activerules-read-files-promise)
[![Code Climate](https://codeclimate.com/github/bwinkers/activerules-read-files-promise/badges/gpa.svg)](https://codeclimate.com/github/bwinkers/activerules-read-files-promise)
[![Coverage Status](https://img.shields.io/coveralls/bwinkers/activerules-read-files-promise.svg)](https://coveralls.io/github/bwinkers/activerules-read-files-promise)
[![Dependency Status](https://img.shields.io/david/bwinkers/activerules-read-files-promise.svg?label=deps)](https://david-dm.org/bwinkers/activerules-read-files-promise)
[![devDependency Status](https://img.shields.io/david/dev/bwinkers/activerules-read-files-promise.svg?label=devDeps)](https://david-dm.org/bwinkers/activerules-read-files-promise#info=devDependencies)

```javascript
const readFiles = require('read-files-promise');

readFiles([
  'path/to/file0', // 'apple'
  'path/to/file1', // 'orange'
], {encoding: 'utf8'})
.then(buffers => {
  buffers; //=> ['apple', 'orange']
});
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install activerules-read-files-promise
```

## API

```javascript
const readFiles = require('read-files-promise');
```

### readFiles(*filenames* [, *options*])

*filenames*: `Array` of `String` (file paths)  
*options*: `Object` or `String` (same as [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)'s second argument)  
Return: `Object` ([Promise][promise])

It reads the files specified in its first argument.

When it finish reading all the files, it will be [*fulfilled*](https://promisesaplus.com/#point-26) with an array of the contents as its first argument. The order of the contents depends on the order of file paths.

It won't reject unless it fails horribly. Finding zero files can be a success.

```javascript
const readFiles = require('read-files-promise');

readFiles([
  'path/to/file0' // 'a'
  'path/to/file1' // 'b'
  'path/to/file2' // 'c'
]).then(onFulfilled, onRejected);

function onFulfilled(buffers) {
  buffers; //=> [<Buffer 61>, <Buffer 62>, <Buffer 63>]
};

function onRejected(err) {
  console.log('Cannot read the file.');
};
```

## License

Copyright (c) 2017 [Brian Winkers](https://github.com/bwinkers)

Licensed under [the MIT License](./LICENSE).

[promise]: https://promisesaplus.com/

## Error on missing files

If you want a version that throws errors on missing files check out the project [we forked](https://github.com/shinnn/read-files-promise).

Check back soon...
