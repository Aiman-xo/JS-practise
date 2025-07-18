function odd(arr, call) {
    let srr = [];
    for (let i = 0; i < arr.length; i++) {
        srr.push(call(arr[i]));
    }
    return srr.filter((x) => {
        return x != undefined
    })
}

function filter(x) {
    if (x % 2 === 0) {
        return x
    }
}

console.log(odd([1, 2, 3, 4, 5, 6], filter));

function logger(fn, value) {
    return fn(value)
}
console.log(logger(Math.sqrt, 16));

//3


function greeter(wish) {

    return function try1(name) {
        console.log(`${wish} ${name}`);
    }
}

const higreet = greeter('hi');
higreet('aiman');

//4

const ser = [
    function add(a, b) {
        return a + b;
    },
    function subs(a, b) {
        return a - b
    },
    function mult(a, b) {
        return a * b
    }
];

// console.log(ser[0](1, 2));
for (let i = 0; i < ser.length; i++) {
    console.log(ser[i](2, 3));
}


function mat(num) {
    console.log(Math.round(num));
    console.log(Math.abs(num));
    if (num > 0) {
        console.log(Math.sqrt(num));
    }
}

mat(-20.4)

const m = Math.random() * 100;
const x1 = Math.round(m);
console.log(x1);

const t = Math.trunc(14.64);
console.log(t);