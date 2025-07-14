const arr = [1, 2, 3, 4, 5];
arr.forEach((val, ind, arr) => {
    if (val % 2 === 0) {
        return arr[ind] = val / 2;
    }
});
console.log(arr);

//chapGPT questions for practising forEach and map
//1

const fruits = ["apple", "banana", "mango"];


fruits.forEach((val) => {
    console.log('fruits: ' + val);
});


//2

const num2 = [5, 10, 15];

let sum = 0;
num2.forEach((val) => {
    sum += val;
});
console.log(sum);

//3
const animals = ["Tiger", "Elephant", "Zebra"];

const ter = animals.map((va) => {
    return va[0];
});
console.log(ter);

//4

const names = ["alice", "bob", "charlie"];

const res = names.map((x) => {
    return x.toUpperCase();
});
console.log(res);

//5

const cities = ["Delhi", "Tokyo", "New York"];
cities.forEach((val, ind) => {
    console.log('index ' + ind + ":" + val);
})

//6

const arr3 = [3, 6, 2, 9, 12, 5];
let count = 0;
arr3.forEach((val) => {
    if (val % 2 === 0) {
        count++;
    }

});
console.log(count);

//7

const sqr = [1, 2, 3, 4];
const res2 = [];
sqr.forEach((val) => {
    res2.push(val ** 2);

});
console.log(res2);

//8

const arr4 = ["apple", "banana", "kiwi"];
let sum2 = 0;
arr4.forEach((val) => {
    sum2 += val.length;
});
console.log(sum2);

//9

const arr7 = ["john", "mary", "susan"];
let rw = [];
arr7.forEach((val) => {
    const res = val[0].toUpperCase() + val.slice(1);
    rw.push(res)
});

console.log(rw);

