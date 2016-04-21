(function() {

  'use strict';

  angular.module('gDating').directive('oneProfile', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/oneProfile/oneProfile.view.html',
      controller: function($rootScope, $scope, $stateParams) {
        console.log($stateParams.user);
        $scope.slug = $stateParams.user;
      }
    }
  });

})();