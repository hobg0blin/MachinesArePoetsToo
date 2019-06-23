//basic text drawing code shamelessly stolen from https://p5js.org/examples/typography-words.html
let font,
  fontsize = 20;
let corpus;

function preload() {
  font = loadFont('assets/SourceSansPro-Regular.otf');
  corpus = loadStrings('assets/baldwin.txt');
}

function setup() {
  createCanvas(400, 400);

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  frameRate(0.5);
}

function draw() {
  background(160);

  // Align the text to the right
  // and run drawWords() in the left third of the canvas
  textAlign(RIGHT);
  drawWords(width * 0.3, height * 0.3);

  // Align the text in the center
  // and run drawWords() in the middle of the canvas
  textAlign(CENTER);
  drawWords(width * 0.5, height * 0.5);

  // Align the text to the left
  // and run drawWords() in the right third of the canvas
  textAlign(LEFT);
  drawWords(width * 0.75, height * 0.75);
}

function drawWords(x, y) {

  // First we generate a random variable to pick a string from the corpus
  let ind = floor(random(corpus.length));

  //Clean up the area we're selecting to make sure any double spacing or things like that don't prevent us from getting words
  let filteredCorpus = corpus[ind].split(' ').filter(y => y != "");
  // make sure that hasn't left us with a blank corpus! that's no fun
  if (!filteredCorpus.length) {
    let inc = 1;
    while (!filteredCorpus.length) {
      filteredCorpus = corpus[ind + inc].split(' ').filter(y => y != "");
      inc++;
    }
  }

  // Then we generate a random number from the length of that string that we'll use to pick a random word
  let word = floor(random(filteredCorpus.length));


  fill(floor(random(75, 255)));
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position

  // We take a line from the corpus, split it into an array, then take a random word from it.

  text(filteredCorpus[word], x, y);

  // we can add more words if we want to!
  //   fill(65);
  //   text(corpus[ind].split(' ')[0], x, 150);

  //   fill(190);
  //   text(corpus[ind].split(' ')[0], x, 220);

  //   fill(255);
  //   text(corpus[ind].split(' ')[0], x, 290);
}
