const prompt = require("prompt-sync")();
const arr = []
const n = prompt("enter a string")
arr.push(n)

const result = arr[0].split('')
const revString=result.reverse()
console.log(revString);
const joinString=revString.join('')
console.log(joinString)
if(n==joinString){
    console.log("entered string is plaindrome")
}else{
    console.log("not a palindrome")
}