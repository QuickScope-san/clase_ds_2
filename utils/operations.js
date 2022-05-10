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

let fibonacci = n => {

    let fibonacciNumbers = [];

    for (let i = 1; i <= n; i++) {
        if(i == 1 || i == 2  ){
            fibonacciNumbers.push(1);
        }
        else{
        myFibonacci = fibonacciNumbers[i-2] + fibonacciNumbers[i-3]
        fibonacciNumbers.push( myFibonacci );
        }      
    }
    return fibonacciNumbers; 
    
}

module.exports={
    pares,
    fibonacci,
}
