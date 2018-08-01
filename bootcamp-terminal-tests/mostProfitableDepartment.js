module.exports = function(salesData){

  var mostProfitable = {
    department : "outdoor",
    sales : 4500
  };

  // loop over the listOfPeople
  for (var i = 0; i < salesData.length; i++) {
    var currentDapartment = salesData[i];

    if (currentDapartment.sales > mostProfitable.sales){
        mostProfitable = currentDapartment;
    }
  }

  return mostProfitable.department;
}
