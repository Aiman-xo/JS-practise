function sum(...num) {
    const res = num.reduce((x, val) => {
        return x + val;
    });
    return res;
}
console.log(sum(1, 2, 3, 4));

//2

function merge(...arr) {
    return arr.flat();
}
console.log(merge([1, 2], [3, 4], [5]));

//3

const obj = {
    name: "alice",
    age: 22
}
const dupl = { ...obj };
dupl.age = 30;
console.log(dupl);

//4

function red(ign, ...a) {
    return a;
};
console.log(red(5, 10, 15, 20));

//6

function merge1(a, b, c) {
    return {
        ...a, ...b, ...c
    }
};
console.log(merge1({ a: 1 }, { b: 2 }, { c: 3 }));

//7

function doubleSum(...num) {
    const sqr = num.map((x) => {
        return x * 2;
    });

    const sum = sqr.reduce((acc, val) => {
        return acc + val;
    });

    return sum;
};

console.log(doubleSum(1, 2, 3));