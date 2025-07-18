const obj = { name: 'aiman', age: 21 }

function details(a) {
    console.log(`name is ${this.name} age is ${this.age} and place is ${a}`);
}

details.call(obj, 'malappuram')

//2

const obj2 = { car: 'bmw', model: 'm3 competition', kit: false }

function getDetails(owner) {
    return this.car + ' ' + 'owner' + ' ' + owner;
}

console.log(getDetails.apply(obj2, [true]));
console.log(getDetails.call(obj2, true));

//bind

const oi = { mode: 'bmw', year: '2017' }

function fu(owner, crash) {
    return `this car is ${this.mode} is owned by ${owner} it
is ${this.year} model and its report for crash is ${crash}`
}

const result = fu.bind(oi);
console.log(result('adil', true));

const obj3 = {

}

//gpt

const user = {
    name: "Jamal",
    logName: function () {
        console.log(this.name);
    }
};

const log = user.logName.bind(user);
log();
