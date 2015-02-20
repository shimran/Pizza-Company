
var Pizza = {
  type: "",
  size: 0,
  numSlices: function(newType,newSize) {
    this.type = newType;
    this.size = newSize;
    var slices=0;
    if (newType == "Cheese" && newSize === 10){
    return slices+=8;
    }else if(newType == "Cheese" && newSize === 11){
      return slices+=10;
    }else if(newType == "Cheese" && newSize === 12){
      return slices+=12;
    }else if(newType == "Pepperoni" && newSize === 10){
      return slices+=6;
    }else if(newType == "Pepperoni" && newSize === 11){
      return slices+=8;
    }else if(newType == "Pepperoni" && newSize === 12){
      return slices+=10;
    }else{
      return "ERROR: Please choose an appropriate topping and size";
    }

  }
};

var newPizza = Object.create(Pizza);



$(document).ready(function(){
 $('form#numberOfSlices').submit(function(event){
   event.preventDefault();
    var newType  = $("#pizzaType :selected" ).val();
    var newSize  = parseInt($("#pizzaSize :selected").val());
    debugger;
    $("#slices").text(newPizza.numSlices(newType,newSize));


   });

});
