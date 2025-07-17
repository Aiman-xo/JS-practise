// object constructor

function sum(...num1) {
    // this.a = num1,
    //     this.b = num2,
    this.avg = function () {
        const test = num1.reduce((acc, val) => {
            return acc + val;
        });
        const res = test / num1.length;
        return res;
    }
};

const obj7 = new sum(1, 2, 3, 4, 5);
// console.log(obj7.b);

console.log(obj7.avg());

//1

const obj8 = {
    name: 'alice1',
    age: 22,
    combi: function () {
        return `${this.name} is ${this.age} years old`;
    },
    len: function () {
        return this.name.length;
    }
}
console.log(obj8.combi());
console.log(obj8.len());

//2

const obj = {
    a: 2,
    b: 3,
    add: function () {
        return this.a + this.b;
    },
    substract: function () {
        return this.a - this.b
    },
    multiply: function () {
        return this.a * this.b;
    }
};
console.log(obj.multiply());


function op(a, b) {
    this.a = a,
        this.b = b,
        this.add = function () {
            return this.a + this.b;
        },
        this.substract = function () {
            return this.a - this.b
        },
        this.multiply = function () {
            return this.a * this.b;
        }
}
const tri = new op(3, 4);
console.log(tri.multiply());

//3
const stringTools = {
    a: "alice",
    reverse: function () {
        // return this.a.split('').reverse().join('');
        let ne = '';

        for (let i = this.a.length - 1; i >= 0; i--) {
            ne += this.a[i]
        }
        return ne
    }

}
console.log(stringTools.reverse());

//Create a custom object with a method that mimics toLowerCase()
// (don’t use the built-in method). It should convert only uppercase letters A–Z to lowercase.
/*
Take your time and try to:

Create a custom object (like stringHelper)

Add a method (like toLower() or customToLowerCase)

Inside the method:

Loop through the string

For each character, check if it’s uppercase (ASCII 65–90)

Convert to lowercase by adding 32 to the char code

Keep all other characters unchanged

When you’re done, share your code here — and I’ll review it!*/

