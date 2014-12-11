// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

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

            // Base Views

            .state('home', {
                abstract: true,
                templateUrl: 'home.html',
                controller: 'MainCtrl'
            })

            .state('home.deals', {
                url: '/deals',
                views: {
                    'menuContent': {
                        templateUrl: 'deals.html',
                        controller: 'DealsCtrl'
                    }
                }

            })
            .state('home.maps', {
                url: '/maps',
                views: {
                    'menuContent': {
                        templateUrl: 'maps.html',
                        controller: 'MapsCtrl'
                    }
                }
            })
        
            .state('home.deal', {
                url: '/deals/:dealId',
                views: {
                        'menuContent': {
                            templateUrl: 'deal.html',
                            controller:'DealCtrl'
                        }
                    }
            })
        
            .state('home.map', {
                url: '/maps/:mapCt',
                views: {
                    'menuContent': {
                        templateUrl: 'category.html',
                        controller:'CatCtrl'
                    }
                }
            })
        
        .state('home.coupons', {
                url: '/coupons',
                views: {
                    'menuContent': {
                        templateUrl: 'coupons.html',
                        controller:'CouponsCtrl'
                    }
                }
            })
        .state('home.coupon', {
                url: '/coupon/:dealCode',
                views: {
                    'menuContent': {
                        templateUrl: 'coupon.html',
                        controller:'CouponCtrl'
                    }
                }
            })
        .state('home.stores', {
                url: '/stores',
                views: {
                    'menuContent': {
                        templateUrl: 'stores.html',
                        controller:'StoresCtrl'
                    }
                }
            })

        .state('home.promos', {
                url: '/promos',
                views: {
                    'menuContent': {
                        templateUrl: 'promos.html',
                        controller:'PromosCtrl'
                    }
                }
            })
        
        .state('home.dashboard', {
                url: '/dashboard',
                views: {
                    'menuContent': {
                        templateUrl: 'dashboard.html',
                        controller:'DashCtrl'
                    }
                }
            })
        
        .state('home.account', {
                url: '/account',
                views: {
                    'menuContent': {
                        templateUrl: 'acct.html',
                        controller:'AcctCtrl'
                    }
                }
            })
   ;         //PARAM ROUTES





        $urlRouterProvider.otherwise("/deals");
    })




;