// tsc practice.ts    --> run
// tsc practice.ts -w     --> convert to app.js
// tsc --target ES6 practice.ts 
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
console.log("first step typescript");
// ---------- DataTypes   ------------------
var num = 3;
var str = "3";
var bool = true;
var arr = [2, 1];
arr.push(4);
var arr1 = [2, 1, "as"];
var arr00 = 32; //  ✅
var arr01 = ['as', "as"]; //  ✅
// let arr02: number | string[] = [32, 'as', "as"];     //  ❌
// let arr10: number | string | boolean[] = true;           //  ❌
var arr11 = 'true'; //  ✅
var arr12 = 43; //  ✅
var arr13 = [false, true]; //  ✅
var ARR = [true]; //  ✅
var arrOfArr = [["as"], ['']];
var anyVar = 5;
anyVar = "as";
anyVar = true;
anyVar = [1, 2, 3];
anyVar = { name: "as", age: 25 };
anyVar = null;
anyVar = undefined;
anyVar = function () { };
var funcArray = [];
function callFunc() {
    console.log("called Func");
    return 5;
}
callFunc();
var a = callFunc() + 5;
//   ---------   ENUM    ------------------
var Color;
(function (Color) {
    Color["red"] = "red";
    Color[Color["green"] = 3] = "green";
    Color["blue"] = "blue";
})(Color || (Color = {}));
;
var d = Color.red;
var dash;
(function (dash) {
    dash[dash["admin"] = 0] = "admin";
    dash[dash["user"] = 1] = "user";
})(dash || (dash = {}));
;
//   ---------   GENERIC <T>    ------------------
function callFunction(value) {
    console.log("inside Func");
    return value;
}
var e = callFunction(5) + 5;
var f = callFunction("10") + 5;
var user = {
    name: "",
    age: 0,
    sayNow: function () {
        throw new Error("Function not implemented.");
    }
};
//   ---------   class     ------------------
var Human = /** @class */ (function () {
    function Human() {
    }
    return Human;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        Person.data;
        return _this;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age));
    };
    Person.data = 'data';
    return Person;
}(Human));
var newUser = new Person('mido', 11);
