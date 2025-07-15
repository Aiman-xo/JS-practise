function calculate(a, b) {
    return a + b;

}
function op(x, y, v) {
    return v(x, y);
}


console.log(op(2, 3, calculate));

//substraction

function substraction(a, b) {
    return a - b;
}
function boss(x, y, callback) {
    return callback(x, y);
}

console.log(boss(5, 2, substraction));

//playin with strings

function str(str1, str2) {
    return str1 + ' ' + str2;
}
function sy(x, y, jingle) {
    return jingle(x, y)
}

console.log(sy("aiman", "Abdul Rasack", str));

//next try

function job(name) {
    return ("you are a" + ' ' + name);
}
function call(cb) {
    const name = "dentist";
    return cb(name);

}

console.log(call(job));

function filter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filter([1, 2, 3, 4, 5], function (num) {
    return num % 2 === 0;
}));

const arr = [1, 2, 3, 4];
const map1 = arr.map((x) => {
    return x * 2;
})
console.log(map1);