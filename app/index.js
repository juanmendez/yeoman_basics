'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function(){
      generators.Base.apply( this, arguments );
    },

    /**
     * it is best to keep the context order in place.
     */
    initializing:function(){
        this.log( "initializing" );
    },
    prompting:{

        method1 : function(){
            this.log( "in prompting1");
        },

        method2 : function(){
            this.log( "in prompting2");
        }
    },
    configuring:function(){
        this.log( "configuring" );
    },
    default:function(){
        this.log( "default" );
    },
    writing:{
        gulpFile:function(){

        },
        packageJson:function(){

        },
        git:function(){

        },
        bower:function(){

        },
        appStaticFiles:function(){
            this.log( "template path: " + this.templatePath() );
            this.log( "destination path: " + this.destinationPath() );

            var source =  this.templatePath( "_favicon.ico" );
            var destination =  this.destinationPath( "src/_favicon.ico" );

            this.log( "source: " + source );
            this.log( "destination " + destination );

            //this is using the template and destination paths
            this.copy( '_favicon.ico', 'src/favicon.ico' );
        },
        scripts:function(){

        },
        html:function(){

        }
    },
    conflicts:function(){
        this.log( "conflicts" );
    },
    install:function(){
        this.log( "install" );
    },
    end:function(){
        this.log( "end" );
    },

    /**
     * custom functions happen after default.
     */
    custom:function(){
        this.log( "***custom");
    }
});
