var side = 12;
xQanak = 50;
yQanak = 50;

function setup() {
    createCanvas(xQanak * side, yQanak * side);
    frameRate(3);
}

window.onload = main;


function main() {
    var socket = io.connect('http://localhost:3000');

    socket.on("matrix", function(data){
        var col = data[1];
        gcel(data[0], col);


    });


    function gcel(matrix,col) {
        
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
                    fill(col);
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
                else if (matrix[y][x] == 6) {
                    fill(129, 224, 254);
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }
}

