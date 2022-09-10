(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$q', '$timeout','$http', 'ApiBasePath']
function MenuDataService($q, $timeout,$http,ApiBasePath) {
  var service = this;
  var items = null;
  var item = null;

  service.getAllCategories = function () {
      var deferred = $q.defer();
    	var response = $http({
          method: "GET",
          url: (ApiBasePath + "/categories.json")
        });
        response.then(function(response){
          items = response.data;
          console.log(items);
        });

        $timeout(function () {
          deferred.resolve(items);
        }, 1000);

        return deferred.promise;
    };

  service.getItemsForCategory = function (categoryShortName) {
    	var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
          params: {
            category: categoryShortName
          }
        });
        response.then(function(response){
          item = response.data.menu_items;
        });
        var deferred = $q.defer();
        $timeout(function () {
          deferred.resolve(item);
        }, 1000);

        return deferred.promise;
    };
}

})();
