(function() {

  'use strict';

  angular.module('gDating').directive('oneProfile', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/browse/oneProfile.view.html',
      controller: function($rootScope, $scope, $stateParams) {
        console.log($stateParams.user);
        $scope.slug = $stateParams.user;
      }
    }
  });

})();