class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
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
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }


    }
}
class GrassEater {


    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var eater = new GrassEater(newX, newY, this.index);
            xotaker.push(eater);
            this.energy = 8;
        }
    }



    move() {

        var emptyCells = this.chooseCell2(0, 4);
        var newCell = random(emptyCells);
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

    eat() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);

        if (newCell) {
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

        for (var i in xotaker) {
            if (this.x == xotaker[i].x && this.y == xotaker[i].y) {
                xotaker.splice(i, 1);
                break;
            }
        }


    }

}
class gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        var newCell = random(this.chooseCell(0));
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
        var newCell = random(emptyCells);



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
        var newCell = random(emptyCells);
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





class dexin {


    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.index = index;
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
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(1));
        if (newCell && this.multiply >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var li = new dexin(newX, newY, this.index);
            kextotxot.push(li);
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            this.multiply = 0;
        }
    }






}
class gaz {


    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        var newCell = random(this.chooseCell(4));
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
        var emptyCells = this.chooseCell2(1, 3);
        var newCell = random(emptyCells);

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


        matrix[this.y][this.x] = 0;

        for (var i in gazg) {
            if (this.x == gazg[i].x && this.y == gazg[i].y) {
                gazg.splice(i, 1);
                break;
            }
        }


    }

}