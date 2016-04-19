(function() {

  'use strict';

  angular.module('gDating').directive('login', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/login/login.view.html',
      controller: function($rootScope, $scope, $location, authService) {
        $scope.user = {};
        $scope.login = function() {
          authService.login($scope.user)
            .then(function(user) {
              authService.setUserInfo(user);
              $location.path('/');
              $rootScope.currentUser = authService.getUserInfo();
            })
            .catch(function(err) {
              // check status code, send appropriate message
              console.log(err);
            });
        };
      }
    }
  });

})();