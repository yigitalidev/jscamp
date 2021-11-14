function addToCart(quantitiy,productName="Elma") {
    console.log("Sepete eklendi : ürün : " +productName + " adet : " +quantitiy)
}

//addToCart("Elma")
addToCart()
// addToCart("Karpuz")

let sayHello = ()=>{
    console.log("Hello World") // Arrow Func.
}

sayHello()



let sayHello2 = function() {
    console.log("Hello World 2") 
}
sayHello2()


function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma",unitPrice:10,quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Fiyat : "+product.unitPrice)
    console.log("Adet : "+product.quantity)
}

addToCart3(product1);

let product2 = {productName:"Elma",unitPrice:10,quantity:5} // referance type
let product3 = {productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName = "KARPUZ"
console.log(product3.productName)


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


function add(bisey,...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total += numbers[i]
    }
    console.log(bisey) // Cevap 20'dir bisey parametresi fonksiyonun ilk elemanıdır.
    console.log(total) // total parametresi ise bisey parametresi haricindeki tüm elemanları sahiplenir.
}

add(20,30,40,50)


let numbers = [30,10,500,600]
console.log(Math.max(...numbers))


// let [icAnadolu,marmara] = ["İç Anadolu","Marmara","Karadeniz"]
// console.log(icAnadolu)

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu)
console.log(icAnadoluSehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } = {productName:"Elma", unitPrice:10, quantity:5})
console.log(newProductName)

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

