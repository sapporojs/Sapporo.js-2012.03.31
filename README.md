# [Sapporo.js-2012.03.31](http://atnd.org/events/26577)

[JavaScript: The Good Parts](http://www.amazon.co.jp/dp/4873113911) の内容を理解するために、仕様化テストを書いていきます。

「p.89 8章 メソッド」から進めていきます。

「仕様化テスト」 = 仕様を理解するために記述するテスト

参考: [レガシーコード改善ガイド](http://www.amazon.co.jp/dp/4798116831)

## テストフレームワークの紹介:

* [OUnit](http://docs.jquery.com/QUnit)
 * xUnit 系、 jQuery から分離
* [Jasmine](http://pivotal.github.com/jasmine)
 * BDD 系、 RSpec 風
* [whiskey](http://cloudkick.github.com/whiskey)
 * exports 系
* [mocha](http://visionmedia.github.com/mocha)
 * xUnit, TDD, BDD, exports 系、豊富な出力形式

今回は [mocha](http://visionmedia.github.com/mocha) を使います。

## mocha のインストール手順

Requirements:

* [Node.JS](http://nodejs.org) (0.6.14)
* [mocha](http://visionmedia.github.com/mocha) (0.14.1)
* [expect.js](https://github.com/LearnBoost/expect.js) (0.1.2)

### Node.JS

公式サイトからダウンロードしてインストール

* http://nodejs.org/#download

確認

```sh
$ node -v
v0.6.14
```

### mocha

[npm](http://npmjs.org/) を利用してインストール

```sh
$ npm install -g mocha
```

確認

```sh
$ mocha --version
1.0.0
```

### expect.js

[npm](http://npmjs.org/) を利用してインストール

```sh
$ npm install expect.js
```

確認

```sh
$ node
require('expect.js')
'0.1.2'
```
