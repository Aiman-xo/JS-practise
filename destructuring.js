// let a = 1;
// let b = 2;
// [a, b] = [b, a]
// console.log(a);

//2

const obj = {
    name1: 'alice',
    job: 'mechanic',
    salary: 2000
}

const { name1, job, salary } = obj;
console.log(name1);
console.log(job);
console.log(salary);
//3
const arr = [1, 2, 3, 4];

const [a, , c] = arr;
console.log(a);

//4

const obj2 = {
    name: "alice", info: {
        city: "california",
        zip: 110001
    }
}

const { name, info: { city } } = obj2;
console.log(city);
console.log(name);

let d = 10;
let e = 20;

[d, e] = [e, d]
console.log(d);


//3

const blah = { x: 10, y: 30 };

const { x: alpha, y: beta } = blah;
console.log(alpha);
console.log(beta);

const colors = ["red", "yellow", "blue", "green"];

[colors[0], colors[2]] = [colors[2], colors[0]];

console.log(colors);

const person1 = {
    name2: "alice",
    age: 30,
    student: true,
    degree: true
}

const person2 = {
    name2: "john",
    age: 20,
    student: false,

}

const { name2, age, student, degree = "not studied" } = person2
console.log(name2);
console.log(age);
console.log(student);
console.log(degree);


// const obj4 = {
//     name:"koiyakka",
//     joli:"driver"
// }

// function ol({name}){

// }

const j = [1, 1, 3, 4, 2, 5, 3, 1, 4, 2, 3];
const nw = [];
j.map((x) => {
    if (nw.includes(x) == true) {
    }
    else {
        nw.push(x);
    }
})
console.log(nw);