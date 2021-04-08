describe("isWeekday function" , function(){
    it("should return true if the day is a weeekday" , function(){
        assert.isBoolean(isWeekday(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]));
    });
    it("should return false if the day is not a weekday", function(){
        assert.isBoolean(isWeekday(["Saturday", "Sunday"]));
    });
});
