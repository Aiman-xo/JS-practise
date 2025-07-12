//understanding splice

const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];

cities.splice(1, 2); // first arguemetn takes the start of the items to be removed the second take how many items to be removed.

console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]


// exercise from mozilla to understand array
const products = ["Underpants:6.99", "Socks:5.99", "T-shirt:14.99", "Trousers:31.99",
    "Shoes:23.99",];

// Part 2
for (let x of products) {
    // Part 3
    const jibrish = x.split(':');
    const arr = [];
    arr.push(jibrish[0]);
    arr.push(Number(jibrish[1]));
    console.log(arr);
}

//understanding nested function
function myFun(a, b) {
    function sqr(c) {
        return c * c;
    }
    return sqr(a) + sqr(b);
}
console.log(myFun(4, 2));

//understanding call back function i guess
function myFun1(fun, arr) {
    const res = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        res[i] = fun(arr[i]);
    }
    return res;
}

console.log(myFun1((x) => {
    return x ** 2;
}, [2, 3, 4]));

//gpt questions to uderstand array "level:easy"
//1
const arr1 = [1, 2, 3, 4]
console.log(Array.isArray(arr1));
console.log(arr1 instanceof Array);

//2
function last(a) {
    return a.pop();
}

console.log(last(["hi", "heelo", "heli"]));

//3

const revise = [1, 2, 3, 4];
const copy = revise;
console.log(copy === revise);//true because of same reference.
console.log(copy[0] === revise[0]);

const copy2 = [...revise];
console.log(copy2);
console.log(copy2 === revise); // false because of different reference.

const copy3 = revise.slice();
console.log(copy3);
console.log(copy3 === revise); // false because of different reference.

// gpt questions to uderstand array "level:medium"

//4
const zoo = [1, 2, 3];
const zoo1 = [2, 3, 4];
const er = []

const llib = zoo.concat(zoo1);
for (let i = 0; i < llib.length; i++) {
    let count = 0;
    for (let j = 0; j < llib.length; j++) {
        if (llib[i] === llib[j]) {
            count++;
        }
    }
    if (count === 1) {
        er.push(llib[i]);
    }
}
console.log(er);

//5

function secondLargest(arr) {
    let srt = arr.sort((a, b) => a - b);
    let max = arr[0];
    let second;
    for (let i = 0; i < srt.length; i++) {
        if (arr[i] > max) {
            second = max;
            max = arr[i];
        }
    }
    return second;
}

console.log(secondLargest([5, 2, 1, 3, 10, 8, 56]));

//6
const dimen = [[1, 2], [3, 4], [5]];
const flt = dimen.flat();
console.log(flt);

//7

function rotates(arr, num) {
    for (let i = 0; i < num; i++) {
        let del = arr.pop();
        arr.unshift(del);

    }
    return arr;
}
console.log(rotates([1, 3, 4, 5, 8, 9], 2));

//8
function indice(arr, ele) {
    let msg = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            msg.push(i);
        }
    }
    return msg;
}

console.log(indice([1, 2, 3, 4, 5, 6, 3, 3, 3, 1, 1, 4, 3, 1, 6, 9, 4, 6, 1], 1));



