var kendani = require("./class.kendani.js");
var fs = require('fs');
module.exports = class gaz extends kendani {


    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;

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

        function eattll() {

            gazbaz++;

            fs.writeFile("gaz.txt", "gazbaz\n" + gazbaz, function (eattlll) {


            });

        }

        eattll();


        if (k == "#EEDCB0") {
            this.multiply += 12
        }
        if (k == "#C5E1B3") {
            this.multiply += 6
        } if (k == "#E5F0A8") {
            this.multiply += 2
        }
        if (k == "#EFEFEF") {
            this.multiply -= 4
        }
        var index = Math.floor(Math.random() * this.chooseCell(4).length);
        var newCell = this.chooseCell(4)[index];

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            var lik = new gaz(newX, newY, this.index);
            gazg.push(lik);
            this.energy = 8;

        }
    }




    eat() {
        gazkerav++;
        function eattlll() {


            var c = "gazbazmacav\n" + gazbaz
            fs.writeFile("gaz.txt", c + "\ngazkerav\n" + gazkerav, function (eattllll) {


            });

        }

        eattlll();




        var emptyCells = this.chooseCell2(1, 3);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            if (matrix[newY][newX] == 1) {
                this.die();

            }
            else if (matrix[newY][newX] == 3) {
                this.energy++;


                matrix[newY][newX] = 5;
                matrix[this.y][this.x] = 0;
                this.y = newY;
                this.x = newX;
                for (var i in gish) {
                    if (newX == gish[i].x && newY == gish[i].y) {
                        gish.splice(i, 1);
                        break;
                    }
                }
                this.die();
                if (this.energy >= 12) {
                    this.mul();
                }
            }

        }






    }
    die() {
        gazmerav++;
        function eattllll() {
            var t = "gazbazmacav\n" + gazbaz + "\ngazkerav\n" + gazkerav
            fs.writeFile("gaz.txt", t + "\ngazmerav\n" + gazmerav, function (eattllll) {


            });

        }

        eattllll();






        matrix[this.y][this.x] = 0;

        for (var i in gazg) {
            if (this.x == gazg[i].x && this.y == gazg[i].y) {
                gazg.splice(i, 1);
                break;
            }
        }


    }

}