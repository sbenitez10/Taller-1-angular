(function (ng) {
    var mod = ng.module("sportModule");
    mod.constant("sportsContext", "api/sports");
    mod.controller('sportDeleteCtrl', ['$scope', '$http', 'sportsContext', '$state',
        function ($scope, $http, sportssContext, $state) {
            var idSport = $state.params.sportId;
            //TODO
        }
    ]);
}
)(window.angular);