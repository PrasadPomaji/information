var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(3000, function () {
    var
        host,
        port;

    host = server.address().address;
    port = server.address().port;
    console.log("Example app listening at http://localhost:%s", port)
});
