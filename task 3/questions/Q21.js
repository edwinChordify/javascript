const prompt = require("prompt-sync")();

let n = prompt("Enter the size of an Array: ")
const firstArray = []

for (i = 1; i <= n; i++) {
    let values = prompt(`enter the ARRAY_1 values  ${i}`)
    firstArray.push(values)
}
console.log(firstArray);


const secondArray = []
for (i = 0; i < firstArray.length - 1; i++) {
    const sum = firstArray[i] * firstArray[i + 1]
    secondArray.push(sum)

}
console.log(secondArray);