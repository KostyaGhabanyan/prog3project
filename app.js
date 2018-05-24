var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

server.listen(3000);

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




matrix = [];
xQanak = 50;
yQanak = 50;

grassArr = [];
xotaker = [];
gish = [];
kextotxot = [];
gazg = [];
arja =[];


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
gishcharj = 0
gishkerav = 0;
gishmer = 0;
gazmer = 0;
gazkerav = 0;
gazmerav = 0;
arjcharj = 0;
arjmer =0;
arjmul = 0;
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
    for (i in arja) {
        arja[i].eat()
    }

    io.sockets.emit("matrix", [matrix, k]);
}
function  na(){
    for (i in xotaker) {
        xotaker[i].die();
    }
    for (i in kextotxot) {
        kextotxot[i].mul()
    }
  }

io.on('connection', function () {
    setInterval( function(){
        drawInServer();
        na();


        }, 3000);


});