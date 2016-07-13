// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

      .state('prelogin', {
          url: "/prelogin",
          abstract: true,
          templateUrl: "templates/prelogin.html",
          controller: 'AccountCtrl'
      })

      .state('prelogin.home', {
          url: "/home",
          views: {
              'prelogin': {
                  templateUrl: "js/account/templates/home.html",
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('prelogin.login', {
          url: "/login",
          views: {
              'prelogin': {
                  templateUrl: "js/account/templates/login.html",
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('prelogin.change-password', {
          url: '/change-password',
          views: {
              'prelogin': {
                  templateUrl: 'js/account/templates/change-password.html',
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('prelogin.forgot-password', {
          url: "/forgot-password",
          views: {
              'prelogin': {
                  templateUrl: "js/account/templates/forgot-password.html",
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('prelogin.register', {
          url: "/register",
          views: {
              'prelogin': {
                  templateUrl: "js/account/templates/register.html",
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('prelogin.registersteps', {
          url: "/registersteps",
          views: {
              'prelogin': {
                  templateUrl: "js/account/templates/register-steps.html",
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('prelogin.newmsg', {
          url: "/new-message",
          views: {
              'prelogin': {
                  templateUrl: "js/account/templates/message.html",
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('prelogin.orderjob', {
          url: "/orderjob",
          views: {
              'prelogin': {
                  templateUrl: "js/account/templates/order-job.html",
                  controller: 'AccountCtrl'
              }
          }
      })
      
      .state('tab.service-search', {
          url: '/service-search',
          views: {
              'tab-dash': {
                  templateUrl: 'js/list/templates/service-search.html',
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('tab.list', {
          url: '/list',
          views: {
              'tab-dash': {
                  templateUrl: 'js/list/templates/list.html',
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('tab.menu', {
          url: '/menu',
          views: {
              'tab-dash': {
                  templateUrl: 'js/account/templates/menu.html',
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('tab.my-services', {
          url: '/my-services',
          views: {
              'tab-dash': {
                  templateUrl: 'js/account/templates/my-services.html',
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('tab.my-bookings', {
          url: '/my-bookings',
          views: {
              'tab-dash': {
                  templateUrl: 'js/account/templates/my-bookings.html',
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('tab.service-detail', {
          url: '/service-detail',
          views: {
              'tab-dash': {
                  templateUrl: 'js/account/templates/service-detail.html',
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('tab.my-schedule', {
          url: '/my-schedule',
          views: {
              'tab-dash': {
                  templateUrl: 'js/account/templates/my-schedule.html',
                  controller: 'AccountCtrl'
              }
          }
      })

      .state('tab.manage-schedule', {
          url: '/manage-schedule',
          views: {
              'tab-dash': {
                  templateUrl: 'js/account/templates/manage-schedule.html',
                  controller: 'AccountCtrl'
              }
          }
      })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

})
    .filter('htmlEncode', function(){
        return function(html) {
            if(html == undefined){
                return "";
            }

            return html.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/:/g, "%3A");
        }
    });
