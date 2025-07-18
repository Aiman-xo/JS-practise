const clr = ['red', 'green'];
const [a, b] = clr;
console.log(a);

const obj = {
    name: 'john',
    age: 30
}

const { name, age } = obj;
console.log(name);

const r = [1, 2, 3, 1, 4, 3, 2, 5, 3];




const arr = [1, [2, 3], 4, 5];

const srr = [...arr];

srr[1][1] = 100;
console.log(arr);
