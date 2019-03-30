angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('brawlhallaWeapons', {
    url: '/page1',
    templateUrl: 'templates/brawlhallaWeapons.html',
    controller: 'brawlhallaWeaponsCtrl'
  })

  .state('scythe', {
    url: '/page2',
    templateUrl: 'templates/scythe.html',
    controller: 'scytheCtrl'
  })

  .state('blasters', {
    url: '/page3',
    templateUrl: 'templates/blasters.html',
    controller: 'blastersCtrl'
  })

  .state('gauntlents', {
    url: '/page4',
    templateUrl: 'templates/gauntlents.html',
    controller: 'gauntlentsCtrl'
  })

  .state('aboutBrawlhalla', {
    url: '/page5',
    templateUrl: 'templates/aboutBrawlhalla.html',
    controller: 'aboutBrawlhallaCtrl'
  })

  .state('sliderAboutBrawlhalla', {
    url: '/page6',
    templateUrl: 'templates/sliderAboutBrawlhalla.html',
    controller: 'sliderAboutBrawlhallaCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});