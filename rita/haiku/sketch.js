function setup() {
  createCanvas(400, 400);
  background(50);
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Click for haiku", width / 2, height / 2);
}

function draw() {}

function mousePressed() {
  background(50);
  var firstLine = "the " + RiTa.randomWord("jj", 2) + " " + RiTa.randomWord("nn", 2);
  var secondLine = RiTa.randomWord("vbp", 2) + " for a " + RiTa.randomWord("jj", 2) + " " + RiTa.randomWord("nn", 1);
  var thirdLine = "I " + RiTa.randomWord("vb", 2) + " " + RiTa.randomWord("rb", 2);
  text(firstLine, width / 2, 150);
  text(secondLine, width / 2, 200);
  text(thirdLine, width / 2, 250);
}
