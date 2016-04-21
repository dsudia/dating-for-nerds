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
     },

     getAllMembers: function() {
       var config = {
         headers: {
           'Accept': 'application/json'
         }
       };
       return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members', config)
         .then(function(profiles) {
           return profiles.data.data;
         })
         .catch(function(err) {
           console.log(err);
         });
     },

     getOneProfile: function($window, slug) {
       var data = JSON.parse($window.localStorage.getItem('profiles'));
       return data.filter((el) => {
         return el.slug === slug;
       });
     }
   }
  }

})();
