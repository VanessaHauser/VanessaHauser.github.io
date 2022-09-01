const instanz = (s) => {

    var letters = ["","V","A","N","E","S","S","A","_","H","A","U","S","E","R",""];
    //var tileSize;
    //var tileCount;
    //var projektCount = 7;
    //variables for steps

    var posX;
   
   //var posY;


    s.setup = () => {
        s.createCanvas(s.windowWidth,500);
        s.clear();
        s.rectMode(s.CENTER);
        s.textFont("Koven");
        s.textSize(100);
        s.textAlign(s.CENTER,s.CENTER);
        s.frameRate(20);
  
        //tileCount = 29;
        //tileSize = s.width/tileCount;
    };

    s.draw = () => {
      s.clear();

        for (var i=0; i<letters.length; i++){
            posX=i*s.width/letters.length + s.width/letters.length/2;
          
            //Name eingefügt
                s.textSize(100);
                s.fill(0);
               // s.text(letters[i], posX, 300);

               if (s.windowWidth <= 768) {
                s.textSize(30);
                
            } else {
                s.textSize(100);
            }

            if (s.windowWidth <= 1024) {
              s.textSize(30);
              
          } else {
              s.textSize(100);
          }
            
                if(s.mouseX<posX + s.width/letters.length/2 &&
                 s.mouseX>posX - s.width/letters.length/2){
                   
                   s.text(letters[s.int(s.random(letters.length))], posX, 300);
                }
            
                else{
                   s.text(letters[i], posX, 300);
                }

        }
    };

    s.mouseWheel = (event) => {
        scrollDelta += event.delta;
        if (scrollDelta < 0){
          scrollDelta = 0;
        }
      };

      s.windowResized = () => {
        s.resizeCanvas(s.windowWidth, 500);
      };

    };

let sketch = new p5(instanz, "p5sketch")