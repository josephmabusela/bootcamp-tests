describe("fromWhere function" , function(){

    it("should return Bellville", function(){
        assert.equal("Bellville", fromWhere("CY"));
    });

    it("should return Paarl", function(){
        assert.equal("Paarl", fromWhere("CJ"));
    });

    it("should return Cape Town", function(){
        assert.equal("Cape Town", fromWhere("CA"));
    });

    it("should return Some other place!" , function(){
        assert.equal("Some other place!", fromWhere());
    });
});
