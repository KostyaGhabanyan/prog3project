var kendani = require("./class.kendani.js");
var fs = require('fs');
module.exports = class gishatich extends kendani {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        y = Math.floor(Math.random() * 2)
        this.ser = y

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell2(character, character2) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character || matrix[y][x] == character2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {
        function eattr() {

            gishmul++;

            fs.writeFile("gish.txt", "gishbazmacav\n" + gishmul, function (eattrr) {


            });

        }

        eattr();



        if (k == "#EEDCB0") {
            this.multiply += 12
        }
        if (k == "#C5E1B3") {
            this.multiply += 6
        } if (k == "#E5F0A8") {
            this.multiply += 2
        }
        if (k == "#EFEFEF") {
            this.multiply == 0
        }
        var index = Math.floor(Math.random() * this.chooseCell(0).length);
        var newCell = this.chooseCell(0)[index];
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var yes = new gishatich(newX, newY, this.index);
            gish.push(yes);
            this.energy = 8;
        }
    }



    move() {
        function eattrr() {

            gishcharj++;

            fs.writeFile("gish.txt", "\ngishbazmacav\n" + gishmul + "\ngishcharj\n" + gishcharj, function (eattrrr) {


            });

        }

        eattrr();
        if (this.ser == 0) {
            var d = 2
        }
        if (this.ser == 1) {
            var d = 4
        }
        gishcharj++;

        var emptyCells = this.chooseCell2(1, 4);

        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];



        if (newCell) {
            this.energy--;
            var newX = newCell[0];
            var newY = newCell[1];

            if (matrix[newY][newX] == 1) {

                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (matrix[newY][newX] == 4) {

                for (var i in kextotxot) {
                    if (newX == kextotxot[i].x && newY == kextotxot[i].y) {
                        kextotxot.splice(i, 1);
                        break;
                    }
                }
            }

            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;


            if (this.energy <= d) {
                this.die();
            }

        }


    }
    eat() {
        function eattrrr() {

            gishkerav++;

            fs.writeFile("gish.txt", "\ngishbazmacav\n" + gishmul + "\ngishcharj\n" + gishcharj + "  \ngishkerav\n" + gishkerav, function (eattrrrr) {


            });

        }

        eattrrr();
        gishkerav++;


        var emptyCells = this.chooseCell(2);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];

        if (newCell) {
            this.energy++;
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            for (var i in xotaker) {
                if (newX == xotaker[i].x && newY == xotaker[i].y) {
                    xotaker.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 12 && k != "#EFEFEF") {
                this.mul();
            }
        }
        else {
            this.move();
        }
    }
    die() {
        function eattrrrr() {

            gishmer++;
            var f = "\ngishbazmacav\n" + gishmul + "\ngishcharj\n" + gishcharj + " \n gishkerav\n" + gishkerav
            fs.writeFile("gish.txt", f + " \n gishmerav\n" + gishmer, function (eattrrrr) {


            });

        }

        eattrrrr();




        matrix[this.y][this.x] = 0;
        for (var i in gish) {
            if (this.x == gish[i].x && this.y == gish[i].y) {
                gish.splice(i, 1);
                break;
            }
        }
    }
}



