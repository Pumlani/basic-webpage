module.exports = function(listOfItems, threshold){
 var List=[];

  for (var i = 0; i < listOfItems.length; i++) {
    var item = listOfItems[i];
    if (item.qty > 20){
        List.push(item);}
  }

  return List;
}
