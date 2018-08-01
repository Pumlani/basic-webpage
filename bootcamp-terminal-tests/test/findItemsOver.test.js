let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe("findItemsOver function", function(){
  let data =[
{name : 'apples', qty : 10},
{name : 'pears', qty : 37},
{name : 'bananas', qty : 27},
{name : 'apples', qty : 3},
];

let result = [{name : 'pears', qty : 37},{name : 'bananas', qty : 27}];

  it("should return products that have quantity higher than the threshold", function(){
    assert.deepEqual(findItemsOver(data, 25),result );
});

it("should return that these numbers are not equivalent.", function(){
  assert.notEqual(20,25,"these are not equal");
});

// it("should return that items less than 25 are less than the threshold.", function(){
//
//   assert.isAbove(25, 19, '25 is greater than 19');
// });
//
// it("should return that items greater than 25, are greater than the threshold.", function(){
//
// assert.isBelow(21, 25, '21 is strictly less than 25');
// });

});
