(function() {

  'use strict';

  angular.module('gDating', ['ui.router', 'angular-refills']);

  angular.module('gDating').config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('landing', {
        url: '/home',
        template: '<landing></landing>'
      })
      .state('landing.login', {
        url:'/login',
        template: '<login></login>'
      });
  });

})();

