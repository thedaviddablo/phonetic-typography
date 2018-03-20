function intro(tempX, tempY) {
  push();

  translate(tempX, tempY);
  background(0, 0, 0);
  noStroke();
  //subtitle
  push();
  fill(0, 0, 100);
  textSize(8);
  text("U S E    I N    F U L L S C R E E N    F O R    B E S T    R E S U L T S", 0, height/-4);
  text("D E M O    V E R S I O N    2 . 3 . 1", 0, height/-4 - 12);
  translate(0, height/4);
  rect(0, 0, 275, 30, 30);

  fill(0, 0, 0);
  textSize(10);
  text("H I T   T H E   S P A C E B A R   T O   B E G I N", -10, 4);
  arrow(124 + 1.2*sin(6*frameCount), 0, 5);
  pop();

  push();
  scale(height/900);
  fill(0, 0, 100);
  translate(-6.5*tracking, 22*size);

  var waveHeight = 0.75*size;
  var waveWeight = 0.8*size;
  var waveSize = 3*size;
  var speed = 2;
  var weightChange = 0.7;
  var subtracking = tracking*1.02;
  var subwaveWeight = 0.7*size;

  P(0, 0, waveWeight - weightChange*cos(speed*frameCount), sin(speed*frameCount)*waveHeight+waveSize);
  H(2*tracking, 0, waveWeight - weightChange*cos(speed*frameCount-30), sin(speed*frameCount-30)*waveHeight+waveSize);
  O(4*tracking, 0, waveWeight - weightChange*cos(speed*frameCount-60), sin(speed*frameCount-60)*waveHeight+waveSize);
  N(6*tracking, 0, waveWeight - weightChange*cos(speed*frameCount-90), sin(speed*frameCount-90)*waveHeight+waveSize);
  E(8*tracking, 0, waveWeight - weightChange*cos(speed*frameCount-120), sin(speed*frameCount-120)*waveHeight+waveSize);
  T(10*tracking, 0, waveWeight - weightChange*cos(speed*frameCount-150), sin(speed*frameCount-150)*waveHeight+waveSize);
  I(11.5*tracking, 0, waveWeight - weightChange*cos(speed*frameCount-180), sin(speed*frameCount-180)*waveHeight+waveSize);
  C(13*tracking, 0, waveWeight - weightChange*cos(speed*frameCount-210), sin(speed*frameCount-210)*waveHeight+waveSize);

  scale(0.73);
  translate(-0.3*tracking, 115);

  T(0, 0, subwaveWeight, 0.05*size);
  Y(2*subtracking, 0, subwaveWeight, 0.05*size);
  P(4*subtracking, 0, subwaveWeight, 0.05*size);
  O(6*subtracking, 0, subwaveWeight, 0.05*size);
  G(8*subtracking, 0, subwaveWeight, 0.05*size);
  R(10*subtracking, 0, subwaveWeight, 0.05*size);
  A(12*subtracking, 0, subwaveWeight, 0.05*size);
  P(14*subtracking, 0, subwaveWeight, 0.05*size);
  H(16*subtracking, 0, subwaveWeight, 0.05*size);
  Y(18*subtracking, 0, subwaveWeight, 0.05*size);
  pop();

  pop();
}

function arrow(tempX, tempY, tempSize) {
  push();
  translate(tempX, tempY);
  triangle(0, 0, -2*tempSize, tempSize, -2*tempSize, -1*tempSize);
  pop();
}

function checkmark(tempX, tempY) {
  push();
  translate(tempX, tempY);
  rectMode(CORNER);
  stroke(0, 0, 100);
  strokeWeight(8);
  line(-75, 0, -25, 50);
  line(-25, 50, 75, -50);
  pop();
}

function instructions() {
  push();
  translate(width/2, height/2);
  fill(0, 0, 100);
  noStroke();

  if (state == 1) {
    textSize(10);
    text("B E G I N    S P E E C H    T O    T Y P E    C O N V E R S I O N", 0, height/-4);
    textSize(15);
    text("Hold down the mouse while speaking to record your voice.", 0, height/4);
    textSize(8);
    text("I F    N O T H I N G    H A P P E N S ,    P R E S S    ' 0 '    A N D    T R Y    A G A I N", 0, height/4 + height/40);
    push();
    noFill();
    stroke(0, 0, 100);
    rect(0, -height/100, 560 - 1400*30/width, height/2.5, height/50);
    pop();
    volFeedback(0, 0);
  } else if (state == 2) {
    textSize(10);
    text("S P E E C H    P R O C E S S E D", 0, height/-4);
    textSize(15);
    text("Hit the spacebar to generate your phonetic typography!", 0, height/4);
    push();
    noFill();
    stroke(0, 0, 100);
    rect(0, -height/100, 560 - 1400*30/width, height/2.5, height/50);
    checkmark(0, 0);
    pop();
  } else if (state == 3) {
    push();
    translate(0, height/4);
    rect(0, 0, 295, 30, 30);
    fill(0, 0, 0);
    textSize(10);
    text("H I T   T H E   S P A C E B A R   T O   R E S T A R T", -12, 4);
    arrow(130 + 1.2*sin(6*frameCount), 0, 5);
    pop();
  }

  pop();
}

function volFeedback(x, y) {
  push();
  translate(x, y);
  var tempS = 2;
  translate(5*tempS * (volHistory.length-1), 0);

  if (mouseIsPressed) {
    fill(0, 0, 100);
    for (var i = 0; i < volHistory.length; i++) {
      rect(i * -10*tempS, 0, 4*tempS, 13*tempS + volHistory[i]*3*tempS, 4*tempS);
    }
  } else {
    fill(0, 0, 20);
    for (var i = 0; i < volHistory.length; i++) {
      ellipse(i * -10*tempS, 0, 4*tempS, 4*tempS);
    }
  }
  pop();
}
