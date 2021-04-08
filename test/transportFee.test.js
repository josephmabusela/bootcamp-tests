describe('transportFee function', function(){
    
    it('should return fee for morning shift', function(){
        
        assert.equal('R20', transportFee('morning'));
    });

    it('should return fee for afternoon shift', function(){
        
        assert.equal("R10", transportFee('afternoon'));
    });

    it('should return fee for nightshift', function(){
        
        assert.equal("free", transportFee('nightshift'));
    });

});