(function () {
'use strict';

angular.module('MenuApp')
.component('menuList', {
  templateUrl: 'src/menuApp/templates/menulist.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
