var fs = require('fs');
var express = require('express');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.set('port', process.env.PORT || 3000);
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public");
});

server.listen(app.get('port'));


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
    'xotbazmanal': [],
    'xotakerbazmanal': [],
    'xotakercharj': [],
    'grasseker': [],
    'grassemer': [],
    'gishmul': [],
    'gishcharj': [],
    'gishkerav': [],
    'gishmer': [],
    'gazbaz': [],
    'gazkerav': [],
    'gazmerav': [],
    'dexinbaz': [],
    'arjmul': [],
    'arjcharj': [],
    'arjmer': [],
    
    
};
io.on('connection', function () {
  

});
  setInterval(function () {
        takter++;
        drawInServer();
        na();
        ha();

var myJSON = JSON.stringify(obj);
        if (takter % 2 == 0) {
            obj.xotbazmanal.push(grassbaz);
            fs.writeFile("grass.json", myJSON);;
            console.log(obj);

        }
         if (takter % 2 == 0) {
            obj.xotakerbazmanal.push(grassebaz);
            fs.writeFile("grass.json", myJSON);;
            console.log(obj);

         }
         if (takter % 2 == 0) {
            obj.xotakercharj.push(grassecharj);
            fs.writeFile("grass.json", myJSON);;
            console.log(obj);

         }
           if (takter % 2 == 0) {
            obj.grassemer.push(grassemer);
            
            fs.writeFile("grass.json", myJSON );;
            console.log(obj);

         }
         if (takter % 2 == 0) {
            obj.grasseker.push(grasseker);
            
            fs.writeFile("grass.json", myJSON);;
            console.log(obj);

         }
          if (takter % 2 == 0) {
            obj. gishmul.push( gishmul);
            
            fs.writeFile("grass.json", myJSON);;
            console.log(obj);

         }
         if (takter % 2 == 0) {
            obj.gishcharj.push( gishcharj);
            
            fs.writeFile("grass.json", myJSON);;
            console.log(obj);

         }
          if (takter % 2 == 0) {
            obj.gishkerav.push( gishkerav);
            
            fs.writeFile("grass.json", myJSON);;
            console.log(obj);

         }
           if (takter % 2 == 0) {
            obj. gishmer.push(  gishmer);
            
            fs.writeFile("grass.json", myJSON);;
            console.log(obj);

         }
            if (takter % 2 == 0) {
            obj. gazbaz.push(  gazbaz);
            
            fs.writeFile("grass.json",myJSON);;
            console.log(obj);

         }
         if (takter % 2 == 0) {
            obj. gazkerav.push(gazkerav);
            
            fs.writeFile("grass.json",myJSON);;
            console.log(obj);

         }
          if (takter % 2 == 0) {
            obj.gazmerav.push(gazmerav);
            
            fs.writeFile("grass.json", myJSON);;
            console.log(obj);

         }
         if (takter % 2 == 0) {
            obj.dexinbaz.push(dexinbaz);
            
            fs.writeFile("grass.json", myJSON);;
            console.log(obj);

         }
          if (takter % 2 == 0) {
            obj.arjmul.push(arjmul);
            
            fs.writeFile("grass.json", myJSON);;
            console.log(obj);

         }
         if (takter % 2 == 0) {
            obj.arjcharj.push(arjcharj);
            
            fs.writeFile("grass.json", myJSON);;
            console.log(obj);

         }
           if (takter % 2 == 0) {
            obj.arjmer.push(arjmer);
            
            fs.writeFile("grass.json", myJSON);;
            console.log(obj);

         }
         
         

    }, 3000);
