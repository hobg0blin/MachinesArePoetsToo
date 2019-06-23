//All examples adapted from Allison Parrish's intro to Rita: https://creative-coding.decontextualize.com/intro-to-ritajs/
//
var lines;
var nouns = [];

function preload() {
  lines = loadStrings('../assets/butler.txt');
}

function setup() {
  createCanvas(400, 400);
  // tell rita we're not interested in words like "the, a, of" and to ignore cases/punctuation
  var params = {
    ignoreStopWords: true,
    ignoreCase: true,
    ignorePunctuation: true
  };
  counts = RiTa.concordance(lines.join(" "),
    params);
  for (var k in counts) {
    if (counts.hasOwnProperty(k)) {
      // get parts of speech
      var tags = RiTa.getPosTags(k);
      if (tags[0] == 'nn') {
        //if it's a noun, store it
        nouns.push(k);
      }
    }
  }
  noLoop();
}

function draw() {
  background(50);
  textSize(24);
  fill(255);
  noStroke();
  //show all the nouns
  text(nouns.join(' '), 10, 10, width - 20,
    height - 20);
}
