var expect = require('expect.js');

describe('Array', function() {
  describe('#concat()', function() {
    it('引数に配列を渡した際に、その配列を展開して結合した新しい配列を返すこと', function() {
      var a = ['a', 'b', 'c'];
      var b = ['x', 'y', 'z'];
      var c = a.concat(b, true);
      expect(c).to.eql(['a', 'b', 'c', 'x', 'y', 'z', true]);
    });
  });
});
