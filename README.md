# goatse
Command line util similar to cowsay but with text inside a widely extended goatse anus.

Currently just printing goatse ascii art, but there is a lot of work to be done. Stay in touch.


## INSTALLATION
```sh
npm install -g goatse
```


## USAGE
```sh
devlato@devlato-pc:~$ goatse hello
* g o a t s e x * g o a t s e x * g o a t s e x *
g                                               g  
o /     \             \            /    \       o
a|       |             \          |      |      a
t|       `.             |         |       :     t
s`        |             |        \|       |     s
e \       | /       /  \\\   --__ \\       :    e
x  \      \/   _--~~          ~--__| \     |    x  
*   \      \_-~                    ~-_\    |    *
g    \_     \        _.--------.______\|   |    g
o      \     \______// _ ___ _ (_(__>  \   |    o
a       \   .  C ___)  ______ (_(____>  |  /    a
t       /\ |   C ____)/      \ (_____>  |_/     t
s      / /\|   C_____) hello |  (___>   /  \    s
e     |   (   _C_____)\______/  // _/ /     \   e
x     |    \  |__   \\_________// (__/       |  x
*    | \    \____)   `----   --'             |  *
g    |  \_          ___\       /_          _/ | g
o   |              /    |     |  \            | o
a   |             |    /       \  \           | a
t   |          / /    |         |  \           |t
s   |         / /      \__/\___/    |          |s
e  |           /        |    |       |         |e
x  |          |         |    |       |         |x
* g o a t s e x * g o a t s e x * g o a t s e x *
```


## USAGE IN CODE
```javascript
var GoatseWriter,
    goatseWriter,
    goatse,
    mergedArgs; 


GoatseWriter = require('goatse'); 


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
