//some utility functions
var UNDEFINED = undefined;
function defined(obj){
	return obj !== UNDEFINED && obj !== null;
}
function isString(s){
	return typeof s === 'string';
}
function isArray(obj){
	return Object.prototype.toString.call(obj) === '[object Array]';
}
//colors array
var colors = {
	'reset'		: 0,
	'highlight'	: 1,
	'dark'		: 2,
	'underline'	: 4,
	'flicker'	: 5,
	'inverse'	: 7,
	'none'		: 8,
	'black'		: [30, 40],
	'red'		: [31, 41],
	'green'		: [32, 42],
	'yellow'	: [33, 43],
	'blue'		: [34, 44],
	'magenta'	: [35, 45],
	'cyan'		: [36, 46],
	'white'		: [37, 47]
};
var eft = function(opt){
	if(isString(opt.eft) && opt.eft.length>0){
		opt.eft = [opt.eft];
		return eft(opt);
	}
	else if(isArray(opt.eft)){
		var ret = '';
		for(var i=0;i<opt.eft.length;i++){
			var eftNode = opt.eft[i];
			if(isString(eftNode) && defined(colors[eftNode])){
				if(ret.length > 0){
					ret = ret + ';' + colors[eftNode];
				}
				else{
					ret = ret + colors[eftNode];
				}
			}
			eftNode = null;
		}
		return ret;
	}
	return '';
};
//
var format = exports.format =function(str, opt){
	var opt = opt || {},
		style = '';
	if(isString(opt.fgc) && defined(colors[opt.fgc])){
		style = style + colors[opt.fgc][0];
	}
	if(isString(opt.bgc) && defined(colors[opt.bgc])){
		if(style.length > 0){
			style = style + ';' + colors[opt.bgc][1];
		}
		else{
			style = style + colors[opt.bgc][1];
		}
	}
	if(isString(opt.eft) && opt.eft.length>0 || isArray(opt.eft)){
		var e = eft(opt);
		if(style.length > 0){
			style = style + ';' + eft(opt);
		}
		else{
			style = style + eft(opt);
		}
	}
	return '\033[' + style + 'm' + str + '\033[0m';
};
var warn = exports.warn = function(msg){
	console.log(format('Warn',{fgc:'yellow',eft:'inverse'}),format(msg,{fgc:'yellow'}));
};
var error = exports.error = function(msg){
	console.log(format('Error',{fgc:'red',eft:'inverse'}),format(msg,{fgc:'red'}));
};
var notice = exports.notice = function(msg){
	console.log(format('Error',{fgc:'green',bgc:'white',eft:['dark','inverse']}),format(msg,{fgc:'green',eft:'dark'}));
};
var info = exports.info = function(msg){
	console.log(format('Info',{fgc:'blue',bgc:'white',eft:['inverse']}),format(msg,{fgc:'blue',eft:'dark'}));
};