(function(ng){
    var mod =ng.module("sportCenterModule",['ui.router']);
    mod.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        var basepath='src/modules/sportcenters/';
        $urlRouterProvider.otherwise("/sportCenterList");
        $stateProvider.state('sportCenterList',{
            url:'/sportCenter/list',
            views:{
                'mainView':{
                    templateUrl: basepath +'sportcenters.list.html',
                    controller:'sportCenterCtrl',
                    controllerAs: 'ctrl'
                }
            }
        });
        
        
    }
    ]);
    
}    
)(window.angular);
