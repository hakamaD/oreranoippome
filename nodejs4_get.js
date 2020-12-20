// パッケージを読み込む
let http = require('http');
let url = require('url');

// サーバ機能の初期化
let server = http.createServer();

server.on('request', function(req, res)
{
    // GETリクエストの場合
    if (req.method == 'GET')
    {
        // リクエストの情報を取得する
        let content = url.parse(req.url, true);

        // .queryに配列としてパラメータとデータが入っている
        res.write('param = ' + content.query['param']);
        res.end();
    }
});

// 指定したIPアドレス、ポート番号でサーバを立てる
server.listen(8000, 'ip-10-0-0-33.ap-northeast-1.compute.internal');