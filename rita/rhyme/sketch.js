function setup() {
	createCanvas(400, 400);
	background(50);
	fill(255);
	noStroke();
	textSize(24);
	textAlign(CENTER, CENTER);
	text("Click for poem", width / 2, height / 2);
}

function draw() {}

function mousePressed() {
	background(50);
	let firstWord = 'machine';
	console.log(RiTa.rhymes(firstWord));
	let rhymes = RiTa.rhymes(firstWord);
	var firstLine = "the " + firstWord + " " + rhymes[int(random(rhymes.length - 1))];
	let secondWord = RiTa.randomWord("vbp", 2);
	let sbl = RiTa.similarByLetter(secondWord);
	let sbs = RiTa.similarBySound(secondWord);
	let sbsl = RiTa.similarBySoundAndLetter(secondWord);
	var secondLine = secondWord + " for " + sbl[int(random(sbl.length - 1))] + " " + sbs[int(random(sbs.length - 1))];
	var thirdLine = "I " + sbsl[int(random(sbsl.length - 1))] + " " + rhymes[int(random(rhymes.length - 1))];
	text(firstLine, width / 2, 150);
	text(secondLine, width / 2, 200);
	text(thirdLine, width / 2, 250);
}
