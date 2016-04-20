(function() {

  'use strict';

  angular.module('gDating', ['ui.router', 'angular-refills']);

  angular.module('gDating').config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('landing', {
        url: '/home',
        template: '<landing></landing>',
        authenticate: true
      })
      .state('landing.login', {
        url:'/login',
        template: '<login></login>',
        authenticate: false
      })
      .state('browse', {
        url: '/browse',
        template: '<browse></browse>',
        authenticate: true
      });
  });

})();

