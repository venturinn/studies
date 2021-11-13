/*
fahrenheit_to_celsius(95)

function fahrenheit_to_celsius(temp_fahrenheit) {

    let celsius = (temp_fahrenheit - 32) / 1.8

    console.log(celsius.toFixed(1) + '°C')

    return celsius.toFixed(1) + '°C'
}



difference(2);

function difference(x) {

    if (x > 10) {
        console.log(x - 10);
        return x - 10;
    } else if (x < 10) {
        console.log(10 - x)
        return 10 - x;
    } else {
        console.log(0)
        return 0;
    }
}


count_down(30)

function count_down(x) {

    let contagemRegressiva = '';

    for (let index = x; index >= 0; index -= 1) {

        if (index != 0) {
            contagemRegressiva = (contagemRegressiva + index + '...');
        } else {

            contagemRegressiva = (contagemRegressiva + index + '!!!');
            console.log(contagemRegressiva);
            return contagemRegressiva;

        }
    }

}



multiples_of_3_or_5(6);

function multiples_of_3_or_5(roof) {

    let multiplos = [];

    for (let index = roof - 1; index > 0; index -= 1) {
        if ((index % 3 === 0) || (index % 5 === 0)) {
            multiplos.push(index)
        }
    }
    console.log(multiplos);

    let soma = 0;

    for (let index = 0; index < multiplos.length; index += 1) {
        soma = soma + multiplos[index];
    }

    console.log(soma);
    return soma;
}


even_fibonacci_numbers(1000);

function even_fibonacci_numbers(roof) {

    let fibonacci = [1, 2, 3]

    for (; roof > fibonacci[fibonacci.length - 1];) {

        fibonacci.push((fibonacci[fibonacci.length - 1]) + (fibonacci[fibonacci.length - 2]));
    }
    console.log(fibonacci);

    let ultimoFibonacci = fibonacci.pop();

    console.log(fibonacci);

    let numerosPares = [];

    for (let index = 0; index < fibonacci.length; index += 1) {

        if (fibonacci[index] % 2 === 0) {

            numerosPares.push(fibonacci[index]);

        }
    }
    console.log(numerosPares);

    let soma = 0;

    for (let index = 0; index < numerosPares.length; index += 1) {
        soma = soma + numerosPares[index];
    }

    console.log(soma);
    return soma;
}



nth_prime(30);

function nth_prime(n) {

    let numerosPrimos = [];
    let countDivisores = 0;

    for (let index = 1; numerosPrimos.length < n; index += 1) {

        if (countDivisores === 2) {

            numerosPrimos.push(index - 1);
        }
        countDivisores = 0;
        for (let index2 = 1; index2 <= index; index2 += 1) {

            if (index % index2 === 0) {
                countDivisores = countDivisores + 1;
            }
        }
    }
    console.log(numerosPrimos);
    console.log(numerosPrimos[numerosPrimos.length - 1]);
    return numerosPrimos[numerosPrimos.length - 1];
}



largest_prime_factor(20);


function largest_prime_factor(number) {




smallest_multiple(11);


function smallest_multiple(roof) {

    let menorNumeroDivisivel = 0;
    let numeroDoMomento = roof;
    let dividePorTodos = false;

    for (; dividePorTodos === false;) {

        for (let index = 1; index <= roof; index += 1) {

            if (numeroDoMomento % index === 0) {
                menorNumeroDivisivel = numeroDoMomento;
                dividePorTodos = true;

            } else {
                numeroDoMomento = numeroDoMomento + 1;
                dividePorTodos = false;
                break;
            }
        }
    }
    console.log(menorNumeroDivisivel);
    return menorNumeroDivisivel;
}




let a = [1, 2, 5, 4, 0, 0, 7, 0, 0, 6];

caixa(a);

function caixa(values) {


    let verificarNovamente = true

    for (; verificarNovamente === true;) {

        for (let index = 1; index <= values.length; index += 1) {

            if (index === values.length) {

                verificarNovamente = false;

            } else if (values[index] === 0) {

                values.splice((index - 1), 2);
                break;
            }

        }
    }

    let soma = 0;

    for (let index = 0; index < values.length; index += 1) {
        soma = soma + values[index];
    }

    console.log(soma);
    return soma;


}


sum_square_difference(10);

function sum_square_difference(n) {

    let quadradoDaSoma = 0;
    let somaDoQuadrado = 0;
    let apenasSoma = 0;

    for (let index = 1; index <= n; index += 1) {
        apenasSoma = apenasSoma + index;
    }

    quadradoDaSoma = apenasSoma ** 2;

    console.log(quadradoDaSoma);

    for (let index = 1; index <= n; index += 1) {
        somaDoQuadrado = somaDoQuadrado + (index ** 2);
    }

    console.log(somaDoQuadrado);

    console.log(quadradoDaSoma - somaDoQuadrado)
    return quadradoDaSoma - somaDoQuadrado;

}
*/



let a = 1478;

let b = a.toString()

//console.log(b[1])

let e = '2'

let d = '4'

let i = parseInt(e, 10);

let h = parseInt(d, 10);

let f = i + h

//console.log(f)

digits_sum(23);

function digits_sum(number_s) {

    let resultado = [];

    let numeroParaString = '';

    let numeroParaStringArray = []; // Array 1 a 1000 em String


    for (let index = 1; index <= 1000; index += 1) { // for para criar array de 1 a 1000 em String

        numeroParaString = index.toString();
        numeroParaStringArray.push(numeroParaString)
    }

    for (let index = 0; index < numeroParaStringArray.length; index += 1) {

        let elemento = numeroParaStringArray[index];
        let tamanhoDoElemento = elemento.length;


        if (tamanhoDoElemento === 2) {

            let digito01String = elemento[0];
            let digito02String = elemento[1];

            let digito01Inteiro = parseInt(digito01String, 10);
            let digito02Inteiro = parseInt(digito02String, 10);

            let somaDosinteiros = digito01Inteiro + digito02Inteiro;

            if (somaDosinteiros === number_s) {
                resultado.push(parseInt(elemento, 10));
            }
        } else if (tamanhoDoElemento === 3) {

            let digito01String = elemento[0];
            let digito02String = elemento[1];
            let digito03String = elemento[2];

            let digito01Inteiro = parseInt(digito01String, 10);
            let digito02Inteiro = parseInt(digito02String, 10);
            let digito03Inteiro = parseInt(digito03String, 10);

            let somaDosinteiros = digito01Inteiro + digito02Inteiro + digito03Inteiro;

            if (somaDosinteiros === number_s) {
                resultado.push(parseInt(elemento, 10));
            }
        }
    }

    console.log(resultado);
    console.log(resultado.length);
    return resultado.length;


}