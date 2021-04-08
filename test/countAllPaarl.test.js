describe('countAllPaarl function' , () => {
    it("should return one for Paarl in (CL 124,CY 567,CL 345, CJ 456,CL 341 ,CJ)" , () => { 
        assert.equal(1, countAllPaarl('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ'));
    });
});