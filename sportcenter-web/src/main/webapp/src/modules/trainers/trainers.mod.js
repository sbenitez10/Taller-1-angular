(function (ng) {
    
    var mod = ng.module("trainerModule", ['ui.router']);
    
    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            
            var basePath = 'src/modules/trainers/';
            
            $urlRouterProvider.otherwise("/trainerList");
            
            $stateProvider.state('trainerList', {
                
                url: '/trainer/list',
                 views: {
                    'mainView': {
                        templateUrl: basePath + 'trainers.list.html',
                        controller: 'trainerCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            });
        }
    ]);
})(window.angular);
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


