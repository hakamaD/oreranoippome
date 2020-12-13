// パッケージを読み込む
let http = require('http');

// サーバ機能の初期化
let server = http.createServer();

// リクエストがきたときに呼び出される86

server.on('request', function(req, res)
{
    // 本文（Body部）に文字を表示する
    res.write('Hello, world!');
    res.end();
});

// 指定したIPアドレス、ポート番号でサーバを立てる
server.listen(8000, 'ip-10-0-0-33.ap-northeast-1.compute.internal');