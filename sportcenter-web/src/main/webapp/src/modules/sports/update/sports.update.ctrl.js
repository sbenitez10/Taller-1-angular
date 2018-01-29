(
        function (ng) {
            var mod = ng.module("sportModule");
            mod.constant("sportsContext", "api/sports");
            mod.constant("booksContext", "api/books");
            mod.controller('sportUpdateCtrl', ['$scope', '$http', 'sportsContext', '$state', 'booksContext', '$rootScope',
                function ($scope, $http, sportsContext, $state, booksContext, $rootScope) {
                    $rootScope.edit = true;

                    $scope.data = {};

                    //TODO
                }]);
        }
)(window.angular);