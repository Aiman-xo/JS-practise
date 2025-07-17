

function last(arr, fun) {
    let out = [];
    for (let i = 0; i < arr.length; i++) {
        out.push(fun(arr[i]));
    }
    return out;
}

function area(arr) {
    return Math.PI * arr * arr;
}
console.log(last([1, 2, 5, 4], area));

//2

function callTwice(foo) {
    foo();
    foo();
}
function timee() {
    console.log('object');
}

callTwice(timee);

//3 agian custom forEach

function applyToEach(arr, fn) {
    let out = []
    for (let i = 0; i < arr.length; i++) {
        out.push(fn(arr[i]));
    }
    return out
}

function mut(arr) {
    return arr * arr
}
console.log(applyToEach([2, 3, 4, 5], mut));

//4

function filterEven(num, callback) {
    let out = [];
    for (let i = 0; i < num.length; i++) {
        if (callback(num[i]) == undefined) {

        }
        else {
            out.push(callback(num[i]));
        }


    }
    return out
}

function fil(num) {
    if (num % 2 == 0) {
        return num;
    }
}

console.log(filterEven([1, 4, 53, 2], fil));

//5

function makeLouder(fn) {
    return fn('hello');
}

function sr(str) {
    return str.toUpperCase();
}

console.log(makeLouder(sr));