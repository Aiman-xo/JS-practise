//1
const doubled = a => a * 2;
console.log(doubled(4));

//2

const isEven = (a) => {
    if (a % 2 === 0) {
        return true;
    }
}
console.log(isEven(6));

//3

const greet = name => "hello " + name;
console.log(greet("maane"));

//4

const getLen = len => len.length;
console.log(getLen("hello"));

//using this 

const obj = {
    name: "aiman",
    age: 21,
    surname: "Abdul Rasack",
    fullname: function () {
        return this.name + ' ' + this.surname;
    }
}
console.log(obj.fullname());

//5

const getInitial = (name) => {
    const spl = name.split(' ');
    const res = spl.map((x) => {
        return x[0].toUpperCase()
    }).join('');
    return res
}
console.log(getInitial("hi ali banath"));

//6

const sqr = [1, 2, 3, 4];
const sqro = (num) => {
    const res = num.map((x) => {
        return x ** 2;
    });
    return res;
}
console.log(sqro(sqr));

//7

const check = (arr) => {
    const res = arr.every((x) => {
        return x % 2 == 0;
    });
    return res
}

console.log(check([1, 4, 6]));