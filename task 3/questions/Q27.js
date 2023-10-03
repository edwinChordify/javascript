const prompt = require("prompt-sync")();
var my_height = prompt("enter your height")

try {
    if (isNaN(my_height)) {
        console.log("notANumberError");
    } else if(my_height > 100){
        console.log("HugeHeightError");
    } else if(my_height < 1){
        console.log("TinyHeightError");
    }

} catch (error) {
    console.log(error.message);

}