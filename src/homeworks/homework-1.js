function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let isPrime = 0
    
    for(let a = 2; a < numbers[i]; a++) {
        if(numbers[i] % a == 0) {
            isPrime++;
        }
    }

    if (isPrime==0 && numbers[i] != 2) {
        console.log(numbers[i] + " Asaldır")
    }else {
        console.log(numbers[i] + " Asal Değildir")
        }
    }
}
findPrime(3,4,5,1,54,6)
