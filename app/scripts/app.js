
'use strict';

/**
 * @ngdoc overview
 * @name tempApp
 * @description
 * # tempApp
 *
 * Main module of the application.
 */
angular
  .module('hackathonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/yeo-page', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/route-management', {
        templateUrl: 'views/route-management.html',
        controller: 'RouteManagementCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/dashboard-dat', {
        templateUrl: 'views/dashboard-dat.html',
        controller: 'DashboardDatCtrl'
      })
      .when('/know-how', {
        templateUrl: 'views/know-how.html',
        controller: 'KnowHowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($mdIconProvider){
    $mdIconProvider
       .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  });
