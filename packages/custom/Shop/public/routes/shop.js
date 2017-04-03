(function() {
    'use strict';

    function Shop($stateProvider) {
        $stateProvider.state('shop example page', {
            url: '/shop/example',
            templateUrl: 'Shop/views/index.html'
        }).state('shop circles example', {
            url: '/shop/example/:circle',
            templateUrl: 'Shop/views/example.html'
        });
    }

    angular
        .module('mean.Shop')
        .config(Shop);

    Shop.$inject = ['$stateProvider'];

})();
