function saverData(obj) {
    localStorage.setItem('so', JSON.stringify(obj));

    return JSON.parse(localStorage.getItem('as', obj))
}

console.log(saverData({ nm: 'jon' }));

localStorage.setItem('score', 100);
console.log(typeof localStorage.getItem('score'));