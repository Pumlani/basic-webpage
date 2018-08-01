let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck fuction' , function(){
    it('should return that the registration is from Mpumalanga Province.' , function(){
      var num1 = 'HBC 4446 MP';
      var num2 = 'MP'
        assert.equal(regCheck(num1, num2), true);
  });
  it('should tell that the registration is from KZN Province.' , function(){
    var num1 = 'HBC 4446 ND';
    var num2 = 'ND'
      assert.equal(regCheck(num1, num2), true);
});
it('should return that these registrations are not from the same Province.' , function(){

    assert.notEqual('HBC 4446 ND','HBC 4446 MP', "these are not equal");
});
});
