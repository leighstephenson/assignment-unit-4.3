console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Create a global variable named `basket` 
//and set it to an empty array.

let basket = ['']; 

//Create a function called `addItem`. It should:
// take an input parameter for a string `item` : 
// add (.push) the new item to the global array `basket`. 
// return `true` indicating the item was added

 function addItem(foodToAdd) {
    
    let addFood = foodToAdd;
    basket.push(foodToAdd);
    console.log(addFood);
    return true;
}
let result= addItem('cheese');
console.log(result);

//Testing to see if we're logging on own line by adding 'items' to the basket //
addItem('tatertot');
addItem('hotdog');

//Testing to see if we've successfully added the new 'items' // 
console.log(`Basket is ${basket}`);

// Create a function called `listItems`. It should:
// loop over the items in the `basket` array
// console.log each individual item on a new line

//Begin Function: lisItems
function listItems(basket) {

    for(let i = 0; i < basket.length; i++) {
    console.log(basket[i]);}
    
}
(listItems(basket));
//End Function: listItems

// Create a function called `empty`. It should:
// reset the `basket` to an empty array

function empty(resetBasket) {
    basket.splice(0,basket.length);
}
empty(basket);
console.log(basket);