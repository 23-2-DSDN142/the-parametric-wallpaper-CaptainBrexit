var gapBetweenLines = 10;

let centralDiamond = 0; //Flips the positions of Black and White traingles within central diamond


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); 

  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(255, 240, 255); 
}

function my_symbol() { 

  noStroke(); //Black X
  fill(0);
  beginShape(TESS);
  vertex(20, 0);
  vertex(0, 0);
  vertex(0, 20);
  vertex(30, 50);
  vertex(0, 80);
  vertex(0, 100);
  vertex(20, 100);
  vertex(50, 70);
  vertex(80, 100);
  vertex(100, 100);
  vertex(100, 80);
  vertex(70, 50);
  vertex(100, 20);
  vertex(100, 0);
  vertex(80, 0);
  vertex(50, 30);
  endShape(CLOSE);

  fill(255);
if(centralDiamond == 0) { //Central Black/White Diamond
  beginShape();
  vertex(50, 30);
  vertex(70, 50);
  vertex(30, 50);
  vertex(50, 70);
  endShape(CLOSE);
} else {
  beginShape();
  vertex(50, 30);
  vertex(30, 50);
  vertex(70, 50);
  vertex(50, 70);
  endShape(CLOSE);
}

  stroke(255); //Central Diamond Bounding Box
  line(50, 30, 30, 50);
  line(30, 50, 50, 70)
  line(50, 70, 70, 50);
  line(70, 50, 50, 30);

  beginShape(TRIANGLES); //Yellow Triangle
  fill(255, 255, 0);
  vertex(0, 30);
  vertex(0, 70);
  vertex(20, 50);

  fill(0, 255, 0); //Green Triangle
  vertex(30, 0);
  vertex(70, 0);
  vertex(50, 20);

  fill(0, 0, 255); //Blue Triangle
  vertex(100, 30);
  vertex(100, 70);
  vertex(80, 50);
  
  fill(255, 0, 0); //Red Triangle
  vertex(30, 100);
  vertex(70, 100);
  vertex(50, 80);
  endShape();

  /*
  for(i =  0; i < 160; i += gapBetweenLines) { 
      fill(128);

      //quad(i, i + 40, i + 5, i + 45, i + 45, i + 5, i + 40, i);

      quad(0, 160, 5, 155, 45, 195, 40, 200);
      quad(i, 200 - (i - 40), i + 5, 200 - (i - 45), i + 45, 200 - (i - 5), i + 40, 200 - i);
  }
  */
  
/*

noFill();
bezier(0, 1, 50, 200, 150, 50, 200, 200);

circle(100, 113, 10, 10); //Back wheel
circle(100, 113, 1, 1);
line(100, 113, 95, 113);
line(100, 113, 105, 113);
line(100, 113, 100, 108);
line(100, 113, 100, 118);
line(100, 113, 97, 110);
line(100, 113, 97, 116);
line(100, 113, 103, 110);
line(100, 113, 103, 116);

line(100, 113, 112, 111); //Frame
line(112, 111, 118, 105);
line(118, 105, 108, 105);
line(108, 105, 100, 113);
line(112, 111, 108, 105);
line(116, 101, 123, 112);
line(112, 111, 114, 112);
line(113, 113, 115, 111);
line(116, 99, 116, 102);


circle(123, 112, 10, 10); //Front Wheel
circle(123, 112, 1, 1);
line(118, 112, 128, 112);
line(123, 107, 123, 117);
line(120, 109, 126, 115);
line(126, 109, 120, 115);

circle(110, 90, 5, 5); //Biker dude
line(110, 93, 110, 103);
line(110, 95, 116, 99);
line(110, 95, 116, 102);
line(110, 103, 113, 106);
line(113, 106, 114, 112);

*/

}
