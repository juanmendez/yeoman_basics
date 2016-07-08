(function () {
    'use strict';

    angular.module('This-App-Is-Cached').controller('ShellCtrl', ShellCtrl);

    ShellCtrl.$inject = ['$rootScope'];

    function ShellCtrl($rootScope) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
