var gapBetweenLines = 10;

let centralDiamond = 1; //Flips the positions of Black and White traingles within central diamond


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); 

  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(240, 255, 240); 
}

function my_symbol() { 
  
  
  

  noStroke(); //Black X
  fill(0);
  beginShape(TESS);
  vertex(40, 0);
  vertex(0, 0);
  vertex(0, 40);
  vertex(60, 100);
  vertex(0, 160);
  vertex(0, 200);
  vertex(40, 200);
  vertex(100, 140);
  vertex(160, 200);
  vertex(200, 200);
  vertex(200, 160);
  vertex(140, 100);
  vertex(200, 40);
  vertex(200, 0);
  vertex(160, 0);
  vertex(100, 60);
  endShape(CLOSE);

  fill(255);
if(centralDiamond == 0) { //Central Black/White Diamond
  beginShape();
  vertex(100, 60);
  vertex(140, 100);
  vertex(60, 100);
  vertex(100, 140);
  endShape(CLOSE);
} else {
  beginShape();
  vertex(100, 60);
  vertex(60, 100);
  vertex(140, 100);
  vertex(100, 140);
  endShape(CLOSE);
}

  stroke(255); //Central Diamond Bounding Box
  line(100, 60, 60, 100);
  line(60, 100, 100, 140)
  line(100, 140, 140, 100);
  line(140, 100, 100, 60);

  beginShape(TRIANGLES); //Yellow Triangle
  fill(255, 255, 0);
  vertex(0, 60);
  vertex(0, 140);
  vertex(40, 100);

  fill(0, 255, 0); //Green Triangle
  vertex(60, 0);
  vertex(140, 0);
  vertex(100, 40);

  fill(0, 0, 255); //Blue Triangle
  vertex(200, 60);
  vertex(200, 140);
  vertex(160, 100);
  
  fill(255, 0, 0); //Red Triangle
  vertex(60, 200);
  vertex(140, 200);
  vertex(100, 160);
  endShape();

  for(i =  0; i < 160; i += gapBetweenLines) { 
      fill(128);

      //quad(i, i + 40, i + 5, i + 45, i + 45, i + 5, i + 40, i);

      quad(0, 160, 5, 155, 45, 195, 40, 200);
      quad(i, 200 - (i - 40), i + 5, 200 - (i - 45), i + 45, 200 - (i - 5), i + 40, 200 - i);
  }
  
  
    
  



/*
noFill();
bezier(0, 1, 50, 200, 150, 50, 200, 200);

bezier(90, 117, 110, 120, 130, 107, 135, 102);
line(135, 102, 135, 125);
line(135, 102, 140, 102);
line(140, 102, 140, 126);

circle(174, 60, 4, 4);
line(174, 62, 174, 70);
line(174, 70, 172, 72);
line(174, 70, 176, 72);
line(170, 65, 178, 65);

*/
}
