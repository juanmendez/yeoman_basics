'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function(){
      generators.Base.apply( this, arguments );

        this.log( "name:", arguments[0] );
    },
    method1:function(){
        this.log( "hello world" );
    }
});
