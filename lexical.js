let a = "outer";
function outer() {
    let b = "inner";

    function inner() {
        let c = "inside-inner";
        console.log(a, b, c);
    }
    inner();
}
outer();

//2

function sum() {
    let a = 5;
    let b = 10;
    function nest(a, b) {
        return a + b;
    }
    console.log(nest(a, b));
}

sum();

//3

function makeCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

counter1(); // ❓
counter1(); // ❓
counter2(); // ❓
//4

function Person(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies
}

const p1 = new Person("Alice", 25, "hockey");
const p2 = new Person("finan", 45, "footbal");
console.log(p2.name);
console.log(p1.hobbies); // { name: 'Alice', age: 25 }

