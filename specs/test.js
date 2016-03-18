describe('sign-in', function() {
  it('should error on no form', function (){
    return browser
      .url('/')
      .element('#foo')
      .setValue('.bar', 'foo');
  });
});
