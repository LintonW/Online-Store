//Initializing arrays and parsing the local storage data
let products = [];
if (localStorage.productData) {
    products = JSON.parse(localStorage.productData);
}


let runningT = [];
if (localStorage.total){
    runningT = JSON.parse(localStorage.total);
}


//Constructor Function with all products declared
function Product(title, colour, price, image){
    this.title = title;
    this.colour = colour;
    this.price = price;
    this.image = image;
}

let gray = new Product("Apple Watch Series 6", "Space Grey", 11999, "images/apple_watch_series_6_gps_44mm_space_gray_aluminum_black_sport_band_34r_screen__usen.webp");
let silver = new Product("Apple Watch Series 6", "Silver", 11999, "images/apple_watch_series_6_gps_44mm_silver_aluminum_white_sport_band_34r_screen__usen.webp");
let blue = new Product("Apple Watch Series 6", "Blue", 11999, "images/apple_watch_series_6_gps_44mm_blue_aluminum_deep_navy_sport_band_34r_screen__usen.webp");
let pink = new Product("Apple Watch Series 6", "Pink", 11999, "images/apple_watch_series_6_gps_44mm_gold_aluminum_pink_sand_sport_band_34r_screen__usen.webp");
let red = new Product("Apple Watch Series 6", "Red", 11999, "images/apple_watch_series_6_gps_44mm_red_aluminum_product_red_sport_band_34r_screen__usen.webp");
let gold = new Product("Apple Watch Series 6", "Gold", 18299, "images/apple_watch_series_6_cellular_44mm_gold_stainless_steel_gold_milanese_loop_34r_screen__usen.webp");

//Event listeners for the addtocart buttons. 
document.getElementById("addGray").addEventListener('click', () =>{
    //setting the objects into the local storage
    products.push(gray);
    localStorage.productData = JSON.stringify(products);

    //Setting the running total and adding it to the local storage
    runningT = Number(runningT) + gray.price;
    localStorage.total = JSON.stringify(runningT);
    alert("The total is : R" + runningT);

});

document.getElementById("addSilver").addEventListener('click', () => {
    products.push(silver);
    localStorage.productData = JSON.stringify(products);
    runningT = Number(runningT) + silver.price;
    localStorage.total = JSON.stringify(runningT);
    alert("The total is : R" + runningT);
    
});


document.getElementById("addBlue").addEventListener('click', () => {
    products.push(blue);
    localStorage.productData = JSON.stringify(products);
    runningT = Number(runningT) + blue.price;
    localStorage.total = JSON.stringify(runningT);
    alert("The total is : R" + runningT);
});

document.getElementById("addPink").addEventListener('click', () => {
    products.push(pink);
    localStorage.productData = JSON.stringify(products);
    runningT = Number(runningT) + pink.price;
    localStorage.total = JSON.stringify(runningT);
    alert("The total is : R" + runningT);
});

document.getElementById("addRed").addEventListener('click', () => {
    products.push(red);
    localStorage.productData = JSON.stringify(products);
    runningT = Number(runningT) + red.price;
    localStorage.total = JSON.stringify(runningT);
    alert("The total is : R" + runningT);
});

document.getElementById("addGold").addEventListener('click', () => {
    products.push(gold);
    localStorage.productData = JSON.stringify(products);
    runningT = Number(runningT) + gold.price;
    localStorage.total = JSON.stringify(runningT);
    alert("The total is : R" + runningT);
});








