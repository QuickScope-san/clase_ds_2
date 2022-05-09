function factorial( n ){
    if (n < 0) return -1;
    if (n == 0) return 1;
    if (n > 0) return n * factorial(n-1);
}

const derivada = (fxn) => {
    var h = 0.001;
        return (x)=>{return(fxn(x + h) - fxn(x - h)) / (2 * h);}
};

const serie =  ( grado )=> {
    const array = []
    let f = Math.exp;
    for(i = 0; i <= grado; i++){
        array.push( parseFloat(f(i) / factorial(i)).toPrecision(3) );
        f = derivada(f,i);
    }
    return {array : array};
};

/*function mclaurin(grado){
    let valores = [];
    for (let i = 0; i <= grado; i++) {
        valores.push(  Math.exp(i) / factorial(i) );        
    }
    return { array : valores} ;
};*/

module.exports = { serie }

