/**
 * Created by Jones on 8/28/2016.
 */
angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
                                                            $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/index.html'
      });

    $urlRouterProvider.otherwise('/');
  }]);
