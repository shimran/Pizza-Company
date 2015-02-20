var newType;
var newSize;
var Pizza = {
  type: "",
  size: 0,
  numSlices: function(newType,newSize) {
    this.type= newType
    this.size = newSize;
    var slices=0;
    if(newType==="cheese"&& newSize === 10)
    return slices+=8;
    else if(newType=="cheese" && newSize == 11)
      return slices+=10;
    else if(newType=="cheese" && newSize == 12)
      return slices+=12;
    else if(newType=="pepperoni" && newSize == 10)
      return slices+=6;
    else if(newType=="pepperoni" && newSize == 11)
      return slices+=8;
    else if(newType=="pepperoni" && newSize == 12)
      return slices+=10;
    else{
      return "ERROR: Please choose an appropriate topping and size";
    }

  }
};

var newPizza = Object.create(Pizza);

//    numSlices: function() {
//        if(cheese && small){
//        = this.weight * this.distance;
//        return rate;
//       }
// };
//
// //
// // $(document).ready(function(){
//   $('form#shipment').submit(function(event){
//
//     shipment.weight = parseFloat($("input#weight").val());
//     shipment.distance = parseFloat($("input#distance").val());
//
//     $("#rate").text(shipment.rate());
//
//     event.preventDefault();
//   });

//});
