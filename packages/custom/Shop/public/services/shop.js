(function() {
    'use strict';

    function Shop($http, $q) {
        return {
            name: 'Shop',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/shop/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.Shop')
        .factory('Shop', Shop);

    Shop.$inject = ['$http', '$q'];

})();
