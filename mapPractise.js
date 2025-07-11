const aarr = [1, 2, 3, 4, 5, 6];
const tr = aarr.filter(d => d % 2 === 0);

const de = tr.map((val) => {
    return val ** 2;
})
console.log(de);

//2

const user = [
    { id: 1, name: "john", age: 32 },
    { id: 2, name: "maanu", age: 29 },
    { id: 3, name: "hyder", age: 40 }
];

const ne = user.map((elm) => {

    return elm.name;
});
console.log(ne);

//3

const products = [
    { title: "pen", price: 20 },
    { title: "pencil", price: 10 },
    { title: "lotion", price: 110 },
    { title: "bed", price: 9000 }
];

const cart = products.filter(pre => pre.price < 100);
console.log(cart);

//4
const students = [
    { name: "ravi", marks: 70 },
    { name: "meena", marks: 45 },
    { name: "john", marks: 85 },
    { name: "anil", marks: 30 }
];

const srr = [];
const her = students.map((ko) => {
    if (ko.marks >= 50) {
        ko.name.toUpperCase();
        srr.push(ko.name);
    }
});
console.log(srr);

// var addBinary = function (a, b) {
//     return a + b;
// };

// console.log(addBinary('1010', '1011'));

const joli = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// const dup = (parseInt(joli.join('')) + 1).toString().split('').map(Number);
// console.log(dup);

const man = BigInt(joli.join(''));
const il = man + 1n;
const just = il.toString();
const try1 = just.split('').map(Number);



console.log(try1);

// var plusOne = function (digits) {
//     const change = parseInt(digits.join(''));
//     const res = change + 1;
//     const str = res.toString();
//     const spl = str.split('');

//     return spl;

// };

// console.log(plusOne([1, 2, 3]));