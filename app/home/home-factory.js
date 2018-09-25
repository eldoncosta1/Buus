(function() {
    'use strict';

    angular
    .module('appbuus')
    .factory('homeService', function(){

		var service = {};
		
		var id 					= [1, 2, 3];
		var passageiro 			= ['João da Silva', 'Antônio Melo', 'Marcos Vinícius'];
		var origem 				= ['Av. Antonio Gomes, 312'];
		var destino 			= ['Rua dos Pinheiros, 133']
		var horarioProgramado	= [ new Date(2018, 8, 1, 13, 0, 0), 
									new Date(2018, 8, 2, 13, 0, 0), 
									new Date(2018, 8, 3, 13, 0, 0), 
									new Date(2018, 8, 4, 13, 0, 0), 
									new Date(2018, 8, 5, 13, 0, 0),
									new Date(2018, 8, 6, 13, 0, 0),
									new Date(2018, 8, 7, 13, 0, 0),
									new Date(2018, 8, 8, 13, 0, 0),
									new Date(2018, 8, 9, 13, 0, 0),
									new Date(2018, 8, 10, 13, 0, 0),
								  ];
		var situacao 			= ['CONFIRMADO','PENDENTE','CANCELADO'];

		service.generateData = function(idPerfilUsuario){

			var allData = [];			
			for(var i = 0; i < 100; i++){
				var d = {};			
				
				d.id 					= idPerfilUsuario == 1 ? 1 : id[Math.floor(id.length * Math.random())];
				d.passageiro 			= idPerfilUsuario == 1 ? passageiro[0] : passageiro[Math.floor(passageiro.length * Math.random())];
				d.origem				= origem[Math.floor(origem.length * Math.random())];
				d.destino				= destino[Math.floor(destino.length * Math.random())];
				d.horarioProgramado		= horarioProgramado[Math.floor(horarioProgramado.length * Math.random())];
				d.timeHorarioProgramado = d.horarioProgramado.getTime();
				d.situacao				= situacao[Math.floor(situacao.length * Math.random())];

				allData.push(d);
			}

			return allData;
		}

		return service;
        
    });

})();