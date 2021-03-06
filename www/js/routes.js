angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.social', {
      url: '/social',
      views: {
        'tab-social': {
          templateUrl: 'templates/tab-social.html',
          controller: 'SocialCtrl'
        }
      }
    })

    .state('tab.socialDetail', {
      url: '/social/:aId',
      cache: false,
      views: {
        'tab-social': {
          templateUrl: 'templates/profile/social-sub.html',
          controller: 'SocialSubPageCtrl'
        }
      }
    })

    .state('tab.cart', {
      url: '/cart/:aId',
      cache: false,
      views: {
        'tab-cart': {
          templateUrl: 'templates/tab-cart.html',
          controller: 'CartCtrl'
        }
      }
    })

    .state('tab.chat', {
      url: '/chat',
      cache: false,
      views: {
        'tab-chat': {
          templateUrl: 'templates/tab-chat.html',
          controller: 'ChatCtrl'
        }
      }
    })

    // 更改所购买产品颜色/数量等参数页面
    .state('tab.cartEdit', {
      url: '/cartEdit/:aId',
      cache: false,
      views: {
        'tab-cart': {
          templateUrl: 'templates/cart/cart-edit.html',
          controller: 'CartEditCtrl'
        }
      }
    })

    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    // 登录页面
    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login/login.html',
      controller: 'LoginCtrl'
    })

    // 注册页面
    .state('signup', {
      url: '/page2',
      templateUrl: 'templates/login/signup.html',
      controller: 'SignUpCtrl'
    })

    // DELIVERY页面
    .state('tab.delivery', {
      url: '/pageDelivery',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash/delivery.html',
          controller: 'DeliveryCtrl'
        }
      }
    })

    // ABOUT页面
    .state('tab.about',{
      url: '/pageAbout',
      views:{
        'tab-dash':{
          templateUrl:'templates/dash/about.html',
          controller:'AboutCtrl'
        }
      }
    })

    // CONTACT页面
    .state('tab.contact',{
      url: '/pageContact',
      views:{
        'tab-dash':{
          templateUrl:'templates/dash/contact.html',
          controller:'ContactCtrl'
        }
      }
    })

    // list页面
    .state('tab.list',{
      url: '/pageList/:aId',
      views:{
        'tab-dash':{
          templateUrl:'templates/list/list.html',
          controller:'ListCtrl'
        }
      }
    })

    // LIST详细页面
    .state('tab.detail',{
      url: '/pageDetail/:aId/:pName/:pPrice',
      views:{
        'tab-dash':{
          templateUrl:'templates/list/list-details.html',
          controller:'ListDetailCtrl'
        }
      }
    });

  // 默认页面
  $urlRouterProvider.otherwise('/page1');

});
