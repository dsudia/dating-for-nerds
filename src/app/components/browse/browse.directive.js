(function() {

  'use strict';

  angular.module('gDating').directive('browse', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/browse/browse.view.html',
      controller: function($rootScope, $scope, memberRequests) {
        memberRequests.getAllMembers()
          .then((data) => {
            $rootScope.profiles = data;
          })
          .catch((err) => {
            console.log(err);
          });

        $scope.sort = 'username';
      }


    }
  });

})();
