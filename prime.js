function checkprime(num){

    let fact  = 0 ; 
    for(var i=2 ; i<=num**0.5 ; i++){
        if(num % i ==0 ){
            fact++;
        }
    }
    if(fact == 0){
        return true;
    } else {
        return false ;
    }

}
let ans = checkprime(13);
console.log(ans);