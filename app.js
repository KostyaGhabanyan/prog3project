var express = require('express'),  
    app = express.createServer(express.logger()),
    io = require('socket.io').listen(app);

// Configuration

app.configure(function() {  
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {  
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {  
  app.use(express.errorHandler());
});

// Heroku won't actually allow us to use WebSockets
// so we have to setup polling instead.
// https://devcenter.heroku.com/articles/using-socket-io-with-node-js-on-heroku
io.configure(function () {  
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});

// Routes

var port = process.env.PORT || 5000; // Use the port that Heroku provides or default to 5000  
app.listen(port, function() {  
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});


app.get("/", function (req, res) {
    res.redirect("public");
});

function ha() {
    var l = Math.floor(Math.random() * 4 + 1);

    console.log(l);

    if (l == 1) {
        k = "#EEDCB0";


    }
    if (l == 2) {
        k = "#C5E1B3";

    }
    if (l == 3) {
        k = "#E5F0A8";

    }
    if (l == 4) {
        k = "#EFEFEF";

    }
}
ha();



matrix = [];
xQanak = 50;
yQanak = 50;

grassArr = [];
xotaker = [];
gish = [];
kextotxot = [];
gazg = [];
arja = [];



var dexin = require("./class/class.grass.js");
var gaz = require("./class/class.gaz.js");
var gishatich = require("./class/class.gishatich.js");
var grass = require("./class/class.grass.js");
var GrassEater = require("./class/class.GrassEater.js");
var arj = require("./class/class.arj.js");
grassbaz = 0;
dexinbaz = 0;
grassebaz = 0;
grassecharj = 0;
grasseker = 0;
grassemer = 0;
gishmul = 0;
gishcharj = 0;
gishkerav = 0;
gishmer = 0;
gazbaz = 0;
gazkerav = 0;

gazmerav = 0;
arjcharj = 0;
arjmer = 0;
arjmul = 0;
arjkerav = 0;
for (var y = 0; y < yQanak; y++) {
    matrix[y] = [];
    for (var x = 0; x < xQanak; x++) {
        matrix[y][x] = Math.floor(Math.random() * 7)

    }
}



for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var newGrass = new grass(x, y, 1);
            grassArr.push(newGrass);

        }
        else if (matrix[y][x] == 2) {
            var eater = new GrassEater(x, y, 2);
            xotaker.push(eater);
        }
        else if (matrix[y][x] == 3) {
            var yes = new gishatich(x, y, 3);
            gish.push(yes);
        }
        else if (matrix[y][x] == 4) {
            var li = new dexin(x, y, 4);
            kextotxot.push(li);
        }
        else if (matrix[y][x] == 5) {
            var gaz1 = new gaz(x, y, 5);
            gazg.push(gaz1);
        }
        else if (matrix[y][x] == 6) {
            var arj1 = new arj(x, y, 6);
            arja.push(arj1);
        }
    }
}








function drawInServer() {
    for (i in grassArr) {
        grassArr[i].mul();
    }
    for (i in xotaker) {
        xotaker[i].eat();
    }
    for (i in gish) {
        gish[i].eat();
    }
    for (i in kextotxot) {
        kextotxot[i].mul()
    }
    for (i in gazg) {
        gazg[i].eat()
    }
    // for (i in gazg) {
    //     gazg[i].mul()
    // }
    for (i in arja) {
        arja[i].eat()
    }

    io.sockets.emit("matrix", [matrix, k]);
}
function na() {
    for (i in xotaker) {
        xotaker[i].die();
    }
    for (i in kextotxot) {
        kextotxot[i].mul()
    }
}
var takter = 0;
var obj = {
    'xotQanak': [],
    'xotakerQanak': [],
};
io.on('connection', function () {
    setInterval(function () {
        takter++;
        drawInServer();
        na();
        ha();


        if (takter % 2 == 0) {
            obj.xotQanak.push(grassbaz);
            fs.writeFile("grass.json", obj);;
            console.log(obj);

        }
    }, 3000);


});