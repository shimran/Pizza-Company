describe("Pizza", function() {
  describe("numSlices()", function() {
    it("Outputs the number of pizzas given the size and type of pizza")
    it("defaults to zero if invalid input is given", function(){
      var testPizza = Object.create(Pizza);
      expect(testPizza.numSlices()).to.equal("ERROR: Please choose an appropriate topping and size");
    });
    it("returns '8' slices for a small, 10 inch pizza", function(){
      var testPizza = Object.create(Pizza);
      expect(testPizza.numSlices("cheese",10)).to.equal(8);
    })


  })
});
