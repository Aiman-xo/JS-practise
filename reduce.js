const jr = ["mr", "aiman", "abdul", "rasack"];
let g = '';
jr.reduce((prev, nxt) => {
    g += prev + ' ' + nxt;
    return g
});
console.log(g);