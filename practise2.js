// const map1 = new Map();
// map1.set('age', 21);
// map1.set('name', 'aiman');

// const res = map1.get('name');
// console.log(res);

const arr = ["manu", 2, true, "shadow"];

const new1 = arr.map(change);
console.log(new1);

function change(element) {
    if (typeof element === 'string') {
        return element[0].toUpperCase() + element.slice(1).toLowerCase();
    }
    else {
        return element ** 2;
    }
}
//map

const jov = [5, 10, 15, 20, 300];


const new3 = jov.map((ele) => {
    return ele * 0.5;
});

console.log(jov);
console.log(new3);

//Feeling Proud
const srr2 = ["mayamali", "kunnnimani", "kunnappu", "manikandan"];


const newrr = srr2.map((val) => {
    let obj = {};

    // return val[0].toUpperCase() + val.slice(1).toLowerCase();
    for (let x of val) {
        let count = 0;
        for (let z of val) {
            if (x === z) {
                count++;
            }
        }
        if ((x in obj)) {
            continue;
        } else {
            obj[x] = count;
        }

    }
    return obj;
});

console.log(newrr);

//DIY 1
const renew = ["2024-1-20", "2025-2-30", "2026-3-31"];

const nww = renew.map((ele) => {
    const nw1 = ele.split('-').reverse().join('-');
    return nw1;
});

console.log(nww);

//DIY 2
const jaw = ["2024-1-20", "2025-2-30", "2026-3-31"];

const mp = jaw.map((ele) => {
    const nw = ele.split('-');
    return nw[1] + '/' + nw[2] + '/' + nw[0];
})
console.log(mp);

//objects inside array and changing values using map

const products = [
    { name: "alto-800", model: 2009, singleOwner: false },
    { name: "wagonr", model: 2017, singleOwner: true },
    { name: "ciaz", model: 2019, singleOwner: true }
];

const categorise = products.map((produc) => {

    if (produc.name === "wagonr") {
        return {
            ...produc,
            model: 2020
        }
    }
    else {
        return {
            ...produc
        }
    }


})
console.log(categorise);

// categorising the products based on their price and ownership

const vehicles = [
    { brand: "toyota", name: "innova", model: 2020, price: 3000000, singleOwner: true },
    { brand: "suzuki", name: "ertiga", model: 2023, price: 800000, singleOwner: false },
    { brand: "kia", name: "celtos", model: 2024, price: 1300000, singleOwner: true },
    { brand: "mahindra", name: "xuv-700", model: 2021, price: 2500000, singleOwner: true },
    { brand: "tata", name: "indigo", model: 2010, price: 500000, singleOwner: false }
];

const mbu = vehicles.map((products) => {


    if (products.singleOwner === true) {
        if (products.price > 2000000) {
            return {
                ...products,
                type: "Luxury-Vehicle",
                condition: "good"
            }
        }
        else if (products.price > 1000000) {
            return {
                ...products,
                type: "Mid-Range-Vehicle",
                condition: "good"
            }
        }
        else {
            return {
                ...products,
                type: "affordable-vehicle",
                condition: "good"
            }
        }
    } else {
        return {
            ...products,
            condition: "need to be checked"
        }
    }


});
console.log(mbu);

//filter

const roket = [23, 43, 22, 14, 45, 24];

const del = roket.filter((val) => val > 15);

console.log(del);


const desrt = [
    { name: "blueberry", type: "ice-cream", price: 120 },
    { name: "kulfi", type: "ice", price: 30 },
    { name: "popup", type: "ice", price: 20 },
    { name: "red-velvet", type: "cake", price: 700 },
    { name: "black-forest", type: "cake", price: 400 },
    { name: "vancho", type: "cake", price: 800 },
    { name: "vanilla", type: "ice-cream", price: 90 },
    { name: "mango", type: "ice-cream", price: 100 },
    { name: "crossiant", type: "bread", price: 150 }
];

const ko = desrt.map((ele) => {
    return {

        items: desrt.filter(ty => ty.type == ele.type)
    }
});
console.log(JSON.stringify(ko, null, 2));