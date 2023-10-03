const prompt = require("prompt-sync")();
const limit=prompt("enter a limit")
let s=0
for(i=1;i<=limit;i+=2){
    s+=i
}
console.log(s);