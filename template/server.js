
const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');

const open = require('open');

module.exports = function(config) {
    var app = express();

    app.use(compression());
    app.set('view cache', true)
    app.use(cors());
    app.use(bodyParser.urlencoded({limit:'5mb',extended:true}));
    app.use(bodyParser.json({limit:'5mb'}));
    app.use(cookieParser());

    app.use('/', express.static(path.resolve(__dirname, './dist')))

    var server = http.createServer(app);

    server.addListener('error', (err) => {
        console.log(err);
    })

    server.listen(config.port,'0.0.0.0', function(){
        console.log('listening on http://localhost:' + config.port);
        open('http://localhost:' + config.port, {app: ['chrome',]});
    }).on('error', function(err){
        console.log(err);
    })
}