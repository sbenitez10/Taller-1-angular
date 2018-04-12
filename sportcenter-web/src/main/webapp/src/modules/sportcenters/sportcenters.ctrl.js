(function (ng){
    var module =ng.module("sportCenterModule");
    module.constant("sportCenterContext","api/sportCenter");
    module.controller('sportCenterCtrl',['$scope','$http','sportCenterContext',
        function($scope,$http,sportCenterContext){
            $http.get("data/sportcenters.json").then(function(response){
                $scope.centrosRecord = response.data;
            });
        }
    ]);
}
)(window.angular);
