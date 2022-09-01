var letters = ["","V","A","N","E","S","S","A","","H","A","U","S","E","R",""];
var tileSize;
var tileCount;
var projektCount = 7;

//variables for steps
var posX;
var posY;


/*let myp5 = new p5(( sketch ) => {

    let x = 100;
    let y = 100;

    sketch.setup = () => {
        sketch.createCanvas(200, 200);
      };
    
      sketch.draw = () => {
        sketch.background(0);
        sketch.fill(255);
        sketch.rect(x,y,50,50);
      };
    });


    let myp5 = new p5(s, 'p5sketch');*/


function setup() {
createCanvas(500,500);
createCanvas()
background(255);
rectMode(CENTER);
textFont("Koven");
textSize(100);
textAlign(CENTER,CENTER);

tileCount = 29;
tileSize = width/tileCount;
    
}

function draw() {

    background(200);

    for (var i=0; i<letters.length;i++){
        var posX=i*width/letters.length + width/letters.length/2;
      /* for (var j=0; j<tileCount; j++){
            var posY = j*tileSize;*/

        //Name eingefügt
            textSize(100);
            fill(0);
        
            if(mouseX<posX + width/letters.length/2 && mouseX>posX - width/letters.length/2){
            text(letters[int[random(letter.length)]], posX, 300);
            }
           
            else{
            text(letters[i], posX, 300);
            }
     //}
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }




//var (global, float, int, text)
//let (in einem Abschnitt im Code)
// Class

/*
var letters= ["V","A","N","E","S","S","A","H","A","U","S","E","R"];
var tileSize;
var tileCount;
var projectCount = 7;

var randomText;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    rectMode(CENTER);
    textFont("Koven");

    tileSize = 100;
    tileCount = (width / tileSize);
    noStroke();

}


function draw() {
    tileSize = 100;
    tileCount = (width / tileSize);

    if (windowWidth <= 768) {
        textSize(30);
    } else {
        textSize(90);
    }

    if (frameCount % 5 == 0) {
        square(0, 0, 5000);

        for (var i = 0; i < tileCount; i++) {

            for (var j = 0; j < projectCount; j++) {

                var posX = i * tileSize;
                var posY = (j * 120) + 20;

                text(letters[int(random(12))], posX, posY + tileSize / 2);
                noStroke();
            }
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}*/