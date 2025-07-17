const obj = {
    name: "aiman",
    age: 21,
    detail: function () {
        return `${this.name}  is  ${this.age}  years old`;
    }
};

console.log(obj.detail());

//copying or creating duplicate of an object

const obj2 = Object.assign({}, obj);
obj2.age = 25;//this ,odifies the new inherited object
console.log(obj2);//this prints the new inherited object
console.log(obj);//this prints the original object

//constructor method

const obj3 = new Object();
obj3.name = "kunnayamu";

console.log(obj3);

// object constructor 

function constructor(name, age, id) {
    this.name = name,
        this.age = age,
        this.id = id
};

const acc1 = new constructor("sarapu", 34, '12d');
const acc2 = new constructor("pathumma", 60, '13e');

console.log(acc1.age);
console.log(acc2.id);
console.log('\n');

for (let x in acc1) {
    console.log(acc1[x]);
}

//object methods
console.log(Object.keys(acc2));//return ann array of keys of that object
console.log(Object.values(acc1));//return ann array of values of that object
console.log(Object.entries(acc2));//returns an array which contains each key and its pair 

//cloning an object using object.assign

const obj5 = {
    name: "maruthi",
    model: "baleno",
    year: 2020
}

const clone = Object.assign({}, obj5);
for (x in clone) {
    console.log(clone[x]);
}

//some serious questions

//1

const obj6 = {
    name: "alice",
    age: 20,
    grade: [20, 30, 40, 50],
    calculateAverage: function () {
        let max = obj6.grade[0];
        for (let i = 0; i < obj6.grade.length; i++) {
            if (obj6.grade[i] > max) {
                max = obj6.grade[i];
            }
        }
        return max

    }
};

console.log(obj6.calculateAverage());

//2

function cln(obj) {
    return Object.assign({}, obj);
}
console.log(cln({ name: 'ayamu', age: 40 }));

//3

const user = {
    name: 'Bob',
    details: {
        city: 'Paris',
        zip: 75000
    }
};

user.details.zip = 70000

console.log(user);

//6

const numobj = {
    age: 20,
    id: 500,
    name: 'jamal'
};

for (let x in numobj) {
    if (typeof numobj[x] === 'number') {
        console.log(x);
    }
}

//3 re-test

function test(obj) {
    const nw = {};
    for (x in obj) {
        nw[obj[x]] = x

    }
    return nw
};
console.log(test({ name: 'ayamu', age: 40 }));



