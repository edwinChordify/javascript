
var my_height = prompt("enter your height")

try {
    if (isNaN(my_height)) {
        alert("notANumberError");
    } else if (my_height > 100) {
        alert("HugeHeightError");
    } else if (my_height < 1) {
        alert("TinyHeightError");
    }

} catch (error) {
    alert(error.message);

}