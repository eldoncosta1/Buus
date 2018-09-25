(function() {
    'use strict';

    angular
    .module('appbuus')
    .controller('homeController',  function($scope, localStorageService, homeService) {
        var idPerfilUsuario = localStorageService.get('idPerfilUsuario');
        $scope.post = localStorageService.get('perfilUsuario');
        $scope.menuItemAtendimento = idPerfilUsuario == 1 ? 'Meus Atendimentos' : 'Atendimentos';
        
    });

    angular
    .module('appbuus').directive('footablewrap', function() {
        return {            
            restrict: 'E',            
            replace: true,
            templateUrl: 'app/home/footable-wrap.view.html',
            controller: function($scope, $timeout, homeService, localStorageService) {
               // $timeout(function(){                    
                    var idPerfilUsuario = localStorageService.get('idPerfilUsuario');
                    $scope.allData = homeService.generateData(idPerfilUsuario);
                //}, 10);             
                          
            }
        }
    });

    angular
    .module('appbuus').directive('footable', function($timeout) {
        return {
            link: function(scope, element, attrs ){
                //$timeout(function(){
                    var paging = 20;                    
                    $('table').footable({
                        "empty" : "Dados não encontrados",
                        "paging": {"enabled":true, "size": paging, "position" : "right", "countFormat": ""},
                        "filtering": {"enabled":true, "space" : "OR", "delay" : 500, "dropdownTitle": "Filtros", "placeholder" : "Buscar atendimento.."},
                        "sorting": {"enabled":true},
                        //"rows": scope.allData,
                        "on": {
                            "postdraw.ft.table": function(a, b, c) {
                                scope.loading = false;
                            }          
                        },
                        "after.ft.filtering": function(a, b, c){
                        var users = b.rows.array;
                        var u = [];
                        for(var i = 0; i < users.length; i++)
                            u.push(users[i].value);
                        
                
                            $timeout(function(){ scope.showData = u;});
                            
                            scope.footable = b;
                        },"after.ft.sorting": function(a, b, c){
                        var users = b.rows.array;
                        var u = [];
                        for(var i = 0; i < users.length; i++)
                            u.push(users[i].value);
                        
                
                            $timeout(function(){ scope.showData = u;});
                            
                            scope.footable = b;
                        },"after.ft.paging": function(a, b, c){
                        
                        var users = b.rows.array;
                        var u = [];
                        for(var i = 0; i < users.length; i++)
                            u.push(users[i].value);
                        
                
                            $timeout(function(){ scope.showData = u;});
                            
                            scope.footable = b;
                        }
                    });
                //}, 100);               

            },
            restrict: 'C'
        }
    })

})();