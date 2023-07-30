var gapBetweenLines = 10;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { 
  /*
  for(i =  0; i < 160; i += gapBetweenLines) {  
    fill(0);
    quad(i, i + 40, i + 5, i + 45, i + 45, i + 5, i + 40, i);
  }
 
  noFill();
  strokeWeight(8);
  quad(40, 5, 5, 40, 155, 195, 195, 155);

  */
  noStroke();
  beginShape(TESS);
  vertex(40, 0);
  vertex(0, 0);
  vertex(0, 40);
  vertex(60, 100);
  vertex(0, 160);
  vertex(0,200);
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

  beginShape(TRIANGLES);
  vertex(0, 60);
  vertex(0, 140);
  vertex(40, 100);

  vertex(60, 0);
  vertex(140, 0);
  vertex(100, 40);

  vertex(200, 60);
  vertex(200, 140);
  vertex(160, 100);
  
  vertex(60, 200);
  vertex(140, 200);
  vertex(100, 160);
  endShape();
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
