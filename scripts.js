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
*/