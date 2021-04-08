describe('isFromBellville function' , function(){
    it('should return true if a car is from Bellville' , function(){
        assert.isBoolean(isFromBellville("CY"));
    });
    it('should return false if a car is not from Bellville', function(){
        assert.isBoolean(isFromBellville("CJ"));
    })
});