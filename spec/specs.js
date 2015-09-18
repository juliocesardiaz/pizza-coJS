describe('Pizza', function() {
    it("Creates Pizza Obejct", function() {
        var testPizza = new Pizza();
        expect(testPizza).to.eql(new Pizza());
    });
});
