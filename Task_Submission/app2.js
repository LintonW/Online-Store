//getting the elements 
const body = document.getElementById("cartItem");
const cartTotal = document.querySelector("#cartTotal");
const vatAmount = document.querySelector("#vat");
const code = document.querySelector("#code");
const addDiscount = document.querySelector("#addDiscount");
const express = document.querySelector("#express");
const standard = document.querySelector("#standard");
const confirmOrder = document.querySelector("#confirmOrder");

//checking if local storage has data
if (localStorage.productData) {

    products = JSON.parse(localStorage.productData);  

    //looping through the keys in product array
    for(let i in products){

        //creating the image element
        let a = document.createElement("IMG");
        a.setAttribute("src", products[i].image);
        document.getElementById("cartItem").appendChild(a);

        //creating the p element
        let x = document.createElement("p");
        let y = document.createTextNode(products[i].title + ' ' + products[i].colour + ' R' + products[i].price);
        x.appendChild(y);
        document.getElementById("cartItem").appendChild(x);

        //creating the delete button as well as its function
        let dltButton = document.createElement("button");
        dltButton.id = ("deleteBtn");
        dltButton.innerHTML = "Remove";

        dltButton.addEventListener('click', function dltSong(){
            products.splice(i, 1);
            localStorage.productData = JSON.stringify(products);
            location.reload();
        });

        //appending the elements to the body
        body.appendChild(dltButton);

        //updating the running total and setting it in local storage
        let runningT = [];
        for (let i = 0; i < products.length; i++) {
            runningT = Number(runningT) + products[i].price;
        }
        localStorage.setItem("total",runningT);

    }
        
} 

//setting the total in local storage to 0
if (products.length == 0) {
    localStorage.setItem("total","0");
}

//Displaying the total on the document
let total = localStorage.getItem("total");
cartTotal.innerHTML = "Your total : R" + total;

//Calculating the VAT. VAT is included in this case not added.
let vat = () =>{
    let vat = total * 0.14;
    vat = vat.toFixed(2);
    vatAmount.innerHTML = "VAT Included : VAT Amount R" + vat;
} 
vat();

//Calculating the discount when the correct code is entered.
//The code is SAVE20
let discount = () => {
    if (code.value === "SAVE20") {
        alert("Discount Added!");
        let discountAmount = total * 0.2;
        total = total - discountAmount;
        cartTotal.innerHTML = "Your total : R" + total;
        vat();
        
    } else {
        alert("Invalid Discount Code");
        
    }
}

addDiscount.addEventListener('click', () =>{
    discount();
});

//Checking which option is selected and if express option is selected it deducts R100 from total
//Also updating the vat function
let expressSelected = () => {
    let itis = express.selected; 
    let itisnt = standard.selected;

    if (itis){
        total = Number(total) + 100;
        cartTotal.innerHTML = "Your total : R" + total;
        alert("Express Delivery Selected");
        vat();
    };

    if (itisnt) {
        location.reload();
    }
}

//Generating random numbers for the reference number and alerting that the order was successful
let referenceNo = () => {
    let random = "";
    let randomNum = 0;
    for (let i = 0; i < 10; i++) {
        randomNum = Math.floor(Math.random() * 10);
        random = random + randomNum;
        
    }

    alert("Your order was successful. Ref Number is : " + random);
};

confirmOrder.addEventListener('click', () => {
    referenceNo();
    location.reload();
});


    




