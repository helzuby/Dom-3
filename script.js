// i created a javascript function for the parameter (my select)
function getOptions(){

// to get the text value of each item
const myFruits = document.getElementById("fruits")

//i used the syntax below to get the no of items in the list
numOfItems = document.getElementById("fruits").length;
console.log(numOfItems);

// to get the index value of each dropdown item.
const selectedOption =  myFruits.options[myFruits.selectedIndex.value];

//i am using the for loop to iterate and print all items in the list.
let stringOfOptions = "";
for(let i = 0; i < fruits.length; i++){
 stringOfOptions = stringOfOptions + myFruits.options[i].text + ", ";
    }
 document.getElementById("same").innerHTML = stringOfOptionss
}

