let assert = require("assert");
let transportFee = require("../transportFee");

describe('transportFee fuction' , function(){
    it('should print out transport fee of the morning-shift.' , function(){

        assert.equal(transportFee('morning'), 'R20');
    });
    it('should print out transport fee of the afternoon-shift.' , function(){

        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('should print out transport fee of the night-shift.' , function(){

        assert.equal(transportFee('niftshift'), 'free');
    });
});
