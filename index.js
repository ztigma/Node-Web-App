const fs = require('fs');
const path = require('path');

// Require express and create an instance of it
const express = require('express');
const app = express();

Array.prototype.LIST_TO_STRING = function (plus)
{
    var r = "";
    for(var i = 0; i < this.length; i++)
    {
        if(i < this.length - 1)
        {
            r += this[i] + plus;
        }
    }
    return r;
}
Array.prototype.REMOVE_AT = function(index)
{
    return this.filter(n => this.indexOf(n) != index);
}

//"folder/file.txt".SAVE("mas data");
//"test.txt".SAVE("LO LOGRASTE");
String.prototype.SAVE = function(data)
{
    var dir = this.split("/");
    //console.log(dir);
    var dirpath = dir.LIST_TO_STRING("/");
    //console.log(dirpath);

    if(!fs.existsSync(dirpath))
    {
        fs.mkdirSync(dirpath, {recursive: true});
    }

    fs.writeFile
    (
        path.join(__dirname, this.toString())
        ,
        data
        ,
        function (ex)
        {
            if(ex == null)
            {
                console.log("saved: " + data);
                return;
            }
            console.log(ex.toString());
        }
    );
}

/*
"test.txt".LOAD
(
    function (d)
    { 
        console.log("llego: " + d); 
    }
);
*/
String.prototype.LOAD = function(method)
{
    fs.readFile
    (
        path.join(__dirname, this.toString())
        ,
        function(ex, data)
        {
            if(data != null)
            {
                method(data.toString());
            }
            else
            {
                throw "error: " + ex.toString();
            }
        }
    );
}


//get: a pedido del cliente
//use: error?

//app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "All"))) //app.use indica al cliente que puede usar del servidor

//app.set("view engine", "ejs")
//app.set("PageShell", path.join(__dirname, "PageShell"))

// on the request to root (localhost:3000/)
app.get('/', function (req, res) 
{ //los nombres de los parametros no los puedes cambiar!
    fs.readFile
    (
        __dirname + '/PageShell/' + "PageShell.html"
        , 
        (ex, data) => { res.send(data.toString()); }
    );

    "persistence/folder/file.txt".SAVE("persistencia exitosa");

});

// On localhost:3000/welcome
app.get('/welcome', function (req, res) 
{
    res.send('<b>Hello</b> welcome to my http server');
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) 
{
    res.status(404).send("404 THAT WORLD NEVER EXIST");
});

// start the server in the port 3000 !
app.listen(3000, function () 
{
    console.log('app listening on port 3000.');
});