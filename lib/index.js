

'use strict'; 




var _, fs, path; 




_    = require('lodash'),
fs   = require('fs'); 
path = require('path');




module.exports = (function() { 

    function GoatseWriter(options) {
        this.setDefaultOptions();
        this.setOptions(options); 
    }


    GoatseWriter.prototype.setDefaultOptions = function(options) {
        var defaultRootPath      = path.join(path.dirname(module.filename), '../'), 
            defaultTemplatesPath = path.join(defaultRootPath, './templates'); 

        this._defaultOptions = {
            template:      'goatse.ejs',
            rootPath:      defaultRootPath,
            templatesPath: defaultTemplatesPath,
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


    GoatseWriter.prototype._loadTemplate = function(path, ioOptions) {
        var templatePath = this._resolveTemplateFileName(path);  

        return fs.readFileSync(templatePath, ioOptions); 
    };


    GoatseWriter.prototype._resolveTemplateFileName = function(filePath) {
        var options = this.getOptions(); 

        return path.join(options.templatesPath, filePath); 
    };


    GoatseWriter.prototype.getTemplate = function(path) {
        var options = this.getOptions(),
            templatesPath, 
            template; 

        if (!this._template) {
            template       = this._loadTemplate(options.template, options.ioOptions); 
            this._template = _.template(template); 
        }

        return this._template; 
    };


    GoatseWriter.prototype.render = function(string) {
        var template = this.getTemplate(); 

        return template({
            string: string
        }); 
    };


    return GoatseWriter; 
})(); 
