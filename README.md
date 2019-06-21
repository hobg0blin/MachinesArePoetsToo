# Machines Are Poets Too: An Introduction To Generative Text

By Brent Bailey. Accompanying slides can be viewed [here](https://docs.google.com/presentation/d/1Ehy15d3MboG5IJ1t316ijKwP8llZBkOacEmipcWwSbk/edit?usp=sharing).

This repo contains resources for learning about a small set of the myriad avilable methods to create generative text with code. Below are a few code samples inside the p5.js editor to toy with, plus a longer list of available resources to explore.

For some of the code samples (especially the ml5 stuff), it’s easiest if you have Python installed because running them in the p5 web editor gets tricky. Don’t worry, you don’t have to learn Python for this workshop! We’ll just be using it to run a local server. If you do have Python installed, just run `python -m SimpleHTTPServer -8000` (for Python 2) or `python -m http.server -8000` (for Python 3). From there, navigate to `localhost:8000` in your browser (all work best in Chrome).

## Basic Javascript Text Generation

AA simple way of generating random text strings with p5 and a text corpus taken from the works of James Baldwin: [p5 sketch](https://editor.p5js.org/bront/sketches/AD2S1JkDh).

## Tracery

Tracery: a JavaScript library used to create “grammars”: basically a top-level sentence structure then sets of words that meet each sentence component. We’ll use [Allison Parrish](https://www.decontextualize.com/)’s p5 example [here](https://editor.p5js.org/allison.parrish/sketches/ByfvClyTg)

## Word vectors with ml5

Word vectors is basiclly the use of complex math to determine the similarity of different words. [ml5](https://ml5js.org/reference/api-Word2vec/) has a simple-to-use model built on top of [Tensorflow](https://www.tensorflow.org/) that we’ll use here. The code sample is located in the `word2vec` folder.

## Rita.js

[Rita.js](https://rednoise.org/rita/index.php) is an incredible tool for any kind of computational work with text, but we’ll be focusing specifically on some potential generative applications of it.

If you want to mess around with the examples, you may find its [documentation](https://rednoise.org/rita/reference/index.php) useful, as well as its [list of PENN part-of-speech tags](https://rednoise.org/rita/reference/PennTags.html).

These examples are made with Rita’s “full” lexicon - if you get into doing more serious work with it, you may want [a smaller version](https://rednoise.org/rita/download.php).

Code samples are located in the `rita` folder.

### Resources

[ConceptNet, a semantic network](http://conceptnet.io)
[Cheap Bots Done Quick](https://cheapbotsdonequick.com/)
[Free AIML Bots](https://github.com/pandorabots/Free-AIML)
[Allison’s Understanding Word Vectors](https://github.com/aparrish/rwet/blob/master/understanding-word-vectors.ipynb) - it’s in Python, but the principles are the same
