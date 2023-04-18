function fibonacci(n) {
    let a = 0;
    let b = 1;
    let c;

    //sequencia Fibonacci
    while (b <= n) {
        c = a + b;
        a = b;
        b = c;
    }

    //verifica se o numero está na sequência
    if (a === n) {
        return true;
    } else {
        return false;
    }
}

//numero chute
const chute = 13;

//verifica se a função contem ou não o numero chutado
if (fibonacci(chute)) {
    console.log(chute + " está contido na sequência Fibonacci");
} else {
    console.log(chute + " não está contido na sequência Fibonacci")
}