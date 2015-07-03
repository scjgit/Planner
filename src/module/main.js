(function(){
	'use strict';
	angular.module("plannerApp",['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/addExpense',{
			templateUrl: 'src/views/planner.html',
			controller: 'plannerCtrl',
			controllerAs : 'vmPlannerCtrl'
		}).otherwise({
        	redirectTo: '/addExpense'
      	});
	}]);;
})();