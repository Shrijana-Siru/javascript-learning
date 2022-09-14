let ages = a => {
    if(a >= 10 ){
        document.getElementById("age").innerHTML = "young";
    }
    else if(a < 10){
        document.getElementById("age").innerHTML = "baby";
    }
    else if(a >= 40){
        document.getElementById("age").innerHTML = "old";
    }
    else{
        document.getElementById("age").innerHTML = "Not Born Yet";
    }
}
ages(33)