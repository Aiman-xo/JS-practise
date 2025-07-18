const arr = [1, 2, 3];


function sqr(arr) {
    let nwrr = 0;
    for (let i = 0; i < arr.length; i++) {
        nwrr += arr[i] ** 2;
    }
    return nwrr;
}

console.log(sqr(arr));
console.log(sqr(arr));

//2

let messages = [];

function sendMessage(msg) {
    let r = []
    r.push(msg);
    return r// side effect
}
console.log(sendMessage('hello'));
console.log(sendMessage('hi'));
console.log(messages);

//

obj =
{
    name: "name",
    age: 90
}

console.log(Object.prototype);