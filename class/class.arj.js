var kendani = require("./class.kendani.js");
var fs = require('fs');
module.exports = class arj extends kendani {
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
        function eatttl() {
            arjmul++;

            fs.writeFile("arj.txt", "\n\n\narjbaz\n" + arjmul, function (eattt) {

            });

        }
        eatttl();


        if (k == "#EEDCB0") {
            this.multiply == 0
        }
        if (k == "#C5E1B3") {
            this.multiply += 6
        } if (k == "#E5F0A8") {
            this.multiply += 2
        }
        if (k == "#EFEFEF") {
            this.multiply == 12
        }
        var index = Math.floor(Math.random() * this.chooseCell(0).length);
        var newCell = this.chooseCell(0)[index];
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;

            var arjj = new arj(newX, newY, this.index);
            arja.push(arjj);
            this.energy = 8;
        }
    }



    move() {
        function eattt() {
            arjcharj++;

            fs.writeFile("arj.txt", "\n\n\narjbaz\n" + arjmul + "\n\n\narjcharj\n" + arjcharj, function (eatt) {

            });

        }
        eattt();

       
        if (k != "#EEDCB0" && this.ser != "axjik") {
            var emptyCells = this.chooseCell2(0, 4);
            var index = Math.floor(Math.random() * emptyCells.length);
            var newCell = emptyCells[index];
            if (newCell) {
                this.energy--;
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[this.y][this.x] = 0;
                if (matrix[newY][newX] == 4) {
                    for (var i in kextotxot) {
                        if (newX == kextotxot[i].x && newY == kextotxot[i].y) {
                            kextotxot.splice(i, 1);
                            break;
                        }
                    }
                    this.die();
                    return;
                }
                else if (matrix[newY][newX] == 0) {
                    matrix[this.y][this.x] = 0;
                    matrix[newY][newX] = 2;
                    this.y = newY;
                    this.x = newX;
                }

                if (this.energy <= 0) {
                    this.die();
                }

            }
        }
    }
    eat() {
        function eatt() {
            arjkerav++;

            fs.writeFile("arj.txt", "\n\n\narjbaz\n" + arjmul + "\n\n\narjcharj\n" + arjcharj + "\narjkerav\n" + arjkerav, function (err) {


            });

        }

        eatt();



        var emptyCells = this.chooseCell(3);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];

        if (newCell) {
            this.energy++;
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            for (var i in gish) {
                if (newX == gish[i].x && newY == gish[i].y) {
                    gish.splice(i, 1);
                    break;
                }
            }
            if (this.ser == 0) {
                var j = 4
            }
            if (this.ser == 1) {
                var j = 20
            }
            if (this.energy >= j && k != "#EEDCB0") {
                this.mul();
            }
        }
        else {
            this.move();
        }
    }
    die() {
        function err() {
            arjmer++;
            var a = "\n\n\narjbaz\n" + arjmul + "\n\n\narjcharj,\n" + arjcharj + "arjkerav,\n" + arjkerav
            fs.writeFile("arj.txt", a + "\n\n arjmer\n" + arjmer, function (err) {

            });

        }
        err();
        matrix[this.y][this.x] = 0;
        for (var i in arja) {
            if (this.x == arja[i].x && this.y == arja[i].y) {
                arja.splice(i, 1);
                break;
            }
        }
    }
}



