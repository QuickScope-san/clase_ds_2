 let paresParaCoseno = (x) => {
    let resp = ""
    var array = []
    if (x<2){
     resp="Los numeros son : 0"
     return resp
    }

   resp = "Los numeros son :"
   let i = 0;
   do {
   if ( i % 2 == 0){
    resp = resp + ` ${i}`
    array.push(i);
   }   
   i = i + 1;
   } while (i <= x);

    return array;
 }

 let coseno=(x)=>{
    var fun = paresParaCoseno(x)
    var array = []
    for (x=0; x<fun.length; x++){
        array.push(Math.cos(fun[x]*(Math.PI/180)));
    }
    return array;
 }
module.exports={
    paresParaCoseno,coseno
}
