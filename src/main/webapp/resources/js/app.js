var classifyApp = angular.module('classifyApp', [ 'ui.router', 'ngResource','ngSanitize',
		'classifyApp.controllers', 'classifyApp.services' ]);

classifyApp.config(function($stateProvider) {
	$stateProvider.state('users', { // state for showing all users
		url : '/users',
		templateUrl : 'partials/users.html',
		controller : 'UserListController'
	}).state('viewUser', { // state for showing single user
		url : '/users/:id/view',
		templateUrl : 'partials/user-view.html',
		controller : 'UserViewController'
	}).state('newUser', { // state for adding a new user
		url : '/users/new',
		templateUrl : 'partials/user-add.html',
		controller : 'UserCreateController'
	}).state('editUser', { // state for updating a user
		url : '/users/:id/edit',
		templateUrl : 'partials/user-edit.html',
		controller : 'UserEditController'
	}).state('ads', { // state for showing all ads
		url : '/ads',
		templateUrl : 'partials/ads.html',
		controller : 'AdListController'
	}).state('viewAd', { // state for showing single user
		url : '/ads/:id/view',
		templateUrl : 'partials/ad-view.html',
		controller : 'AdViewController'
	}).state('newAd', { // state for adding a new ad
		url : '/ads/new',
		templateUrl : 'partials/ad-add.html',
		controller : 'AdCreateController'
	}).state('editAd', { // state for updating a user
		url : '/ads/:id/edit',
		templateUrl : 'partials/ad-edit.html',
		controller : 'AdEditController'
	});
}).run(function($state) {
	$state.go('ads'); // make a transition to users state when app starts
});
