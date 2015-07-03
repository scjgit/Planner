'use strict'
describe('Planner Controller', function() {

  var plannerCtrl;

  var expenseList = [];
  var test_expense = [
        {"day":"Monday", "expense":""},
        {"day":"Tuseday", "expense":""},
        {"day":"Wednesday", "expense":""},
        {"day":"Thurseday", "expense":""},
        {"day":"Friday", "expense":""},
        {"day":"Saturday", "expense":""},
        {"day":"Sunday", "expense":""}
      ];

  beforeEach(module('plannerApp'));

  beforeEach(function() {
      inject(function ($controller) {
          plannerCtrl = $controller('plannerCtrl');
      });
  });

  describe("expenseList on init", function() {
    it('expenseList should init with one element', function(){
        expect(plannerCtrl.expenseList.length).toBe(1);
    });

  });

  describe("_createExpenseObj method", function() {
    it('should return an week expense empty data.', function () {
        expect(function() {
            plannerCtrl._createExpenseObj();
        });
    });

    it('_createExpenseObj() method should return an item.', function () {
        expect(plannerCtrl._createExpenseObj()).toEqual(test_expense);
    });
  });

  describe("addExpense method", function() {
    it('should have a method addExpense().', function () {
        expect(function() {
            plannerCtrl.addExpense();
        });
    });
    it('addExpense() should add an element to expenseList.', function () {
        plannerCtrl.addExpense();
        expect(plannerCtrl.expenseList.length).toBeGreaterThan(1);
    });
  });

  
});