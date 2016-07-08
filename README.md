# yeoman working with installations

This stepping proved to be right. First installation completes installing dependencies, and last the end step comes into place.

    install: function(){
            
        var self = this;
        this.installDependencies({npm:true, bower:true, skipMessage:false, callback:function(){
            self.log( "installed dependencies" );
        }});
    },
    end: function(){
        this.log( "yeoman has completed!");
    }
    
    
The yeoman generator is now found at `_yang` directory. In this way we are going to create a top generator.
