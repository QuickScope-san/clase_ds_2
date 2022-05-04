let pares = (x) => {
  let resp = "";
  if (x < 2) {
    resp = "Los numeros son : 0";
    return resp;
  }

  resp = "Los numeros son :";
  let i = 0;
  do {
    if (i % 2 == 0) {
      resp = resp + ` ${i}`;
    }
    i = i + 1;
  } while (i <= x);

  return resp;
};

// Función Factorial realizada por Felipe Guerra Sáenz
let factorial = (n) => {
  let answer = 1;

  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (let i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
};
//let n = 4;
//answer = factorial(n);
//console.log("The factorial of " + n + " is " + answer);

module.exports = {
  pares,
  factorial,
};
