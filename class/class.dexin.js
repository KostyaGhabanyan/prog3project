var kendani= require("./class.kendani.js");
module.exports = class dexin extends kendani {
    

    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;
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
        return super.chooseCell(character);
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
            this.multiply-=4
        }
        this.multiply++;
        
          var index =   Math.floor(Math.random()*this.chooseCell(1).length);
        var newCell =this.chooseCell(1)[index];
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