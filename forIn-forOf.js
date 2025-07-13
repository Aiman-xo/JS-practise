//easy
//1

// Use for...in to iterate over an object's properties.

const obj = {
    name: "son",
    age: 49,
    gender: "male",
    hobbies: {
        sports: "football",
        arts: "painting",
        logical: "coding"
    }
}

for (let x in obj) {
    if (x === "hobbies") {
        console.log(obj[x].sports);
    }

}