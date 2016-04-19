(function() {

  'use strict';

  angular.module('gDating').directive('landing', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/landing/landing.view.html',
      controller: function($scope, memberRequests) {
        memberRequests.getThreeMembers()
          .then((data) => {
            $scope.users = data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  });

})();
