# goatse
Command line util similar to cowsay but with text inside a widely extended goatse anus.

Currently just printing goatse ascii art, but there is a lot of work to be done. Stay in touch.


## INSTALLATION
```sh
npm install -g goatse
```


## USAGE
```sh
goatse some text
```


## USAGE IN CODE
```javascript
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
```


## TODO 
1. Text inside goatse anus with anus width auto-change
2. Text inside goatse anus with full image scaling
