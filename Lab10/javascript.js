var shoppingList=[];
var list=document.getElementById("list");

function listShopping() {
    listOfShopping=[];
    shoppingList.forEach(function(element){
        listOfShopping.push("<li>"+element+"</li>");
    });
    list.innerHTML=listOfShopping.join('');
}

//Buttons to add and take away items. 
function addToEnd() {
    shoppingList.push(prompt("What do you want to add to the end of your list?"));
    listShopping();
}
function removeFromEnd() {
    shoppingList.pop();
    listShopping();
}
function addToStart() {
    shoppingList.unshift(prompt("What do you want to add to the start of your list?"));
    listShopping();
}
function removeFromStart() {
    shoppingList.shift();
    listShopping();
}