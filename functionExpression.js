//1
const obj = {
    name: "jamal",
    age: 43,
    fight: function (num) {
        console.log(num.toUpperCase());
    }
}
obj.fight("kunnani");

// object constructor

function person(name, age) {
    this.name = name,
        this.age = age
}

const status1 = new person("aiman", 21);
const status2 = new person("akhil", 29);
console.log(status1.name);

//3

// console.log(try1(1, 2));
// const try1 = function (a, b) {
//     return a + b;
// }

//scope

// {
//     var x = 1;
// }
// function printX() {
//     // let x = 2;
//     console.log(x); // ❌ ReferenceError!

// }
// printX();


