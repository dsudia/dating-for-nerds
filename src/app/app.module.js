(function() {

  'use strict';

  angular.module('gDating', ['ui.router', 'angular-refills']);

  angular.module('gDating').config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('landing', {
        url: '/',
        template: '<landing></landing>'
      });
  });

})();

