var kendani = require("./class.kendani.js");
var fs = require('fs');
module.exports = class GrassEater extends kendani {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8; y = Math.floor(Math.random() * 2)
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
            grassebaz++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var eater = new GrassEater(newX, newY, this.index);
            xotaker.push(eater);
            this.energy = 8;
        }
    }



    move() {
        
        

        if (k != "#EFEFEF") {
            var emptyCells = this.chooseCell2(0, 4);
            var index = Math.floor(Math.random() * emptyCells.length);
            var newCell = emptyCells[index];
            if (newCell) {
                grassecharj++;
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
        

        var emptyCells = this.chooseCell(1);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {
            grasseker++;

            this.energy++;
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.ser == 0) {
                var r = 4
            }
            if (this.ser == 1) {
                var r = 8
            }

            if (this.energy >= r) {
                this.mul();

            }
        }
        else {
            this.move();
        }
    }
    die() {
        
       


        matrix[this.y][this.x] = 0;

        for (var i in xotaker) {
            if (this.x == xotaker[i].x && this.y == xotaker[i].y) {
                grassemer++;
                xotaker.splice(i, 1);
                break;
            }
        }


    }

}