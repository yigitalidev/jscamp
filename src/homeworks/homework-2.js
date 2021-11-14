function friendNumber(number1,number2) {
    let total1 = 0
    let total2 = 0 

   for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            total1 = total1 + i
        }        
    }

    for (let x = 1; x < number2; x++) {
        if (number2 % x == 0) {
            total2 = total2 + x
        }        
    }

    if (number1==total2 && number2==total1) {
        console.log(number1 + " ve " + number2 + " arakadaş sayılardır")
    }
    else{
        console.log(number1 + " ve " + number2 + " arkadaş sayı değilleridir")
    }
}

friendNumber(220,284)