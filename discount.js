//object literals
let oldprice=50000
let discount=10
let actualproductprice={oldprice,discount,
calculateactul(){
return oldprice-((oldprice*discount)/100)
}	
}
console.log(actualproductprice.calculateactul())