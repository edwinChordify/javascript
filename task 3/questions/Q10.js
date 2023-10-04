const prompt = require("prompt-sync")();

let n = prompt("Enter the size of an Array: ")
const firstArray = []
const secondArray = []
for (i = 1; i <= n; i++) {
    let values = prompt(`enter the ARRAY_1 values  ${i}`)
    firstArray.push(values)
}

for (i = 1; i <= n; i++) {
    let values = prompt(`enter the ARRAY_2 values  ${i}`)
    secondArray.push(values)
}





function swapArrays(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        
        const temp = firstArray[i];
        firstArray[i] = secondArray[i];
        secondArray[i] = temp;
    }
}



console.log('Before swapping:');
console.log('Array 1:', firstArray);
console.log('Array 2:', secondArray);

swapArrays(firstArray, secondArray);

console.log('\nAfter swapping:');
console.log('Array 1:', firstArray);
console.log('Array 2:', secondArray);
