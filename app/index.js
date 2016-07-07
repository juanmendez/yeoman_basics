'use strict';

var generators = require('yeoman-generator');

var MyBase = generators.Base.extend({
    myBaseHelper:function(){
        console.log( "@baz: another helper" );
    }
});

module.exports = MyBase.extend({
    constructor: function(){
      generators.Base.apply( this, arguments );
    },
    init:function(){
        this.log( "inside init" );
        this.baz = function(){
            this.log( "inside baz" );
        }
    },
    method1:function(){
        this._privateMethod();
    },
    _privateMethod:function(){
        this.log( "hello world" );
        this.baz();
        this.myBaseHelper();
    }
});
