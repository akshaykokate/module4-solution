(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', 'item'];
	function ItemDetailController($stateParams, item) {		
	  var itemDetail = this;
	  var subitem = item[$stateParams.itemId];
	  itemDetail.id =subitem.id;
	  itemDetail.short_name =subitem.short_name;
	  itemDetail.name =subitem.name;
	  itemDetail.description =subitem.description;
	  itemDetail.large_portion_name =subitem.large_portion_name;
	  itemDetail.small_portion_name =subitem.small_portion_name;
	  itemDetail.price_large =subitem.price_large;
	  itemDetail.price_small =subitem.price_small;
	}
})();
