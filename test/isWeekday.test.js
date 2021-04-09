describe("isWeekday function" , function(){
    it("should return true if the day is a weeekday" , function(){
        assert.equal(true, isWeekday("Monday"));
    });
    it("should return false if the day is not a weekday", function(){
        assert.equal(false, isWeekday("Saturday"));
    });
});
