describe('findItemsOver20 function' , function(){
    it('should return 2 items over 20 in the list of objects' , function(){
        assert.deepEqual(
            [{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver20(
                [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}
            ])
        );
    });
});