(function() {
    'use strict';

    angular
    .module('appbuus')
    .factory('loginService', function(){

        return {
            
            validarLogin: function(email, password) {
                var msg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ;                
                if( msg === false || password == ""){                    
                    return false;
                }

                return true;
            },
            buscarUsuario: function(email, password) {
                
                var allUser = [];
                var user = {};
                user.email = 'eldon@buus.com';
                user.password = '123';
                user.idPerfilUsuario = 1;
                user.perfilUsuario = 'Motorista';
                allUser.push(user);

                user = {};
                user.email = 'andre@buus.com';
                user.password = '321';
                user.idPerfilUsuario = 2;
                user.perfilUsuario = 'Cooperativa';
                allUser.push(user);

                var userValid = { loginValido : false };
                
                allUser.forEach(function(user) {                    
                    if(user.email == email && user.password == password){
                        userValid = user;
                        userValid.loginValido = true;
                        
                    }                    
                });
                return userValid;
            },
            
        }
        
    });

})();