(function (ng) {
    var mod = ng.module("sportModule");
    mod.constant("sportsContext", "api/sports");
    mod.controller('sportNewCtrl', ['$scope', '$http', 'sportsContext', '$state', '$rootScope',
        function ($scope, $http, sportsContext, $state, $rootScope) {
            $rootScope.edit = false;

            $scope.data = {};

            //TODO
        }
    ]);
}
)(window.angular);