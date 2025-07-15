//1
(function (num) {
    console.log(num);
})("obj");

//2

(function (n) {
    let j = 5;
    console.log(n + j);
})(3);
//console.log(j); => // this is error because j is scoped inside the function

//arrow iife

(() => {
    console.log('hi all');
})();

//some more iife s

const j = (function (a, b) {
    return a + b;
})(2, 3);
console.log(j);

const r = (function () {
    let count = 0;
    return function () {
        return ++count;
    }
})();
r();
console.log(r());
console.log(r());


let j1 = (function (a, b) {
    return a + b;
});

console.log(j1(2, 2));

(function (a, b) {
    console.log(a + b);
})(2, 10);
const arr = [1, 2, 3];
const newArr = [arr, 4, 5];
console.log(newArr);


const defaultUser = {
    name: "Anonymous",
    age: 18,
    preferences: {
        theme: "light",
        notifications: true,
    },
    role: "user"
};

const userUpdates = {
    name: "Alice",
    preferences: {
        theme: "dark",
    },
    location: "New York"
};

const finalUser = {
    ...defaultUser,
    ...userUpdates,
    preferences: {
        ...defaultUser.preferences,
        ...userUpdates.preferences
    }
};

console.log(finalUser);

const a = [1, 2];
const b = [2, 1];
const c = [...a, ...b];
console.log(c);
