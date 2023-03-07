export {}

let message = "welcome"
// console.log(message);

let x = 10
const y = 20

let sum
const title = "title"

let isBeginner: boolean = true
let total: number = 23
let name: string = "yashu"
let sentence: string = `My name is ${name}`

// console.log(sentence);

let m: null = null
let u: undefined = undefined

// let isNew: boolean = null
// console.log(isNew);

let list1: number[] = [1,2,3,4]
let list2: Array<number> = [1,2,3,4,5,6]

let person1: [string, number, number, string] = ['chris', 22, 54, 'string']

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Green
// console.log(c);

let randomValue: any = 10
randomValue = "yashu"
randomValue = true

let Variable: unknown = 23;

function hasName(obj: any): obj is { name: string} {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(Variable)) {
    console.log(Variable.name);
    
}

//type assertion
// (Variable as string).toUpperCase()

let a;
a = 10;
a = true;

let b = 20;
// b = true;

let multiType: number | boolean | string;
multiType = true
multiType = 30
multiType = "yashu"

function add(num1: number, num2?: number, num3: number = 10): number{
    if(num2) return num1 + num2 + num3;
    else return num1 + num3;
}

add(5,10);
add(5);

interface Person {
    firstName: string,
    lastName?: string
}

function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'wayne'
}

fullName(p)

class Employee {
    employeeName: string

    constructor(name: string) {
        this.employeeName = name
    }

    greet() {
        console.log(`Good morning ${this.employeeName}`);
        
    }
}

let emp1 = new Employee('Yashu')

console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    deligateWork() {
        console.log(`Manager deligating tasks ${this.employeeName}`);
        
    }
}

let m1 = new Manager('Bruce')
m1.deligateWork();
m1.greet();
console.log(m1.employeeName);
