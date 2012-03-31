var expect = require('expect.js')

describe('expect.js', function() {
  describe('#a/an', function() {
    it('typeof で比較していること', function() {
      expect(undefined).to.be.an('undefined');
      expect({}).to.be.an('object');
      expect('hoge').to.be.a('string');
    });

    it('コンストラクタで比較していること', function() {
      var User = function(name) {
        this.name = name;
      }
      var user = new User('tricknotes');
      expect(user).to.be.an(User);
    });
  });
});
