const prompt = require("prompt-sync")();
const n = prompt("enter array length")
const arr1 = []
for (i = 1; i <= n; i++) {
    const values = prompt(`enter array value : ${i} `)
    arr1.push(values)
}

arr1.sort(function (a, b) { return (b - a) })
console.log(arr1);
