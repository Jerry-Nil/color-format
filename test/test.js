var format = require('../lib/format').format,
	warn = require('../lib/format').warn,
	error = require('../lib/format').error,
	notice = require('../lib/format').notice,
	info = require('../lib/format').info;

var str = "hello world";

var count = 0;

var Count = function(){
	return count<10 ? '00'+(count++) : count<100 ? '0'+(count++) : count++ ;
};

console.log('test foreground color');
console.log(Count() + ' ' + format(str,{fgc:'black',bgc:'white'}));
console.log(Count() + ' ' + format(str,{fgc:'red'}));
console.log(Count() + ' ' + format(str,{fgc:'green'}));
console.log(Count() + ' ' + format(str,{fgc:'yellow'}));
console.log(Count() + ' ' + format(str,{fgc:'blue'}));
console.log(Count() + ' ' + format(str,{fgc:'magenta'}));
console.log(Count() + ' ' + format(str,{fgc:'cyan'}));
console.log(Count() + ' ' + format(str,{fgc:'white'}));

console.log('\ntest background color');
console.log(Count() + ' ' + format(str,{bgc:'black'}));
console.log(Count() + ' ' + format(str,{bgc:'red'}));
console.log(Count() + ' ' + format(str,{bgc:'green'}));
console.log(Count() + ' ' + format(str,{bgc:'yellow'}));
console.log(Count() + ' ' + format(str,{bgc:'magenta'}));
console.log(Count() + ' ' + format(str,{bgc:'cyan'}));
console.log(Count() + ' ' + format(str,{bgc:'white',fgc:'black'}));

console.log('\ntest effects');
console.log(Count() + ' ' + format(str,{fgc:'red'}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:'highlight'}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:'dark'}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:'underline'}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:'flicker'}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:'inverse'}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:'none'}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:['highlight','underline']}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:['highlight','flicker']}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:['highlight','inverse']}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:['dark','underline']}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:['dark','flicker']}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:['dark','inverse']}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:['underline','flicker']}));
console.log(Count() + ' ' + format(str,{fgc:'red',eft:['underline','inverse']}));

console.log('\ntest functions');
warn('Hello');
error('Hello');
notice('Hello');
info('Hello')