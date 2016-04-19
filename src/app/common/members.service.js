(function() {

  'use strict';

  angular.module('gDating').service('memberRequests', memberRequests);

  function memberRequests($http) {
   return {
     getThreeMembers: function() {
       return $http({
         method: 'GET',
         url: 'https://galvanize-student-apis.herokuapp.com/gdating/members?limit=3'
       })
         .then(function(data) {
           return data.data.data;
         })
         .catch(function(err) {
           console.log(err);
         });
     }
   }
  }

})();
