// for (let i = 1; i <= 100; i++) {
//     // console.log(i);
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz');
//     }
//     else if (i % 5 == 0) {
//         console.log('Buzz');
//     }
//     else if (i % 3 == 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
// }

// //2
// let num = 20;
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// //3
// let n = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}*5 = ` + i * 5);
// }

// //4

// let j = 123495;
// let m = j.toString();
// let summ = 0;
// for (let i = 0; i <= m.length - 1; i++) {
//     summ++;
// }

// console.log(summ);

// //5

// let inp = 1234;
// let inpa = '';
// let k = inp.toString();
// for (let i = k.length - 1; i >= 0; i--) {
//     inpa += k[i];
//     inpa = parseInt(inpa);
// }
// console.log(inpa);

// //6

// let str = 'hi there how are you';
// // let spl = str.split(' ');
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i].match(/[aeiou]/)) {
//         count++;
//     }
// }
// console.log(count);

// let str = 'malayalam';
// let str1 = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     str1 += str[i];
// }
// if (str === str1) {
//     console.log(str + ' is a palindrome');
// } else {
//     console.log(str + ' is not a palindrome');
// }

// let strr = 'hi my name is john  i';
// let strr1 = strr.split(' ');
// let back = strr1.join('');
// console.log(back);

// let str = 'hello world';
// let result = '';
// let row = str.split(' ');
// for (let i = 0; i < row.length; i++) {
//     let res = row[i][0].toUpperCase();
//     result += res + row[i].slice(1) + ' ';

// }
// console.log(result);

// let str = 'aabbcd';
// let counta = 0;
// let countb = 0;
// let countc = 0;
// let result = '';
// for (let x = 0; x <= str.length; x++) {

//     if (str[x] === 'a') {
//         counta++;

//     }
//     else if (str[x] === 'b') {
//         countb++;
//     }
//     else if (str[x] === 'c') {
//         countc++;
//     }
// }
// result = `count of a is ${counta}, count of b is ${countb}, count of c is ${countc}`;
// console.log(result);

let str = 'aabbccdfggggg';
let obj = {};

for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = i; j < str.length; j++) {
        if (str[i] === str[j]) {
            count++;
        }
    }
    if ((str[i] in obj)) {
        continue;
    } else {
        obj[str[i]] = count;
    }

}
console.log(obj);

var isPalindrome = function (x) {
    let j = x.toString();
    let res = '';
    for (let i = j.length - 1; i >= 0; i--) {
        res += j[i];

    }
    if (res === j) {
        return true;
    }
    else {
        return false;
    }

};

console.log(isPalindrome(121));


let hack = 'leetcode'
// let join1 = hack.split('');
// console.log(join1);
needle = 'leeto';

if (hack.includes(needle)) {
    let index = hack.indexOf(needle)
    console.log(index);

}
else {
    console.log(-1);
}


let word = 'luffy is still joyboy';
let sh = word.trim();
let splo = sh.split(' ').reverse();
console.log(splo[0].length);

let word2 = 'luffy is still joyboy';
let sh2 = word2.trim().split(' ');

console.log(sh2[sh2.length - 1].length);


var lengthOfLastWord = function (s) {
    let trim1 = s.trim().split(' ').reverse();
    return trim1[0].length;
};

console.log(lengthOfLastWord('luffy is still joyboy'));