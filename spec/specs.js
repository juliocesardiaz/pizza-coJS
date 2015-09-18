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
});
