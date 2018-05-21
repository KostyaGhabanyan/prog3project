var kendani= require("./class.kendani.js");
module.exports = class gishatich extends kendani {
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
       
          var index =   Math.floor(Math.random()*this.chooseCell(0).length);
        var newCell =this.chooseCell(0)[index];
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

        var emptyCells = this.chooseCell2(1, 4);
        
          var index =   Math.floor(Math.random()*emptyCells.length);
        var newCell =emptyCells[index];



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


            if (this.energy <= 0) {
                this.die();
            }

        }


    }
    eat() {
        var emptyCells = this.chooseCell(2);
         var index =   Math.floor(Math.random()*emptyCells.length);
        var newCell =emptyCells[index];

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
            if (this.energy >= 12) {
                this.mul();
            }
        }
        else {
            this.move();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gish) {
            if (this.x == gish[i].x && this.y == gish[i].y) {
                gish.splice(i, 1);
                break;
            }
        }
    }
}



