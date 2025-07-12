const arr = [[1, 2], [1, 3], [2, 4]];

const j = arr.flatMap((x) => {
    return x.map((y) => {
        return y ** 2;
    })
})
console.log(j);

const srr2 = [1, 2, 34, 4];
const re = srr2.map((x) => {
    return [x, x * 2];
});
console.log(re);

//Array.from()
//1
const arr4 = [1, 2, 3, 5];
const arr5 = ['1235'];
const cj = arr4.every(x => x > 0);
const cm = Array.from(arr5);
console.log(cm);
console.log(cj);

//2
const as = 'abc';
const e = Array.from(as, x => x + 'a');
console.log(e);