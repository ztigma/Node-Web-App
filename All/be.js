
/*
const fs = require('fs');

function load (path, console_log)
{
    fs.readFile
    (
        __dirname + '/' + path
        , 
        (ex, data) => { console_log(data.toString()); return data.toString(); }
    );
    return "";
}
function save(path, data, console_log)
{
    fs.writeFile
    (
        path
        ,
        data
        ,
        function (ex)
        {
            if(ex == null)
            {
                console_log("saved: " + data);
                return;
            }
            console_log(ex.toString());
        }
    );
}
function remove(path, console_log)
{
    fs.unlink(path, console_log);
}
*/

Array.prototype.INSERT = function(index, add)
{
    if(this.length == 0)
    {
        this.push(add);
        return;
    }

    if(index < this.length)
    {
        this.splice(index, 0, add);
    }
    else
    {
        this.splice(this.length - 1, 0, add);
    }
}
Array.prototype.FOR = function ()
{
    var p = arguments;
    var l = new Array(this);

    l.forEach(n => p.forEach(a => a(n)));
}
Array.prototype.REMOVE_ALL = function(predicate)
{
    return this.filter(n => !predicate(n));
}
Array.prototype.REMOVE_AT = function(index)
{
    return this.filter(n => this.indexOf(n) != index);
}
Object.prototype.TO_JSON = function()
{
    return JSON.stringify(this);
}
Object.prototype.TO_OBJECT = function()
{
    return JSON.parse(this);
}

String.prototype.ALERT = function ()
{
    alert(this);
}
Array.prototype.GET_LIST_NAMES = function(name)
{
    var r = "";
    this.forEach(n => r += n[name] + ":");
    return r;
}

/*
https://platzi.com/clases/1759-fundamentos-node/25198-file-system/
    DEV ZONE

*/
function Start ()//Se ejecuta una vez al empezar la pagina
{
    
}

function OnTo ()
{
    SetDebug('DebugList');
}

function OnBack ()
{
    SetDebug('DebugList');
}

var cool = 5;
var memo = 0;
var indice = 0;

function Update ()//Se ejecuta 30 veces por segundo despues de Start ()
{  
    if(time > cool + memo)
    {
        DebugLog(indice++, "un titulo", "un titulo error", "un contenido error");
        memo = time;
    }
}

/*

    INTERNAL SYSTEM ZONE

*/

const App =
{
    speed: 25
    ,
    text_size : 14
    ,
    marginTop: 0
    ,
    marginBotton: 2
    ,
    marginLeft: 0
    ,
    marginRight: 0
}

function LogPrefabMethod (index, title, error_title, error_content)
{
    return `
    <li>
        <button id="index">${index}</button>
    
        <button id="title">${title}</button>
    
        <textarea id="error_title">${error_title}</textarea>
        
        <textarea id="error_content">${error_content}</textarea>
    </li>
    `
    ;
}
function DebugLog (index, title, error_title, error_content)
{
    DebugList.INSERT
    (
        0
        ,
        LogPrefabMethod
        (
            index
            ,
            title
            ,
            error_title
            ,
            error_content
        )
    );
    SetDebug('DebugList');
}
var DebugList = [];

function ClearDebug (id)
{
    var w = document.getElementById(id);

    if(w == null){ return; }

    w.innerHTML = "";
    DebugList = [];
}
function SetDebug (id)
{
    var w = document.getElementById(id);

    if(w == null){ return; }

    w.innerHTML = "";
    DebugList.forEach(n => w.innerHTML += n);
}



class NavModel
{
    constructor(Name, TopBar, MainView)
    {
        this.name = Name;
        this.top_bar = TopBar;
        this.main_view = MainView;
    }
}
const Nav =
[
    new NavModel
    (
        "Home"
        ,
        `
        <link rel="stylesheet" href="../../be.css" />

        <div id="TopBar" class="TopBar">
            <button class="MenuButtons" onclick="BACK()">ATRAS</button>
            <button class="MenuButtons" onclick="TO('Menu')">MENU</button>
            <button id="Title" class="Title">MI MENSAJE</button>
                <script type="text/javascript" src="../../be.js"></script>
        </div>
        `
        ,
        `
        <link rel="stylesheet" href="../../be.css" />

        <input id="Mensaje" class="Mensaje" type="text" placeholder="guarda tu mensaje"/>
        `
    )
    ,
    new NavModel
    (
        "Menu"
        ,
        `
        <link rel="stylesheet" href="../../be.css" />

        <div id="TopBar" class="TopBar">
            <button class="MenuButtons" onclick="BACK()">ATRAS</button>
            <button class="MenuButtons" onclick="TO('Menu')">MENU</button>
                <script type="text/javascript" src="../../be.js"></script>
        
                <div>
                    <button id="Title" class="Title">MENU</button>
                </div> 
        </div>
        `
        ,
        `
        <link rel="stylesheet" href="../../be.css"/>    

        <lo>
            <button id="ToHome" onclick="TO('Home')">MENSAJE</button>
            <button id="ToUser" onclick="TO('User')">USUARIO</button>
            <button id="ToDebug" onclick="TO('Debug')">DEBUG LOG</button>
        </lo>
        
            <script type="text/javascript" src="../../be.js"></script>
        `
    )
    ,
    new NavModel
    (
        "Debug"
        ,
        `
        <link rel="stylesheet" href="../../be.css" />

        <div id="TopBar" class="TopBar">
            <button class="MenuButtons" onclick="BACK()">ATRAS</button>
            <button class="MenuButtons" onclick="TO('Menu')">MENU</button>
            <button class="Clear" onclick="ClearDebug('DebugList')">LIMPIAR</button>
                <script type="text/javascript" src="../../be.js"></script>
        
                <div>
                    <button id="Title" class="Title">DEBUG LOG</button>
                </div>
        </div>
        `
        ,
        `
        <link rel="stylesheet" href="../../be.css"/>

        <ol id="DebugList">
        
        </ol>
        
        <script type="text/javascript" src="../../be.js"></script>
        `
    )
    ,
    new NavModel
    (
        "User"
        ,
        `
        <link rel="stylesheet" href="../../be.css" />

        <div id="TopBar" class="TopBar">
            <button class="MenuButtons" onclick="BACK()">ATRAS</button>
            <button class="MenuButtons" onclick="TO('Menu')">MENU</button>     
                <script type="text/javascript" src="../../be.js"></script>
        
                <div>
                    <button id="Title" class="Title">USUARIO</button>
                </div> 
        </div>
        `
        ,
        `
        <link rel="stylesheet" href="../../be.css" />

        <lo>
            <!--USER NAME-->
            <label class="labels">USERNAME</label>
            <input type="text" id="User" class="Mensaje" placeholder="Set your username"/>
        
            <!--EDAD-->
            <label class="labels">BIRTHDAY</label>
            <input type="date" id="Birth" class="Mensaje" placeholder="Set your birthday"/>
        
            <!--FAVORITE NUMBER-->
            <label class="labels">FAVORITE NUMBER</label>
            <input type="number" id="Number" class="Mensaje" placeholder="Set your number"/>
        
            <!--PASSWORD-->
            <label class="labels">PASSWORD</label>
            <input type="password" id="Pass" class="Mensaje" placeholder="Set your password"/>
            
            <div class="check">
                <label >Show password</label>
                <input type="checkbox" class="checkBox"
                    onclick=
                    "
                        var e = document.getElementById('Pass');
                        var b = e.type == 'password';
                        if(b)
                        {
                            e.type = 'text'
                        }
                        else
                        {
                            e.type = 'password'
                        }
                    "
                />
            </div>
        </lo>
        `
    )
]

var NavHistory = [];

function TO (p)
{
    if(typeof p !== 'string'){  alert("NO ME HACKEES!"); return; }//SUPER CIBER SEGURIDAD

    if(NavHistory.length > 0)
    {
        if(NavHistory[0] == p)
        {
            return;
        }
    }

    var w = Nav.find(n => n.name == p);
    document.getElementById("TopBarView").innerHTML = w.top_bar;
    document.getElementById("MainView").innerHTML = w.main_view;
    Responsive();

    NavHistory.INSERT(0, new String(w.name));

    TriggerUpdate();

    OnTo();
}
function BACK ()
{
    if(NavHistory.length <= 1)
    {
        return;
    }
    p = NavHistory[1];
    var w = Nav.find(n => n.name == p);

    document.getElementById("TopBarView").innerHTML = w.top_bar;
    document.getElementById("MainView").innerHTML = w.main_view;
    Responsive();
    NavHistory = NavHistory.REMOVE_AT(0);

    OnBack();
}

var update = [];
var is_update = false;
var time = 0;

function TriggerUpdate ()
{
    if(is_update) { return; }

    Start();

    update.push(Update);

    setInterval(() => { InvokeUpdate() }, App.speed);

    is_update = true;
}
function InvokeUpdate ()
{
    var w = update;
    time += App.speed/1000;
    w.forEach(n => n.call());

    Responsive();
}
function Responsive()
{
    var w = document.querySelectorAll("*");
    var t = document.querySelectorAll("textarea");

    t.forEach
    (
        n => n.style.height = n.scrollHeight + "px"
    );

    w.forEach
    (
        n => n.style.fontSize = App.text_size * zoom.get
    );
    
    w.forEach
    (
        n => n.style.marginTop = App.marginTop * zoom.get
    );    
    
    w.forEach
    (
        n => n.style.marginBottom = App.marginBotton * zoom.get
    );    
    
    w.forEach
    (
        n => n.style.marginLeft = App.marginLeft * zoom.get
    );    
    
    w.forEach
    (
        n => n.style.marginRight = App.marginRight * zoom.get
    );
    
}

var rect =
{
    get get()
    {
        return document.body.getBoundingClientRect();
    }
}
var zoom =
{
    get get ()
    {
        return rect.get.height / screen.height;
    }
}



//document.getElementsByTagName('button') para getear las etiquetas
//document.querySelector('.test') pick by class or css
//https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll

//var container = document.querySelector('#test'); by id

//get div . get class highlighted . get all childs con etiqueta p
//var matches = container.querySelectorAll('div.highlighted > p');

/*
 querySelectorAll:
 
 puede hacer todos los tipos de seleccion con el query indicado:

 puede escoger:
 por id # id name
 por class . css class name 
 por etiqueta ejmplo button
 por hijos ejemplo padre > hijos
 por padre hijo < padre (supongo) xdd


 MANEJAR C# desde JS

 
.CS File    
    namespace Csharp
    {
      public void CsharpFunction()
      {
        //Code;
      }
    }

JS code:
    function JSFunction() {
            <%#ProjectName.Csharp.CsharpFunction()%> ;
    }


create solution for read .cs archives:
    dotnet new sln

list of cs templates:
    dotnet new -l



const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

function createAsync(){
    return new AsyncFunction('a', `return new Promise((resolve) => {
        setTimeout(() => {resolve(a)}, 1000)
    });`);
}


*/

//expresion labda
//var w = personas.find(function(n){ return n.name == "romel"; })