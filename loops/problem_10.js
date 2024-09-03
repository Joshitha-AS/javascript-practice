let price=200;
let items=6;
let discount=20;
if (price>100 || items>5){
    let price1= price*discount/100;
    let total=price-price1 ;
    console.log(total);
    console.log("discount applied")
}
else{
    console.log("no discount")
}