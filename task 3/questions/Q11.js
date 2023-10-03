const prompt = require("prompt-sync")();
const n = prompt("enter array length")
const arr1 = []
for (i = 1; i <= n; i++) {
    const values = prompt(`enter array values ${i} `)
    arr1.push(values)
}
console.log(arr1);
evenArr = []
for (i = 0; i <= n; i++) {
    if (arr1[i] % 2 == 0) {
        evenArr.push(arr1[i])
        
    }

}
console.log(`Number of even numbers in the given array is ${evenArr.length}`)