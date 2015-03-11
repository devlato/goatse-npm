

'use strict'; 




var _, fs; 




_  = require('lodash'),
fs = require('fs'); 




module.exports = (function() { 

    function GoatseWriter(options) {
        this.setDefaultOptions();
        this.setOptions(options); 
    }


    GoatseWriter.prototype.setDefaultOptions = function(options) {
        this._defaultOptions = {
            template:  './templates/goatse.ejs',
            ioOptions: {
                encoding: 'utf8',
                flag:     'r'
            }
        };

        return this; 
    }; 


    GoatseWriter.prototype.setOptions = function(options) {
        var currentOptions = _.merge(this._defaultOptions, this._options); 

        this._options = _.merge(currentOptions, options); 

        return this; 
    };


    GoatseWriter.prototype.getOptions = function() {
        return this._options; 
    };


    GoatseWriter.prototype._loadTemplate = function(path, options) {
        return fs.readFileSync(path, options); 
    };


    GoatseWriter.prototype.getTemplate = function(path) {
        var options = this.getOptions(),
            template; 

        if (!this._template) {
            template = this._loadTemplate(options.template, options.ioOptions); 
            this._template = _.template(template); 
        }

        return this._template; 
    };


    GoatseWriter.prototype.render = function(data) {
        var template = this.getTemplate(); 

        return template(data || {}); 
    };


    return GoatseWriter; 
})(); 
