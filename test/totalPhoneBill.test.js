describe('totalPhoneBill function', function(){
    
    it('should return the total phone bill', function(){
        
        assert.equal("R7.45", totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('should return the total phone bill', function(){
        
        assert.equal("R3.40", totalPhoneBill('call, sms'));
    });
});