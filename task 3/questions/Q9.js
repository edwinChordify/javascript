const prompt = require("prompt-sync")();
let n=prompt("enter the limit")
    for (let i = 1; i <= n; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += j ;
      }
      console.log(row);
    }
  

  