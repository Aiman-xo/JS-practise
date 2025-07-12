//easy
//1
const arr = [1, 2, 3, 4, 5];

arr.pop();
arr.shift()
console.log(arr);

//2
const arr1 = [1, 2, 3, 4, 5];
const str = arr1.join(',');
console.log(str);
const slc = arr1.slice(1, 3);

console.log(slc);


const arr2 = [1, 2, 34, 5, 6, 3];

arr2.splice(2, 0, "hi");
console.log(arr2);

//3

const arr3 = [1, 2, 3, 4, 5];
const arr31 = arr3.toReversed();
console.log(arr31);
console.log(arr3);

//medium
//4
function removeFalsy(arr) {
    return arr.filter(Boolean);

}
console.log(removeFalsy(["1", 2, false, "", null, "john"]));

//5

function addele(arr, ele, ind) {

    const spl = arr.toSpliced(ind, 0, ele);
    return spl;
}

console.log(addele([1, 2, 3, 4], 10, 2));

//6

function occurence(arr, tar) {
    // arr.map((x) => {
    //     if (x === tar) {
    //         return x
    //     }
    // })
    const nerr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === tar) {
            continue;
        } else {
            nerr.push(arr[i])
        }
    }
    return nerr
}
console.log(occurence([1, 2, 2, 3, 4], 2));

//7

function swap(arr, ind1, ind2) {
    let temp;
    temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;

    return arr;


}

console.log(swap([10, 20, 30, 40], 1, 3));
// console.log();

//8

// function subset(arr1, arr2) {
//     const r = [];
//     for (let i = 0; i < arr1.length; i++) {
//         let count = 0;
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 count++;
//             }
//         }
//         if (count === 1) {
//             r.push(arr1[i]);
//         }
//     }
//     return r;

// }
// console.log(subset([1, 2, 3, 4], [2, 3, 4, 5, 6]));

function subset(arr1, arr2) {
    const y = arr1.concat(arr2);
    const fil = y.filter((x) => {
        return y.indexOf(x) === y.lastIndexOf(x);
    });
    return fil
}
console.log(subset([1, 2, 3, 4], [2, 3, 4, 5, 6]));