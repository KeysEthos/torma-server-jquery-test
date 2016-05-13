// public/js/services/nerdService.js

  angular.module('nerdService', []).factory('nerd', ['$http', function($http) {

    return {
    // call to get all "nerds"
    get : function() {
            return $http.get('/api/nerds');
        },

    // this section will become heavely used when more API calls are necessary

    // call to POST and create a new "nerd"
    create : function(nerdData) {
            return $http.post('/api/nerds', nerdData);
        },

    // call to DELETE a "nerd"
    delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        }
    }       

}]);  //End angular.module $http call
