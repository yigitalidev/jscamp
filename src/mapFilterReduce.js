let cart =  [
    {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"Bardak",quantity:2,unitPrice:30},
    {id:3,productName:"Kalem",quantity:1,unitPrice:20},
    {id:4,productName:"Şarj Cihazı",quantity:2,unitPrice:100},
    {id:5,productName:"Kitap",quantity:3,unitPrice:30},
    {id:6,productName:"Pot",quantity:5,unitPrice:150},
]

cart.map(product=>{
    console.log(product.productName + " : " + product.unitPrice * product.quantity) // map
})

let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity,0)
console.log(total)


let quantityOver2 = cart.filter(product=>product.quantity>2) // filter
console.log(quantityOver2)

function addToCard(sepet) {
    sepet.push({id:7,productName:"Ruhsat",quantity:1,unitPrice:20})   
}

addToCard(cart)

console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)