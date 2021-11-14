let perfectNums = 0

for (let i = 0; i <= 1000; i++) {
    for (let x = 0; x < i; x++) {
        if (i%x == 0) {
            perfectNums += x
        }
        if (i*2==perfectNums) {
            console.log(i + " Mükemmel Sayıdır")
        }
    }
}