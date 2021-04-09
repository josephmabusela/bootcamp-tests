describe('greet function' , function(){
    it('should greet Bob' , function(){
        assert.equal(greet("Bob"), "Hello, Bob");
    });

    it('should greet Kopano' , function(){
        assert.equal(greet("Kopano"), "Hello, Kopano");
    });
});