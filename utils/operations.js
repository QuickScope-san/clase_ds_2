let pares = (x) => {
    let resp = ""
    if (x<2){
     resp="Los numeros son : 0"
     return resp
    }

   resp = "Los numeros son :"
   let i = 0;
   do {
   if ( i % 2 == 0){
    resp = resp + ` ${i}`
   }   
   i = i + 1;
   } while (i <= x);

    return resp;
 }

 let primo = (x) => {
    var i;
    for(i = 2; i< x;i++){
        if(x % i == 0){
            return  x + " is not prime";
           
        }
    }
    return x + " is prime";
 }

module.exports={
    pares, primo
}
