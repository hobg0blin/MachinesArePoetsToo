function setup() { 
  createCanvas(400, 400);
  background(255);
  textAlign(LEFT, TOP);
  textSize(24);
  text("Click for ~messages from another world~",
       20, 20, width-40, height-40);
} 

function draw() { 
}

function mousePressed() {
  var grammar = tracery.createGrammar(grammarSource);
  grammar.addModifiers(tracery.baseEngModifiers);
  var output = grammar.flatten("#origin#");
  background(255);
  text(output, 20, 20, width-40, height-40);
}

var grammarSource = {
  "origin": "#interjection.capitalize#, #name#! I'm #profession.a#, not #profession.a#!",
  "interjection": ["alas", "congratulations", "eureka", "fiddlesticks",
    "good grief", "hallelujah", "oops", "rats", "thanks", "whoa", "yes"],
  "name": ["Jim", "John", "Tom", "Steve", "Kevin", "Gary", "George", "Larry"],
  "profession": [
        "accountant",
        "actor",
        "archeologist",
        "astronomer",
        "audiologist",
        "bartender",
        "butcher",
        "carpenter",
        "composer",
        "crossing guard",
        "curator",
        "detective",
        "economist",
        "editor",
        "engineer",
        "epidemiologist",
        "farmer",
        "flight attendant",
        "forest fire prevention specialist",
        "graphic designer",
        "hydrologist",
        "librarian",
        "lifeguard",
        "locksmith",
        "mathematician",
        "middle school teacher",
        "nutritionist",
        "painter",
        "physical therapist",
        "priest",
        "proofreader",
        "rancher",
        "referee",
        "reporter",
        "sailor",
        "sculptor",
        "singer",
        "sociologist",
        "stonemason",
        "surgeon",
        "tailor",
        "taxi driver",
        "teacher assistant",
        "teacher",
        "teller",
        "therapist",
        "tour guide",
        "translator",
        "travel agent",
        "umpire",
        "undertaker",
        "urban planner",
        "veterinarian",
        "web developer",
        "weigher",
        "welder",
        "woodworker",
        "writer",
        "zoologist"
  ]
};