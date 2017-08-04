
//This file initializes the SKY Bet Contact List angular app.
(function() {
  'use strict';

  angular.module('skybet', [
    'ui.router'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();
