var kendani= require("./class.kendani.js");
module.exports = class Grass extends kendani {

    constructor(x, y, index) {
        super(x, y, index);
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

    mul() {
        if(k =="green"){
            this.multiply+=12
        }
        if(k =="yellow"){
            this.multiply+=6
        } if(k =="orange"){
            this.multiply+=2
        }
        if(k =="blue"){
            this.multiply==0
        }
        this.multiply++;
        var emptyCells = this.chooseCell(0);
          var index =   Math.floor(Math.random()*emptyCells.length);
        var newCell =emptyCells[index];


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