var side = 12;
xQanak = 50;
yQanak = 50;

function setup() {
    createCanvas(xQanak * side, yQanak * side);
    background('#acacac');
    frameRate(3);
}

window.onload = main;


function main() {
    var socket = io.connect('http://localhost:3000');

    socket.on("matrix", gcel);
    socket.on("guyn", nerkel);
    setInterval(nerkel, 3000);
    function nerkel(k) {
        l = Math.floor(Math.random()*5)
        background(k);
      background('#acacac');
       
    }

    function gcel(matrix) {
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
    }
}

