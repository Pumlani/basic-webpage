let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe('yearsAgo function' , function(){
    it('should return how many years ago.' , function(){
      var num = '5'
        assert.equal(yearsAgo(num), 2013);

    });
    // it('should return a variable which is a string.' , function(){
    //   assert.typeOf('num', 'string', 'it s a string');
    //
    // });
    it('should return it is not true.' , function(){
      var num = '13'
        assert.notEqual(yearsAgo(num), 2015);

    });
});
