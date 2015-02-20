var shipment = {
  weight: 0,
  distance: 0,

  rate: function() {
    rate = this.weight * this.distance;
    return rate;
  }
};


$(document).ready(function(){
  $('form#shipment').submit(function(event){

    shipment.weight = parseFloat($("input#weight").val());
    shipment.distance = parseFloat($("input#distance").val());

    $("#rate").text(shipment.rate());

    event.preventDefault();
  });

});
