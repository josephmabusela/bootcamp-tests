describe('findItemsOver function' , function(){
    it('should return 2 items over 25' , function(){
        assert.deepEqual(
            [{"name":"pears","qty":37},{"name":"bananas","qty":27}],
            findItemsOver(
                [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}], 25
            )
        );
    });
});