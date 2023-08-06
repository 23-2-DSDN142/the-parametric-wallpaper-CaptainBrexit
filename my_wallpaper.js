//var gapBetweenLines = 10;

//Don't change these settings
let redDiamondOriginX = 0; 
let yellowDiamondOriginX = 50;
let greenDiamondOriginX = 100;
let blueDiamondOriginX = 50;
let blackWhiteDiamondOriginX = 50;

//Or these settings
let redDiamondOriginY =  50; 
let yellowDiamondOriginY = 0;
let greenDiamondOriginY = 50;
let blueDiamondOriginY = 100;
let blackWhiteDiamondOriginY = 50;

//These settings are changeable
let blackWhiteDiamondRadius = 20; //Radius of the black/white diamond, max radius before overlap is 20
let blackWhiteDiamondOrientation = 1; //Flips the orientation of black/white traingles within small diamond, set to 0 or 1 to rotate
let blackWhiteDiamondBorderThickness = 1; //Thickness of the white border of the small black/white diamond, any higher than 10 looks weird
let colouredDiamondRadius = 20; // Radius of the multiple coloured diamonds, max radius before overlap is 30
let colouredDiamondBorderThickness = 1; //Thickness of the border of the coloured diamonds

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); 

  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(255, 240, 255); 
}

function my_symbol() { 
  fill(0); //Black Diagonals
  noStroke();
  beginShape(TESS);
  vertex(20, 0);
  vertex(0, 0);
  vertex(0, 20);
  vertex(30, 50);
  vertex(0, 80);
  vertex(0, 120);
  vertex(30, 150);
  vertex(0, 180);
  vertex(0, 200);
  vertex(20, 200);
  vertex(50, 170);
  vertex(80, 200);
  vertex(120, 200);
  vertex(150, 170);
  vertex(180, 200);
  vertex(200, 200);
  vertex(200, 180);
  vertex(170, 150);
  vertex(200, 120);
  vertex(200, 80);
  vertex(170, 50);
  vertex(200, 20);
  vertex(200, 0);
  vertex(180, 0);
  vertex(150, 30);
  vertex(120, 0);
  vertex(80, 0);
  vertex(50, 30);
  endShape(CLOSE);

  fill(255);
  beginShape(QUADS); //White Borders around Coloured Diamonds
  vertex(50, 70);
  vertex(20, 100);
  vertex(50, 130);
  vertex(80, 100);

  vertex(150, 70);
  vertex(120, 100);
  vertex(150, 130);
  vertex(180, 100);

  vertex(70, 50);
  vertex(100, 20);
  vertex(130, 50);
  vertex(100, 80);

  vertex(70, 150);
  vertex(100, 120);
  vertex(130, 150);
  vertex(100, 180);
  endShape()

  
if(blackWhiteDiamondOrientation == 0) { //Small Black/White Diamond
  fill(255);
  beginShape();
  vertex(blackWhiteDiamondOriginX, blackWhiteDiamondOriginX - blackWhiteDiamondRadius);
  vertex(blackWhiteDiamondOriginX + blackWhiteDiamondRadius, blackWhiteDiamondOriginX);
  vertex(blackWhiteDiamondOriginX - blackWhiteDiamondRadius, blackWhiteDiamondOriginX);
  vertex(blackWhiteDiamondOriginX, blackWhiteDiamondOriginX + blackWhiteDiamondRadius);

  vertex(blackWhiteDiamondOriginX, blackWhiteDiamondOriginX + 100 - blackWhiteDiamondRadius);
  vertex(blackWhiteDiamondOriginX + blackWhiteDiamondRadius, blackWhiteDiamondOriginX + 100);
  vertex(blackWhiteDiamondOriginX - blackWhiteDiamondRadius, blackWhiteDiamondOriginX + 100);
  vertex(blackWhiteDiamondOriginX, blackWhiteDiamondOriginX + 100 + blackWhiteDiamondRadius);
  endShape(CLOSE);

  beginShape();
  vertex(blackWhiteDiamondOriginX + 100, blackWhiteDiamondOriginX - blackWhiteDiamondRadius);
  vertex(blackWhiteDiamondOriginX + 100 + blackWhiteDiamondRadius, blackWhiteDiamondOriginX);
  vertex(blackWhiteDiamondOriginX + 100 - blackWhiteDiamondRadius, blackWhiteDiamondOriginX);
  vertex(blackWhiteDiamondOriginX + 100, blackWhiteDiamondOriginX + blackWhiteDiamondRadius);

  vertex(blackWhiteDiamondOriginX + 100, blackWhiteDiamondOriginX + 100 - blackWhiteDiamondRadius);
  vertex(blackWhiteDiamondOriginX + 100 + blackWhiteDiamondRadius, blackWhiteDiamondOriginX + 100);
  vertex(blackWhiteDiamondOriginX + 100 - blackWhiteDiamondRadius, blackWhiteDiamondOriginX + 100);
  vertex(blackWhiteDiamondOriginX + 100, blackWhiteDiamondOriginX + 100 + blackWhiteDiamondRadius);
  endShape();

} else {

  beginShape();
  vertex(blackWhiteDiamondOriginX, blackWhiteDiamondOriginX - blackWhiteDiamondRadius);
  vertex(blackWhiteDiamondOriginX - blackWhiteDiamondRadius, blackWhiteDiamondOriginX);
  vertex(blackWhiteDiamondOriginX + blackWhiteDiamondRadius, blackWhiteDiamondOriginX);
  vertex(blackWhiteDiamondOriginX, blackWhiteDiamondOriginX + blackWhiteDiamondRadius);

  vertex(blackWhiteDiamondOriginX, blackWhiteDiamondOriginX + 100 - blackWhiteDiamondRadius);
  vertex(blackWhiteDiamondOriginX - blackWhiteDiamondRadius, blackWhiteDiamondOriginX + 100);
  vertex(blackWhiteDiamondOriginX + blackWhiteDiamondRadius, blackWhiteDiamondOriginX + 100);
  vertex(blackWhiteDiamondOriginX, blackWhiteDiamondOriginX + 100 + blackWhiteDiamondRadius);
  endShape(CLOSE);

  beginShape();
  vertex(blackWhiteDiamondOriginX + 100, blackWhiteDiamondOriginX - blackWhiteDiamondRadius);
  vertex(blackWhiteDiamondOriginX + 100 - blackWhiteDiamondRadius, blackWhiteDiamondOriginX);
  vertex(blackWhiteDiamondOriginX + 100 + blackWhiteDiamondRadius, blackWhiteDiamondOriginX);
  vertex(blackWhiteDiamondOriginX + 100, blackWhiteDiamondOriginX + blackWhiteDiamondRadius);

  vertex(blackWhiteDiamondOriginX + 100, blackWhiteDiamondOriginX + 100 - blackWhiteDiamondRadius);
  vertex(blackWhiteDiamondOriginX + 100 - blackWhiteDiamondRadius, blackWhiteDiamondOriginX + 100);
  vertex(blackWhiteDiamondOriginX + 100 + blackWhiteDiamondRadius, blackWhiteDiamondOriginX + 100);
  vertex(blackWhiteDiamondOriginX + 100, blackWhiteDiamondOriginX + 100 + blackWhiteDiamondRadius);
  endShape(CLOSE);
}

  stroke(255); // Black/White Diamond Bounding Boxs
  strokeWeight(blackWhiteDiamondBorderThickness);
  line(50, 30, 30, 50);
  line(30, 50, 50, 70)
  line(50, 70, 70, 50);
  line(70, 50, 50, 30);

  line(150, 130, 130, 150);
  line(130, 150, 150, 170)
  line(150, 170, 170, 150);
  line(170, 150, 150, 130);

  line(50, 130, 30, 150);
  line(30, 150, 50, 170)
  line(50, 170, 70, 150);
  line(70, 150, 50, 130);

  line(150, 30, 130, 50);
  line(130, 50, 150, 70)
  line(150, 70, 170, 50);
  line(170, 50, 150, 30);

  stroke(0); //Red Diamonds
  strokeWeight(colouredDiamondBorderThickness)
  beginShape(QUADS); 
  fill(255, 0, 0);
  vertex(redDiamondOriginX, redDiamondOriginY - colouredDiamondRadius);
  vertex(redDiamondOriginX - colouredDiamondRadius, redDiamondOriginY);
  vertex(redDiamondOriginX, redDiamondOriginY + colouredDiamondRadius);
  vertex(redDiamondOriginX + colouredDiamondRadius, redDiamondOriginY);

  vertex(redDiamondOriginX + 200, redDiamondOriginY - colouredDiamondRadius + 100);
  vertex(redDiamondOriginX - colouredDiamondRadius + 200, redDiamondOriginY + 100);
  vertex(redDiamondOriginX + 200, redDiamondOriginY + colouredDiamondRadius + 100);
  vertex(redDiamondOriginX + colouredDiamondRadius + 200, redDiamondOriginY + 100);


  fill(255, 255, 0); //Yellow Diamonds
  vertex(yellowDiamondOriginX + colouredDiamondRadius, yellowDiamondOriginY);
  vertex(yellowDiamondOriginX, yellowDiamondOriginY - colouredDiamondRadius);
  vertex(yellowDiamondOriginX - colouredDiamondRadius, yellowDiamondOriginY);
  vertex(yellowDiamondOriginX, yellowDiamondOriginY + colouredDiamondRadius);

  vertex(yellowDiamondOriginX + 100, yellowDiamondOriginY + 200 - colouredDiamondRadius);
  vertex(yellowDiamondOriginX + 100 - colouredDiamondRadius, yellowDiamondOriginY + 200);
  vertex(yellowDiamondOriginX + 100, yellowDiamondOriginY + 200 + colouredDiamondRadius);
  vertex(yellowDiamondOriginX + 100 + colouredDiamondRadius, yellowDiamondOriginY + 200);
  


  fill(0, 255, 0); //Green Diamonds
  vertex(greenDiamondOriginX, greenDiamondOriginY - colouredDiamondRadius);
  vertex(greenDiamondOriginX - colouredDiamondRadius, greenDiamondOriginY);
  vertex(greenDiamondOriginX, greenDiamondOriginY + colouredDiamondRadius);
  vertex(greenDiamondOriginX + colouredDiamondRadius, greenDiamondOriginY);

  vertex(greenDiamondOriginX, greenDiamondOriginY + 100 - colouredDiamondRadius);
  vertex(greenDiamondOriginX + colouredDiamondRadius, greenDiamondOriginY + 100);
  vertex(greenDiamondOriginX, greenDiamondOriginY + 100 + colouredDiamondRadius);
  vertex(greenDiamondOriginX - colouredDiamondRadius, greenDiamondOriginY + 100);
  
  fill(0, 0, 255); //Blue Diamonds
  vertex(blueDiamondOriginX, blueDiamondOriginY - colouredDiamondRadius);
  vertex(blueDiamondOriginX + colouredDiamondRadius, blueDiamondOriginY);
  vertex(blueDiamondOriginX, blueDiamondOriginY + colouredDiamondRadius);
  vertex(blueDiamondOriginX - colouredDiamondRadius, blueDiamondOriginY);

  vertex(blueDiamondOriginX + 100, blueDiamondOriginY - colouredDiamondRadius);
  vertex(blueDiamondOriginX + 100 + colouredDiamondRadius, blueDiamondOriginY);
  vertex(blueDiamondOriginX + 100, blueDiamondOriginY + colouredDiamondRadius);
  vertex(blueDiamondOriginX + 100 - colouredDiamondRadius, blueDiamondOriginY);
  
  endShape();

  /* Diagonal Lines shown in Documentation
  for(i =  0; i < 160; i += gapBetweenLines) { 
      fill(128);

      quad(i, i + 40, i + 5, i + 45, i + 45, i + 5, i + 40, i);

      quad(0, 160, 5, 155, 45, 195, 40, 200);
      quad(i, 200 - (i - 40), i + 5, 200 - (i - 45), i + 45, 200 - (i - 5), i + 40, 200 - i);
  }
  
  


noFill(); Biking Graphic shown in Documentation
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
