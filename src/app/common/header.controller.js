(function() {
  
  'use strict';

  angular.module('gDating').controller('headerCtrl', headerCtrl);

  headerCtrl.$inject = ['$rootScope', '$scope', '$state', 'authService'];

  function headerCtrl($rootScope, $scope, $state, authService) {
    
    $rootScope.currentUser = authService.getUserInfo();
    $rootScope.currentUser = JSON.parse($rootScope.currentUser);

    $scope.logout = function() {
      authService.logout();
      $rootScope.currentUser = null;
      $state.go('browse');
    }
  }
  
})();