module.exports = function(listOfItems, threshold){
 var printList=[];

  for (var i = 0; i < listOfItems.length; i++) {
    var current = listOfItems[i];
    if (current.qty > 20){
        printList.push(current);}
  }

  return printList;
}
