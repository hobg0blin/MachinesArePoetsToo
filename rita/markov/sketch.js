var markov = new RiMarkov(2);
var button;
var resp;

function preload() {
  resp = createP("");
  markov.loadFrom("../assets/butler.txt");
}

function setup() {
  noCanvas();
  button = createButton("Generate!");
  button.size(400, 24);
  button.position(10, 10);
  button.mousePressed(generate);
}

function draw() {

}


function generate() {
  resp.remove();
  var output = markov.generateSentences(1)[0];
  resp = createP(output);
  resp.position(10, 35);
}
