function closure() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    }
}
const row = closure();
row();
row();
// closure();

function outer() {
    let msg = 'yo hello';

    function inner() {
        console.log(msg);
    }
    return inner();
}

outer();

//2

function counterMain() {
    let count = 0;

    function innerCount() {
        count++;
        console.log(count);
    }
    return innerCount
}
let tri = counterMain();
tri();
tri();

//4

function greetingGenerator() {
    let name = 'aiman';
    function combi() {
        console.log(`hello ${name}`);
    }
    return combi;
}



const greet = greetingGenerator('kunnani');
greet();

function bankAccount(startBalance) {

    function deposit(amount) {
        startBalance += amount;
    }
    function getBalance() {
        console.log(startBalance);
    }
    return { deposit, getBalance };
}

const res = bankAccount(10000);

res.deposit(500);
res.getBalance();

// const res = bankAccount(10000);
// res.deposit(500);
// res.getBalance();
//5

function createLogger() {
    let count = 0
    function retu() {
        count++;
        console.log(`the function called ${count}`);
    }
    return retu
}


const ji = createLogger();
ji();
ji();
ji();

//6

function powerFactory(base) {
    function rut(k) {
        return base ** k
    }
    return rut;
}

const j = powerFactory(4);
console.log(j(2));

