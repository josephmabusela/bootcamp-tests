describe('countAllFromTown function' , function(){
    it("should return 3 from stellies in (CL 124,CY 567,CL 345, CJ 456,CL 341 ,CL)" , function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
});