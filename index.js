const http = require('http');
const request = require('request');
const url = require('url');
const fs = require('fs');
const filenamify = require('filenamify');

http.createServer(function (req, resp) {
    const uri = url.parse(req.url).query;
    const path = `./cache/${filenamify(uri)}`;

    fs.stat(path, (err, stats) => {
        if (err) {
            var x = request.get(uri);
            x.pipe(resp);
            x.pipe(fs.createWriteStream(path));
        } else if ( stats.isFile() ) {
            console.log('from cache :)')
            fs.createReadStream(path).pipe(resp);
        } else {
            console.log('this should not happen!');
        }
    });

    console.log(path);
}).listen(8888);
