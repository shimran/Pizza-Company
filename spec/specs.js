describe("Pizza", function() {
  describe("numSlices()", function() {
    it("Outputs the number of pizzas given the size and type of pizza")

    it("returns 'ERROR...' if invalid input is given", function(){
      var testPizza = Object.create(Pizza);
      expect(testPizza.numSlices()).to.equal("ERROR: Please choose an appropriate topping and size");
    });

    it("returns '8' slices for a small, 10 inch cheese pizza", function(){
      var testPizza = Object.create(Pizza);
      expect(testPizza.numSlices("cheese",10)).to.equal(8);
    })

    it("returns '10' slices for a small, 11 inch cheese pizza", function(){
      var testPizza = Object.create(Pizza);
      expect(testPizza.numSlices("cheese",11)).to.equal(10);
    })
    it("returns '12' slices for a large, 12 inch cheese pizza", function(){
      var testPizza = Object.create(Pizza);
      expect(testPizza.numSlices("cheese",12)).to.equal(12);
    })
    it("returns '6' slices for a small, 10 inch pepperoni pizza", function(){
      var testPizza = Object.create(Pizza);
      expect(testPizza.numSlices("pepperoni",10)).to.equal(6);
    })
    it("returns '8' slices for a small, 10 inch pepperoni pizza", function(){
      var testPizza = Object.create(Pizza);
      expect(testPizza.numSlices("pepperoni",11)).to.equal(8);
    })
    it("returns '8' slices for a small, 10 inch pepperoni pizza", function(){
      var testPizza = Object.create(Pizza);
      expect(testPizza.numSlices("pepperoni",12)).to.equal(10);
    })
    it("returns 'ERROR...' for cheese options other than 10,11,12 ", function(){
      var testPizza = Object.create(Pizza);
      expect(testPizza.numSlices("cheese",15)).to.equal("ERROR: Please choose an appropriate topping and size");
    })

    it("returns 'ERROR...' for pepperonni options other than 10,11,12 ", function(){
      var testPizza = Object.create(Pizza);
      expect(testPizza.numSlices("pepperoni",15)).to.equal("ERROR: Please choose an appropriate topping and size");
    })

    it("returns 'ERROR...' for options other than cheese  || pepperoni ", function(){
      var testPizza = Object.create(Pizza);
      expect(testPizza.numSlices("pineapple",10)).to.equal("ERROR: Please choose an appropriate topping and size");
    })





  })
});
