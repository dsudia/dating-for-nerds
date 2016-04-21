(function() {

  'use strict';

  angular.module('gDating').directive('search', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/search/search.view.html',
      controller: function($rootScope, $scope) {
        $scope.ages = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
        $rootScope.search = {};
      }
    }
  });
})();