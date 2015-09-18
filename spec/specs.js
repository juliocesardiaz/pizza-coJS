describe('Pizza', function() {
    it("Creates Pizza Obejct", function() {
        var testPizza = new Pizza();
        expect(testPizza).to.eql(new Pizza());
    });
    
    it("Check quantity of Pizza", function() {
        var testPizza = new Pizza(2, "cheese", "s");
        expect(testPizza.quantity).to.equal(2);
    });
    
    it("Check toppings of Pizza", function() {
        var testPizza = new Pizza(2, "cheese", "s");
        expect(testPizza.toppings).to.eql(["cheese"]);
    });
    
    it("Check size of Pizza", function() {
        var testPizza = new Pizza(2, "cheese", "s");
        expect(testPizza.size).to.equal("s");
    });
    
    it("Check if adds Toppings to Pizza", function() {
        var testPizza = new Pizza(2, "cheese", "s");
        var topping1 = "peperonni";
        var topping2 = "mushrooms";
        testPizza.addTopping(topping1);
        testPizza.addTopping(topping2);
        expect(testPizza.toppings).to.eql(["cheese", "peperonni", "mushrooms"]);
    });
    
    it("Calculates price of Pizza", function() {
        var testPizza = new Pizza(2, "cheese", "xl");
        var topping1 = "peperonni";
        var topping2 = "mushrooms";
        testPizza.addTopping(topping1);
        testPizza.addTopping(topping2);
        expect(testPizza.calculatePrice()).to.equal(31.00);
    });
    
    it("Calculates price of Pizza", function() {
        var testPizza = new Pizza(1, "cheese", "s");
        expect(testPizza.calculatePrice()).to.equal(11.5);
    });
});
