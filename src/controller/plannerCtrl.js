(function(){
	'use strict';
	angular.module("plannerApp").controller("plannerCtrl",[
		'$rootScope',
		'$scope',
		PlannerCtrl
	]);

	function PlannerCtrl($rootScope, $scope){
		this.rootScope = $rootScope;
		this.scope = $scope;

		this.expenseList = [];

		//initialise expenseList
		this.expenseList.push(this._createExpenseObj());
	}

	PlannerCtrl.prototype = {
		get title(){
			return "Planner";
		},

		addExpense: function(){			
			if(this.expenseList && this.expenseList.length < 5){
				this.expenseList.push(this._createExpenseObj());
			}
		},

		saveExpense: function(){
			console.log(angular.toJson(this.expenseList));
			this.savedJson = angular.toJson(this.expenseList);
		},

		_createExpenseObj: function(){
			var expense = [
				{"day":"Monday", "expense":""},
				{"day":"Tuseday", "expense":""},
				{"day":"Wednesday", "expense":""},
				{"day":"Thurseday", "expense":""},
				{"day":"Friday", "expense":""},
				{"day":"Saturday", "expense":""},
				{"day":"Sunday", "expense":""}
			];
			return expense;
		}
	}

})();