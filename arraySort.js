const arr = [1, 2, 3, 4];
const res = Math.max.apply(null, arr);
console.log(res); 8

// array sort level "easy"
//1
const num = [1, 4, 8, 3, 0, 4, 3];
const asc_srt = num.toSorted((a, b) => { return a - b });
const des_srt = num.toSorted((a, b) => { return b - a });

console.log(asc_srt);
console.log(des_srt);

//2
const arr1 = ["opple", "apple", "orange", "banana", "kiwi", "lemon"];

let temp;
for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i].length > arr1[j].length || (arr1[i].length === arr1[j].length && arr1[i] > arr1[j])) {
            temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    }
}

console.log(arr1);

//3

const arr3 = ["01-10-2007", "02-11-2005", "04-11-2003"];
const nw = arr3.map((x) => {
    const res = x.split('-');
    const nw1 = [res[2], res[1], res[0]].join('-');
    const date1 = new Date(nw1);
    return date1;
});

const res1 = nw.sort((a, b) => { return a - b });

console.log(res1);

//4

function sorting(arr) {
    const nw = arr.map((x) => {
        const res = x.toLowerCase();

        return res
    })
    const res1 = nw.sort();
    return res1;
}
console.log(sorting(["apple", "orange", "banana", "Apple", "Banana"]));

//medium
//5

const arr5 = [
    { name: 'John', age: 47 },
    { name: 'Aane', age: 30 },
    { name: 'Bane', age: 20 }
];

arr5.sort((a, b) => {
    if (a.age !== b.age) {
        return a.age - b.age;
    } else {
        return a.name.localeCompare(b.name);
    }
});

console.log(arr5);

//6

const ar6 = [false, "gym", 2, true, "apple", null, 203, undefined];
ar6.sort((a, b) => {
    if (typeof a !== typeof b) {

    }
})
console.log(ar6);

//7

function compare(arr) {
    const nw = arr.map((x) => {
        return x.split('').reverse().join('');
    });

    nw.sort();
    return nw;


}
console.log(compare(["apple", "mango", "chikku", "banana", "jelly"]));
