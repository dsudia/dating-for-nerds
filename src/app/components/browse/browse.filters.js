(function() {

  'use strict';

  angular.module('gDating').filter('myMatches', popular);

  popular.$inject = ['$rootScope'];

  function popular($rootScope, input) {
    input._matches.filter((el, ind, arr) => {
      return el._id === $rootScope.currentUser._id;
    });
  }

})();