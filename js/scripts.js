function Pizza(quantity, topping, size){
    var toppings = [];
    toppings.push(topping);
    this.quantity = quantity;
    this.toppings = toppings;
    this.size = size;
};

Pizza.prototype.addTopping = function(newTopping){
  this.toppings.push(newTopping);  
};

Pizza.prototype.calculatePrice = function(){
    var price = 10;
    price += (this.toppings.length * 0.50);
    switch(this.size){
        case "s":
            price += 1;
            break;
        case "m":
            price += 2.50;
            break;
        case "l":
            price += 3.25;
            break;
        case "xl":
            price += 4;
            break;          
    }
    return price;
};

$(document).ready(function() {
});
