// 7. Write a JavaScript function to check if a given number is prime. 
function func(num) {
    if(num<=1){
        return false;
    }
    for(var i=2;i<Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

if(func(11)){
    console.log("Is a prime number");
}else{
    console.log("Is not a prime number");
}
