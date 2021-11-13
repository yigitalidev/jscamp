// function addToCart2(productName,quantity,unitPrice) {
    
// }

// addToCart2("Elma",5,10)
// addToCart2("Armut",2,20)
// addToCart2("Limon",3,15)

// let product1 = {productName:"Elma",unitPrice:10,quantity:5}

// function addToCart3(product) {
//     console.log("Ürün : "+product.productName)
//     console.log("Fiyat : "+product.unitPrice)
//     console.log("Adet : "+product.quantity)
// }

// addToCart3(product1);

// let product2 = {productName:"Elma",unitPrice:10,quantity:5} // referance type
// let product3 = {productName:"Elma",unitPrice:10,quantity:5}
// product2=product3
// product2.productName = "KARPUZ"
// console.log(product3.productName)


let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2 // data type
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products) 
}

let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCart4(products)
