describe('regCheck function' , function(){
    it('should return true if the location matches the plate' , function(){
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    });
    it("should return false if the location does not match the plate", function(){
        assert.equal(false, regCheck('DV 23 NB MP', 'GP'))
    })
});