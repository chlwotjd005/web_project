var express = require('express');
var fs = require('fs');
// var path = require('path');
// var bodyParser = require('body-parser');

var app = express();
var path = require('path');


app.use(express.static('main'));
app.use(express.static(path.join(__dirname,'public')));


app.get('/productlist_page/productlist_with_mainframe/productlist_with_mainframe.html', function(req, res){
    fs.readFile('./productlist_page/productlist_with_mainframe/productlist_with_mainframe.html', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/html' });
        res.end(data);
    });
});

app.get('/login/login.html', function(req, res){
    fs.readFile('./login/login.html', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/html' });
        res.end(data);
    });
});

app.get('/login/signup.html', function(req, res){
    fs.readFile('/login/signup.html', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/html' });
        res.end(data);
    });
});


app.get('/productlist_page/productlist_with_mainframe/productlist_for_clothes.html', function(req, res){
    fs.readFile('./productlist_page/productlist_with_mainframe/productlist_for_clothes.html', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/html' });
        res.end(data);
    });
});

app.get('/productlist_page/productlist_with_mainframe/productlist_for_top.html', function(req, res){
    fs.readFile('./productlist_page/productlist_with_mainframe/productlist_for_top.html', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/html' });
        res.end(data);
    });
});

app.get('/productlist_page/productlist_with_mainframe/productlist_for_shose.html', function(req, res){
    fs.readFile('./productlist_page/productlist_with_mainframe/productlist_for_shose.html', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/html' });
        res.end(data);
    });
});

app.get('/productlist_page/productlist_with_mainframe/productlist_for_Book1.html', function(req, res){
    fs.readFile('./productlist_page/productlist_with_mainframe/productlist_for_Book1.html', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/html' });
        res.end(data);
    });
});
app.get('/productlist_page/productlist_with_mainframe/productlist_for_Book4.html', function(req, res){
    fs.readFile('./productlist_page/productlist_with_mainframe/productlist_for_Book4.html', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/html' });
        res.end(data);
    });
});
app.get('/productlist_page/productlist_with_mainframe/productlist_for_phone.html', function(req, res){
    fs.readFile('./productlist_page/productlist_with_mainframe/productlist_for_phone.html', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/html' });
        res.end(data);
    });
});
app.get('/productlist_page/productlist_with_mainframe/productlist_for_etc.html', function(req, res){
    fs.readFile('./productlist_page/productlist_with_mainframe/productlist_for_etc.html', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/html' });
        res.end(data);
    });
});
app.get('/productlist_page/productlist_with_mainframe/productlist_for_drink.html', function(req, res){
    fs.readFile('./productlist_page/productlist_with_mainframe/productlist_for_drink.html', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/html' });
        res.end(data);
    });
});
app.get('/productlist_page/productlist_with_mainframe/productlist_for_oneroom.html', function(req, res){
    fs.readFile('./productlist_page/productlist_with_mainframe/productlist_for_oneroom.html', function(error, data){
        res.writeHead(200, {'Contesnt-type': 'text/html' });
        res.end(data);
    });
});

app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

