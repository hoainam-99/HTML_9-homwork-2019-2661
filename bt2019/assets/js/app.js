
var manufacturerNameTag = document.getElementById('manu-name_id')
var categoryNameTag = document.getElementById('category-name_id')
var productNameTag = document.getElementById('product_id')
var priceTag = document.getElementById('price_id')
var quanityTag = document.getElementById('quanity_id')
var totalPriceTag = document.getElementById('totalPrice_id')
var resultTag = document.getElementById('result_id')


var apple = [
    "Iphone",
    "Ipad",
    "Ipod",
    "Apple Pencil",
    "Apple TV",
    "Apple Watch",
    "Lightning"
]

var samsung = [
    "Focus",
    "Galaxy J",
    "Galaxy S",
    "Galaxy Y", 
    "Galaxy Note", 
    "Galaxy Tab", 
    "Galaxy Ativ Tab", 
    "Galaxy Fold", 
    "Galaxy Z", 
    "Galaxy A", 
    "Galaxy J"
]
 
var LG = [
    "Refrigerator",
    "Air Conditioning",
    "Television",
    "Washing Machine",
    "Bluetooth Speaker",
    "Bluetooth Headphone"
]

var sony = [
    "Television",
    "Bluetooth Speaker",
    "Bluetooth Headphone",
    "Laptop Vaio",
    "Xperia"
]

var google = [
    "Pixel",
    "Google Home",
    "NexusQ",
    "Chromecast"
]

function checkManufacturer(manu){
    switch(manu){
        case 'Apple':{
            categoryNameTag.innerHTML = ""
            for (var i=0; i<apple.length; i++){
                categoryNameTag.innerHTML += `
                    <option value="${apple[i]}">${apple[i]}</option>
                `
            }
            break;
        }
        case 'SamSung':{
            categoryNameTag.innerHTML = ""
            for (var i=0; i<samsung.length; i++){
                categoryNameTag.innerHTML += `
                    <option value="${samsung[i]}">${samsung[i]}</option>
                `
            }
            break;
        }
        case 'LG':{
            categoryNameTag.innerHTML = ""
            for (var i=0; i<LG.length; i++){
                categoryNameTag.innerHTML += `
                    <option value="${LG[i]}">${LG[i]}</option>
                `
            }
            break;
        }
        case 'Sony':{
            categoryNameTag.innerHTML = ""
            for (var i=0; i<sony.length; i++){
                categoryNameTag.innerHTML += `
                    <option value="${sony[i]}">${sony[i]}</option>
                `
            }
            break;
        }
        case 'Google':{
            categoryNameTag.innerHTML = ""
            for (var i=0; i<google.length; i++){
                categoryNameTag.innerHTML += `
                    <option value="${google[i]}">${google[i]}</option>
                `
            }
            break;
        }
    }
}

function selectManu(card){
    var value = card.value
    if(value == '0'){
        categoryNameTag.innerHTML = ""
    }else{
        checkManufacturer(value)
    }
    productNameTag.value = ""
    priceTag.value = ""
    quanityTag.value = ""
    
}

function sum(){
    totalPriceTag.value = priceTag.value * quanityTag.value
}

var productList = []

var currentIndex = -1

function showProduct(){
    resultTag.innerHTML = ''
    for(var i = 0; i < productList.length; i++){
        resultTag.innerHTML += `<tr>
            <td>${i+1}</td>
            <td>${productList[i].productName}</td>
            <td>${productList[i].categoryName}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].quanity}</td>
            <td>${productList[i].manufacturerName}</td>
            <td><button onclick="editBtn(${i})" style="background-color: rgb(92, 204, 92);">Edit</button></td>
            <td><button onclick="deleteBtn(${i})" style="background-color: rgb(230, 163, 39);">Delete</button></td>
        </tr>`
    }
}



function saveData(){
    var product = {
        "manufacturerName": manufacturerNameTag.value,
        "categoryName": categoryNameTag.value,
        "productName": productNameTag.value,
        "price": priceTag.value,
        "quanity": quanityTag.value
    }

    if(currentIndex >= 0){
        productList[currentIndex] = product
        currentIndex = -1
    }else{
        productList.push(product)
    }

    showProduct()
    return false
}

function editBtn(index){
    currentIndex = index
    manufacturerNameTag.value = productList[index].manufacturerName
    checkManufacturer(manufacturerNameTag.value)
    categoryNameTag.value = productList[index].categoryName
    productNameTag.value = productList[index].productName
    priceTag.value = productList[index].price
    quanityTag.value = productList[index].quanity
}

function deleteBtn(index){
    Option = confirm('Are you sure to remove the product?')
    if(!Option) return

    productList.splice(index, 1)
    showProduct();
}

function resetBtn(){
    categoryNameTag.innerHTML = ""
    currentIndex = -1
}