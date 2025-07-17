const obj = {
    name: 'alya',
    sayMyName: function () {
        return `my name is ${this.name}`;
        // console.log(this.name);
    }
}

const res = obj.sayMyName();

console.log(res);

const obj2 = {
    name: 'sonu',
    realname: 'shamil',
    find: () => {
        return `${this.name} realname is ${this.realname} `
    },//this returns undefined
    find2: function () {
        return `${this.name} realname is ${this.realname} `
    }
}
console.log(obj2.find());//this returns because use of arrow function.
console.log(obj2.find2());//this works normally.



