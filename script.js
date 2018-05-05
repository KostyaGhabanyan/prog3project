var matrix = [];
var xQanak = 50;
var yQanak = 50;
var side = 12;
var grassArr = [];
var xotaker = [];
var gish = [];
var kextotxot = [];
var gazg = [];
function setup() {
    createCanvas(xQanak * side, yQanak * side);
    background('#acacac');
    frameRate(3);



    for (var y = 0; y < yQanak; y++) {
        matrix[y] = [];
        for (var x = 0; x < xQanak; x++) {

            matrix[y][x] = Math.round(random(5))

        }
    }

    /*matrix = [
        [0, 0, 1, 0, 0],
        [1, 0, 3, 2, 0],
        [5, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 0, 3, 0],
        [1, 1, 4, 0, 0],
        [1, 1, 0, 0, 0]
    ];*/

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var newGrass = new Grass(x, y, 1);
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
        }
    }

}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(0, 255, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill(255, 255, 0);
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill(0, 0, 50);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill(200, 200, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill(190, 150, 0);
                rect(x * side, y * side, side, side);
            }
        }

    }

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



}

