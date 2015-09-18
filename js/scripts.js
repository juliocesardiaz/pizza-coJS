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
    var newPizza;
    $("#add-toppings").click(function(){
        $("#new-toppings").append('<label for="topping">Topping</label>' +
									'<select name="topping" id="topping">' +
										'<option value="cheese">Cheese</option>' +
										'<option value="pepperoni">Pepperoni</option>' +
										'<option value="mushrooms">mushrooms</option>' +
										'<option value="pinepple">pinepple</option>' +
										'<option value="sausage">sausage</option>' +
										'<option value="ham">ham</option>' +
										'<option value="chicken">chicken</option>' +
									'</select>' +
								'<br>')
    });
    
    $("form#new-pizza").submit(function(event) {
       event.preventDefault();
       
       var inputtedQuantity = parseInt($("select#quantity").val());
       var inputtedTopping = $("select#first-topping").val(); 
       var inputtedSize = $("select#size").val();
       
       newPizza = new Pizza(inputtedQuantity, inputtedTopping, inputtedSize);
       
       $(".new-toppings").each(function() {
			var inputtedTopping2 = $("select#topping").val(); 
            newPizza.addTopping(inputtedTopping2);
		});
       
       $(".price").fadeOut();
       $(".price").fadeIn(1000);
       $(".pizza-price").text(newPizza.calculatePrice());
    });
});
