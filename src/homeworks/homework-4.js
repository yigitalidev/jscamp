for (let i = 2; i < 1000; i++) {
    let primeNums = 0;

    for(let y = 2; y < i; y++) {
        if(i % y == 0) {
            primeNums ++;
        }
    }

    if(primeNums == 0 && i!=1) {
        console.log( i + " asal sayıdır");
    }
}