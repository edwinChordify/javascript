//const prompt = require("prompt-sync")()

 

a=prompt("Enter Annual income")

 

 

function tax(income){

 

 

     if(income<100000){

        taxpay="no tax"

        

        return alert(taxpay);

        

    }

    else if(income<500000){

        taxpay=income*.05

        return alert(taxpay);

        

    }

    else if(income<1000000){

        taxpay=income*.2

        return alert(taxpay);

        

    }

    

 

 

else if(income<5000000){

    taxpay=income*.3

    return alert(taxpay);

}

 

 

}

tax (a)