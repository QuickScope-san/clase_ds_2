let oddSequence = (x) =>{

    let sequenceArray = [];
    if(x<1){
    return sequenceArray;
  
    }else if(x>=1 && x%2 == 1){ 
        let i =1;
while (i<=x) {
    sequenceArray.push(i);
    i += 2;
}
return sequenceArray;
    
    } 
    
}
    

let senoParaImpares = (x) => {
    let sequenceCopy = oddSequence(x)
    let sinForOddNumber = [];

    for (let index = 0; index < sequenceCopy.length; index++) {
         let value =   Math.sin(sequenceCopy[index] * Math.PI/180);
         sinForOddNumber.push(value);
        
    }

}

module.exports={senoParaImpares}





    

