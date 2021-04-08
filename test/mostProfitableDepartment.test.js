var salesData = [{"department":"hardware", "sales":7000, "day":"Tuesday"},{"department":"carpentry", "sales":4000, "day":"Monday"},{"department":"outdoor", "sales":6500, "day":"Wednesday"}]

describe('mostProfitableDepartment function', function(){
    it('Should return the most profitable department', function(){
        assert.deepEqual('hardware', mostProfitableDepartment(salesData));
    });
});