'use strict';

/**
 * @ngdoc overview
 * @name angularNewsApp
 * @description
 * # angularNewsApp
 *
 * Main module of the application.
 */
var app = angular.module('angularNewsApp', [
              'ngAnimate',
              'ngCookies',
              'ngResource',
              'ngRoute',
              'ngSanitize',
              'ngTouch',
              'firebase'
            ]);
app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/posts', {
          templateUrl: 'views/posts.html',
          controller: 'PostsCtrl'
        })
        .when('/post/:postId', {
          templateUrl: 'views/showpost.html',
          controller: 'PostViewCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

app.constant('FIREBASE_URL', 'https://luminous-fire-8835.firebaseio.com/');
