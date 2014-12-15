// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($urlRouterProvider, $stateProvider) {

      $stateProvider

          .state('base', {
             abstract: true,
             templateUrl: 'main.html',
            controller: 'MainController as main'
          })
          .state('base.tabs',{
              url: '/',
              views: {
                  'menuContent' : {
                  templateUrl: 'tabs.html',
                  controller: 'TabsController as tabs'

                  }
              }
          })
          .state('base.page', {
              url: '/page',
              views: {
                  'menuContent': {
                      templateUrl: 'page.html',
                      controller: 'PageController as page'
                  }
              }
          })

    })

.controller('MainController', function () {
      var ctrl = this;
      ctrl.person = {};
      ctrl.person.name = "Tom";
      ctrl.person.gender = "male";
    })

.controller('TabsController', function () {
      var ctrl = this;
      ctrl.person = {};
      ctrl.person.name = "Tom";
      ctrl.person.gender = "male";
    })

.controller('PageController', function () {
      var ctrl = this;
      ctrl.person = {};
      ctrl.person.points = 3000;
      ctrl.person.active = 'soon';
    })
