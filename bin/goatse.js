#!/usr/bin/env nodejs


'use strict'; 




var GoatseWriter,
    goatseWriter,
    goatse,
    mergedArgs; 




GoatseWriter = require('../lib'); 




mergedArgs = 'hello'; 
if (process.argv.length > 2) {
	mergedArgs = 
		process.argv.slice(2)
	        .map(function(item) {
	            return item.replace(/[\n\s]/ig, ''); 
	        })
	        .join(' '); 
}

goatseWriter = new GoatseWriter(); 
goatse       = goatseWriter.render(mergedArgs); 

console.log(goatse);
