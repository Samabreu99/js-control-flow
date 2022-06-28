function celciusTofahrenheit(c) {
    let celciusTemp = c;
    let CtoF = celciusTemp * 9/5 + 32;
    let message = celciusTemp + "C" + " " + "is" + " " + CtoF + "fahrenheit";
    
    console.log(message);
}

function fahrenheitTocelcius(f){
    let fahrenheitTemp = f;
    let fahrenheittocelcius = (fahrenheitTemp - 32) * 5/9;
    let message = fahrenheitTemp + "F" + " " + "is" + " " + fahrenheittocelcius + " " + "celcius";

    console.log(message);
}

celciusTofahrenheit(50);
fahrenheitTocelcius(55);