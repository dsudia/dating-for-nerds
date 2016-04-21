(function() {

  'use strict';

  angular.module('gDating').directive('myProfile', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/myProfile/myProfile.view.html',
      controller: function($rootScope, $scope) {
        console.log($rootScope.currentUser);
      }
    }
  });

})();