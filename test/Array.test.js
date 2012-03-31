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

  describe('#join()', function() {
    it('引数を省略すると、","で連結されること', function() {
      var a = ['a', 'b'];
      var str = a.join();
      expect(str).to.be('a,b');
    });

    it('引数に"\\n"を与えると"\\n"で連結されること', function() {
      var a = ['a', 'b'];
      var str = a.join('\n');
      expect(str).to.be('a\nb');
    });
  });

  describe('#pop()', function() {
    it('最後の要素を削除すること', function() {
      var a = ['a', 'b'];
      a.pop();
      expect(a).to.eql(['a']);
    });

    it('最後の要素を返すこと', function() {
      var a = ['a', 'b'];
      var poped = a.pop();
      expect(poped).to.be('b');
    });

    it('配列が空だった場合、`undefined`を返すこと', function() {
      var a = [];
      var poped = a.pop();
      expect(poped).to.be.an('undefined');
    });
  });
});
