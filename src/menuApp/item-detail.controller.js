(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', 'MenuDataService','item'];
	function ItemDetailController($stateParams, MenuDataService,item) {
	  var itemDetail = this;
	  itemDetail.subitem = item;		 	  
	}
})();
