describe('countRegNumber function' , function(){
    it("should return 3 for number plates in (CA 182736,CY 523519,CJ 812328)" , function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
});