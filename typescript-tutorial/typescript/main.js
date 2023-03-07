"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "welcome";
// console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "title";
var isBeginner = true;
var total = 23;
var name = "yashu";
var sentence = "My name is ".concat(name);
// console.log(sentence);
var m = null;
var u = undefined;
// let isNew: boolean = null
// console.log(isNew);
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4, 5, 6];
var person1 = ['chris', 22, 54, 'string'];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
// console.log(c);
var randomValue = 10;
randomValue = "yashu";
randomValue = true;
var Variable = 23;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(Variable)) {
    console.log(Variable.name);
}
//type assertion
// (Variable as string).toUpperCase()
var a;
a = 10;
a = true;
var b = 20;
// b = true;
var multiType;
multiType = true;
multiType = 30;
multiType = "yashu";
function add(num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    if (num2)
        return num1 + num2 + num3;
    else
        return num1 + num3;
}
add(5, 10);
add(5);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Bruce',
    lastName: 'wayne'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Yashu');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.deligateWork = function () {
        console.log("Manager deligating tasks ".concat(this.employeeName));
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.deligateWork();
m1.greet();
console.log(m1.employeeName);
