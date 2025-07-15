function sum(n) {
    if (n === 0) {
        console.log("object");
        return

    }
    console.log(n);
    sum(n - 1);
}
console.log(sum(4));

//2

function sum1(n) {
    if (n === 1) {
        return 1;
    }
    return n + sum1(n - 1);

}
console.log(sum1(4));

//3

function counterWays(num) {
    if (num === 0) {
        return
    }
    console.log(num);
    counterWays(num - 1);
    // counterWays(num + 1);
    console.log(num);
}
counterWays(4);
console.log('\n');

//4

function rest(n) {
    if (n === 0) {
        return
    }
    rest(n - 1);
    console.log(n);
}
rest(10);

// function outer() {
//     let mes = 1
//     function inner() {
//         console.log(mes);

//     }
//     console.log('object');
//     return inner();

// }
// outer();


//recursive factorial

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}
console.log(factorial(5));

//sum of digits using recursion

function sum(n) {
    if (n === 0) {
        return 0
    }
    return (n % 10) + sum(Math.floor(n / 10));

}
console.log(sum(1234));

//product of a digit

function product(n) {
    if (n === 0) {
        return 1
    }

    return (n % 10) * product(Math.floor(n / 10));
}

console.log(product(1234));

//reverse

function rev1(n, rev = 0) {
    if (n === 0) {
        return rev
    }
    return rev1(Math.floor(n / 10), rev * 10 + (n % 10));
}

function palindrome(n) {
    return n === rev1(n)
}




console.log(palindrome(1212));
