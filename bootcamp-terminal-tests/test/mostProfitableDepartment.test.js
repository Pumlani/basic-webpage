let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");

describe("mostProfitableDepartment function", function(){
  let salesData = [
        {department : 'hardware', sales : 4500},
        {department : 'outdoor', sales : 1500},
        {department : 'carpentry', sales : 5500},
        {department : 'hardware', sales : 7500},
        {department : 'outdoor', sales : 2505},
        {department : 'carpentry', sales : 1540},
        {department : 'hardware', sales : 1500},
        {department : 'outdoor', sales : 8507},
        {department : 'carpentry', sales : 8009},
        {department : 'hardware', sales : 12000},
        {department : 'outdoor', sales : 18007},
        {department : 'carpentry', sales  : 6109},
        {department : 'hardware', sales : 7005},
        {department : 'outdoor', sales : 12006},
        {department : 'carpentry', sales : 16109},
    ];
  it("should return the most profitable department on the week.", function(){
    assert.equal("outdoor",mostProfitableDepartment("salesData"));
});

it("should return that these sale figures are not the same.", function(){
  assert.notEqual({department : 'outdoor', sales : 1500},{department : 'outdoor', sales : 18007});

});

});
