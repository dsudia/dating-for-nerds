(function() {

  'use strict';

  angular.module('gDating').directive('browse', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/browse/browse.view.html',
      controller: function($scope, memberRequests) {
        memberRequests.getAllMembers()
          .then((data) => {
            $scope.profiles = data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  });

})();
