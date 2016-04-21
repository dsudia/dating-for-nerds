(function() {

  'use strict';

  angular.module('gDating').directive('oneProfile', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/oneProfile/oneProfile.view.html',
      controller: function($rootScope, $scope, $stateParams, $window, memberRequests) {
        console.log($stateParams.user);
        var slug = $stateParams.user;
        $scope.profile = memberRequests.getOneProfile($window, slug)[0];
        console.log($scope.profile);
      }
    }
  });

})();