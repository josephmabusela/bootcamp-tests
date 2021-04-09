describe('yearsAgo function', function(){
    it('should return the number of years ago', function(){
        assert.equal(11, yearsAgo(2010));
    });

    it('should return the number of years ago', function(){
        assert.equal(21, yearsAgo(2000));
    });

});