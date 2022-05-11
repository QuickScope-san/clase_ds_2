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

 let raiz_impar = (x) => {

    let resp = "los numeros impares entero(s) de la raíz cuadrada del numero en cuestion son:";
 
    for (let i = 1; i <= x; i++) {
     
     let n = Math.sqrt(i)
 
     if( (n % 2 != 0) && (n % 1 === 0 )){
 
         resp = resp + ` ${n}`;
 
     }
 
  }
 
     return resp;
 
 }

module.exports={
    pares,
    raiz_impar,
}
