(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppListController', MenuAppListController);


MenuAppListController.$inject = ['MenuDataService', 'items'];
function MenuAppListController(MenuDataService, items) {
  var mainList = this;
  mainList.items = items;
}

})();
