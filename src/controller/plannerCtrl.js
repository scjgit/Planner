(function(){
	'use strict';
	angular.module("plannerApp")
	.controller("plannerCtrl",[
		PlannerCtrl
	]);

	function PlannerCtrl(){

		this.expenseList = [];

		//initialise expenseList
		this.expenseList.push(this._createExpenseObj());
		this.isShowConsolePanel = false;
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
			this.isShowConsolePanel = true;
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