
let sales: number = 100000;
let course: string = 'AI engineer';
let success: boolean = true;
let level;

function get_doc(documents){ // any type, set the 'noImplicitAny' to false to allow this
    console.log(documents)
}

console.log(sales,course,success,level)
get_doc("Doc1")

//------------------------------

//Arrays

let nums:number[] = []
nums[0] = 2
nums[1] = 3

//Tuples
//Keeps the types and order of elements fixed, limited number of elements to key value pairs
let user:[number, string] = [1,'User1']
console.log(user[0])


//------------------------------
//Enums

enum Sizes { Small=1, Medium, Large }
let mySize: Sizes = Sizes.Medium
console.log(mySize) 

const enum Sizes2 { Small=1, Medium, Large }
let mySize2: Sizes2 = Sizes2.Medium
console.log(mySize2) 

//------------------------------
//Functions 

function tax(sal:number,taxYear?:number): number { // '?' makes the parameter optional
//function tax(sal:number,taxYear:number=2022): number { // default value for taxYear is 2022
    if (sal > 12_000) {
        return sal*0.5;
    }
    if ((taxYear||2022) == 1) { // default value for taxYear is 2022 if not provided
        return sal*0.2; 
    }
    return sal*0.3;
}

console.log(tax(15_000,1))
console.log(tax(8_000)) // taxYear is optional

//------------------------------
//Objects

let employee: { readonly id:number, name:string} = {id:11,name:'John'};

console.log(employee.id)

let employee2: { id:number, name:string, retire:(date:Date)=>void } = {
    id:12,
    name:'Mary',
    retire: (date:Date) => { //Function as a property of an object
        console.log(date)
    }
}
employee2.retire(new Date())

//problem with above approach is that we have to repeat the structure for every object
//solution is to use 'type' or 'interface'

//------------------------------
//Advanced Types

//1.Type Aliases or Custom Types
//Using 'type' to define a custom type
type Employee = { readonly id:number, name:string, retire:(date:Date)=> void } 

let employee3:Employee = {
    id:23,name:'john',retire: (date:Date) => { console.log(date); }
}

employee3.retire(new Date('03/23/2021'))


//2.Union Types

function convert(weight:string | number ): number { // weight can be string or number
    if (typeof weight === 'number'){    //narrowing: check the type of weight
        return weight;
    }
    else{
        return (parseInt(weight))
    }
}
convert('10kg')
convert(10)

//3.Intersection Types

type Draggable = { drag: () => void};

type Resizable = { resize: () => void};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = { drag: ()=>{},
                          resize: ()=>{} };

console.log(textBox); 

//4.Literal Types

let quantity: 50; // quantity can only be 50
quantity = 50;
//quantity = 100; // Error

let quantity2: '50' | '100'; // quantity2 can be either '50' or '100'
quantity2 = '50';
quantity2 = '100';
//quantity2 = '200'; // Error

type Quantity = 50 | 100;
let quantity3: Quantity = 100;
quantity3 = 50;
//quantity3 = 200; // Error
console.log(quantity3, quantity2, quantity);
//5.Nullable Types

function greet(name:string): void {
    console.log(`Hello ,${name.toUpperCase()}!!`)
}
// greet(null); // Error
greet('John');

function greet2(name:string | null | undefined): void {

    if (name) {
        console.log(`Hello ,${name.toUpperCase()}!!`)
    } else {
        console.log('Hello!!')
    }
}

greet2(null);
greet2(undefined);
greet2('John');
greet2(''); // empty string is treated as valid string

//------------------------------
//Optional Chaining and Nullish Coalescing

type Customer = { birthday:Date };

function getCustomer(id:number): Customer | null | undefined {

    return id === 0? null : {birthday:new Date()};
}

let cust = getCustomer(0)
if  (cust !== null && cust !== undefined){
    console.log(cust.birthday);
}

//Using Optional Chaining: checks for null or undefined before accessing property
console.log(cust?.birthday);
console.log(cust?.birthday.getFullYear());
//Using Nullish Coalescing: provides a default value if the left side is null or undefined

let birthday = cust?.birthday.getFullYear() ?? 'No birthday available';
console.log(birthday);

//------------------------------
//Type Assertions
let phone = document.getElementById('phone') as HTMLInputElement;
phone.value = '123-456-7890';

//or
let phone2 = <HTMLInputElement> document.getElementById('phone2');
phone2.value = '987-654-3210';
//------------------------------
//Never Type
function processEvents(): never {
    while (true) {
        // process events
    }
}
//processEvents(); // Uncommenting this will cause an infinite loop
//------------------------------
//Type Inference
let inferredString = 'This is a string'; // inferred as string
//inferredString = 10; // Error
console.log(inferredString);
let inferredNumber = 20; // inferred as number
//inferredNumber = 'Hello'; // Error
console.log(inferredNumber);

processEvents();
//------------------------------





