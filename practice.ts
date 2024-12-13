// tsc practice.ts    --> run
// tsc practice.ts -w     --> convert to app.js
// tsc --target ES6 practice.ts 

console.log("first step typescript");

// ---------- DataTypes   ------------------

let num: number = 3;

let str: string = "3";

let bool: boolean = true;

let arr: number[] = [2, 1];
arr.push(4);

let arr1: (number | string)[] = [2, 1, "as"];

let arr00: number | string[] = 32;                     //  ✅
let arr01: number | string[] = ['as', "as"];          //  ✅
// let arr02: number | string[] = [32, 'as', "as"];     //  ❌

// let arr10: number | string | boolean[] = true;           //  ❌
let arr11: number | string | boolean[] = 'true';         //  ✅
let arr12: number | string | boolean[] = 43;             //  ✅
let arr13: number | string | boolean[] = [false ,true];  //  ✅


let ARR: number | string | boolean[] = [true];      //  ✅

let arrOfArr: string[][] = [["as"],['']];

let anyVar: any = 5;
anyVar = "as";
anyVar = true;
anyVar = [1, 2, 3];
anyVar = {name: "as", age: 25};
anyVar = null;
anyVar = undefined;
anyVar = function () {}

let funcArray: (() => void)[] = [];

function callFunc():number {
    console.log("called Func");
    return 5;
}
callFunc();
let a: number = callFunc() + 5;


//   ---------   ENUM    ------------------

enum Color { red='red', green=3, blue='blue' };
let d: Color = Color.red;

enum dash { admin, user};


//   ---------   GENERIC <T>    ------------------

function callFunction<T>(value: T): T {
  console.log("inside Func");
  return value;
}
let e: number = callFunction<number>(5) + 5;
let f: string = callFunction<string>("10") + 5;



//   ---------   interface     ------------------

interface IPerson {
    name: string;
    age: number;
    sayNow();
}

interface IBag {
    name: string;
    price: number;
    color: string;
}

const user:IPerson = {
    name: "",
    age: 0,
    sayNow: function () {
        throw new Error("Function not implemented.");
    }
}


//   ---------   class     ------------------

class Human { 
    
}

class Person extends Human{
    private name: string;
    private age: number;

    static data = 'data';

    constructor(name: string, age: number) {
        super();
        this.name = name;
        this.age = age;

        Person.data
    }

    greet(): void{
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}

const newUser = new Person('mido' , 11);

