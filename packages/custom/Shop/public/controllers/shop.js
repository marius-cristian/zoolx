(function() {
    'use strict';

    /* jshint -W098 */

    function ShopController($scope, Global, Shop, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'Shop'
        };

        $scope.checkCircle = function() {
            Shop.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.Shop')
        .controller('ShopController', ShopController);

    ShopController.$inject = ['$scope', 'Global', 'Shop', '$stateParams'];

})();
