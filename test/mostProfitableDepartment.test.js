var salesData = [{"department":"hardware", "sales":7000, "day":"Tuesday"},{"department":"carpentry", "sales":4000, "day":"Monday"},{"department":"outdoor", "sales":6500, "day":"Wednesday"}]

var salesData2 = [{"department":"hardware", "sales":5000, "day":"Tuesday"},{"department":"carpentry", "sales":9000, "day":"Monday"}]

describe('mostProfitableDepartment function', function(){
    it('Should return the most profitable department', function(){
        assert.deepEqual('hardware', mostProfitableDepartment(salesData));
    });

    it('Should return the most profitable department', function(){
        assert.deepEqual('carpentry', mostProfitableDepartment(salesData2));
    });
});