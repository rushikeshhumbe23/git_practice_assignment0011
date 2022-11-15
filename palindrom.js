function palindrom(s){

    if(s === rev(s)){ 
        console.log("String is Palindrom");
    } else {
        console.log("String is not Palindrom");
    }

}

palindrom("naman");

function rev(str){

    let bag = "";

    for(var i = str.length-1 ; i>=0 ; i--){
        bag+= str[i];
    }     
   return bag ;
}
