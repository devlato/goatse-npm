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
```

GoatseWriter class has some options too: 
```javascript
var goatseWriter = new GoatseWriter({
    template:      'goatse.ejs',               // Goatse template file name
    rootPath:      __dirname,                  // Folder where module is stored, defaults to something like __dirname
    templatesPath: __dirname + './templates',  // Default templates folder 
    ioOptions: {                               // Options for file I/O
        encoding: 'utf8',
        flag:     'r'
    }
});
```


## TODO 
1. Text inside goatse anus with anus width auto-change
2. Text inside goatse anus with full image scaling
