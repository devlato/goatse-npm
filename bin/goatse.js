#!/usr/bin/env nodejs


'use strict'; 




var GoatseWriter,
    goatseWriter,
    goatse,
    mergedArgs; 




GoatseWriter = require('../lib'); 




mergedArgs = (process.argv.slice(2) || [])
        .map(function(item) {
            return item.replace(/[\n\s]/ig, ''); 
        })
        .join(' '); 

goatseWriter = new GoatseWriter(); 
goatse       = goatseWriter.render({
    args: mergedArgs
}); 
console.log(goatse);
