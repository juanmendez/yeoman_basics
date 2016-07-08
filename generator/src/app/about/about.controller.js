(function () {
    'use strict';

    angular.module('This-App-Is-Cached').controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = [];
    
    /* @ngInject */
    function AboutCtrl() {
        /* jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
        }
    }
})();