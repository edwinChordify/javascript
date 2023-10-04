const prompt = require('prompt-sync')()


function getArray() {

    const array1 = []
    const l = prompt("enter the length")
    for (i = 0; i < l; i++) {
        let n = prompt("enter array elements")
        array1.push(n)
    }
    return array1


}


function displayArray(array1) {
    console.log("Array:", array1.join(', '));
  }



function main(){
const myArray=getArray()
displayArray(myArray)
}

main()