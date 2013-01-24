#What's color-format
====================

It can format output strings and make the console looks colorful.

#Usage
------
###Format strings
format has two arguments:

- `str` --string to print to stdout.
- `opt` --options like `{fgc: 'red',bgc: 'yellow',eft: 'underline'}`

   ####Options
- `fgc` --foreground color(defalut `'white'`)
- `bgc` --background color(defalut `'black'`)

you could use one of `'black'`,`'red'`,`'green'`,`'yellow'`,`'blue'`,`'magenta'`,`'cyan'` or `'white'`.

- `eft` --effect (defalut `'reset'`).You could pass a string as `'underline'` or an array as `['highlight', 'underline']`.

you could use some of `'reset'`,`'highlight'`,`'dark'`,`'underline'`,`'flicker'`,`'inverse'` or `'none'`.

Example:
````javascript
var format = require('format').format;
console.log(format('Hello world',{fgc:'red',bgc:'yellow',eft:'underline'}));
````
###Warn function
Example:
````javascript
var warn = require('format').warn;
warn('Hello world');
````
###Error function
Example:
````javascript
var error = require('format').error;
error('Hello world');
````
###Notice function
Example:
````javascript
var notice = require('format').notice;
notice('Hello world');
````
###Info function
Example:
````javascript
var info = require('format').info;
info('Hello world');
````