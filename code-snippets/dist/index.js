"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sales = 100000;
let course = 'AI engineer';
let success = true;
let level;
function get_doc(documents) {
    console.log(documents);
}
console.log(sales, course, success, level);
get_doc("Doc1");
let nums = [];
nums[0] = 2;
nums[1] = 3;
let user = [1, 'User1'];
console.log(user[0]);
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 1] = "Small";
    Sizes[Sizes["Medium"] = 2] = "Medium";
    Sizes[Sizes["Large"] = 3] = "Large";
})(Sizes || (Sizes = {}));
let mySize = Sizes.Medium;
console.log(mySize);
var Sizes2;
(function (Sizes2) {
    Sizes2[Sizes2["Small"] = 1] = "Small";
    Sizes2[Sizes2["Medium"] = 2] = "Medium";
    Sizes2[Sizes2["Large"] = 3] = "Large";
})(Sizes2 || (Sizes2 = {}));
let mySize2 = Sizes2.Medium;
console.log(mySize2);
function tax(sal, taxYear) {
    if (sal > 12_000) {
        return sal * 0.5;
    }
    if ((taxYear || 2022) == 1) {
        return sal * 0.2;
    }
    return sal * 0.3;
}
console.log(tax(15_000, 1));
console.log(tax(8_000));
let employee = { id: 11, name: 'John' };
console.log(employee.id);
let employee2 = {
    id: 12,
    name: 'Mary',
    retire: (date) => {
        console.log(date);
    }
};
employee2.retire(new Date());
let employee3 = {
    id: 23, name: 'john', retire: (date) => { console.log(date); }
};
employee3.retire(new Date('03/23/2021'));
function convert(weight) {
    if (typeof weight === 'number') {
        return weight;
    }
    else {
        return (parseInt(weight));
    }
}
convert('10kg');
convert(10);
let textBox = { drag: () => { },
    resize: () => { } };
console.log(textBox);
let quantity;
quantity = 50;
let quantity2;
quantity2 = '50';
quantity2 = '100';
let quantity3 = 100;
quantity3 = 50;
console.log(quantity3, quantity2, quantity);
function greet(name) {
    console.log(`Hello ,${name.toUpperCase()}!!`);
}
greet('John');
function greet2(name) {
    if (name) {
        console.log(`Hello ,${name.toUpperCase()}!!`);
    }
    else {
        console.log('Hello!!');
    }
}
greet2(null);
greet2(undefined);
greet2('John');
greet2('');
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let cust = getCustomer(0);
if (cust !== null && cust !== undefined) {
    console.log(cust.birthday);
}
console.log(cust?.birthday);
console.log(cust?.birthday.getFullYear());
let birthday = cust?.birthday.getFullYear() ?? 'No birthday available';
console.log(birthday);
let phone = document.getElementById('phone');
phone.value = '123-456-7890';
let phone2 = document.getElementById('phone2');
phone2.value = '987-654-3210';
function processEvents() {
    while (true) {
    }
}
let inferredString = 'This is a string';
console.log(inferredString);
let inferredNumber = 20;
console.log(inferredNumber);
processEvents();
//# sourceMappingURL=index.js.map