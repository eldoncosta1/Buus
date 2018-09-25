(function() {
    'use strict';

    angular
    .module('appbuus')
    .config(function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('appbuus');
        // localStorageServiceProvider.setStorageCookieDomain('example.com');
         localStorageServiceProvider.setStorageType('sessionStorage');
      })
    .controller('loginController',  function($scope, $location, $state, $stateParams, $rootScope, loginService, localStorageService) {
        
        $scope.username = "";
        $scope.password = "";
        
        $scope.submit = function() {        
            $scope.alertLogin = false;
            var userName = $scope.username;
            var password = $scope.password;
                                   
            if(!loginService.validarLogin(userName, password)) {
                $scope.alertLogin = true;
                localStorageService.set('loggedIn', false);
            }else{                
                var usuario = loginService.buscarUsuario(userName, password)
                if(usuario.loginValido){
                    localStorageService.set('userName', userName);
                    localStorageService.set('loggedIn', true);
                    localStorageService.set('idPerfilUsuario', usuario.idPerfilUsuario);
                    localStorageService.set('perfilUsuario', usuario.perfilUsuario);
                    $state.go('home');
                }else{
                    localStorageService.set('loggedIn', false);
                    $scope.alertLogin = true;                    
                }                
            } 
        }

        $scope.keyPressed = function(caracteres) {
            $scope.alertLogin = false;
        }
    });

})();