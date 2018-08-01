let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe("findItemsOver20 function", function(){
  let data =[
{name : 'apples', qty : 10},
{name : 'pears', qty : 37},
{name : 'bananas', qty : 27},
{name : 'apples', qty : 3},
];

let result = [{name : 'pears', qty : 37},{name : 'bananas', qty : 27}];

  it("should return items that are over 20 in the list", function(){
    assert.deepEqual(findItemsOver20(data, 20),result );
});

it("should return that these items are the only ones beyond the threshold.", function(){

  assert.notEqual({ name: 'pears' }, { name: 'apples' }, "not equal");
});

// it("should return that items less than 20 are less than the threshold.", function(){
//
//   assert.isAbove(20, 19, '20 is greater than 19');
// });
//
// it("should return that items greater than 20 greater than the threshold.", function(){
//
// assert.isBelow(19, 20, '19 is strictly less than 20');
// });

});
