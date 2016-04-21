(function() {

  'use strict';

  angular.module('gDating').directive('browse', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/browse/browse.view.html',
      controller: function($rootScope, $scope, memberRequests, $window) {
        if (!$window.localStorage.hasOwnProperty('profiles')) {
          memberRequests.getAllMembers()
            .then((data) => {
              return $window.localStorage.setItem('profiles', JSON.stringify(data));
            })
            .then(() => {
              $scope.profiles = JSON.parse($window.localStorage.getItem('profiles'));
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          $scope.profiles = JSON.parse($window.localStorage.getItem('profiles'));
        }
        $scope.sort = 'username';
      }
    }
  });

})();
