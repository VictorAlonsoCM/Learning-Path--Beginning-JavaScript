// your notes here!
console.log("hello world!");
console.log("this is another statement.");

var greet = function (name){
	return "Hello, " + name;
};

greet("Victor");

var greetingforVictor = greet("Victor");

console.log(greetingforVictor);

var toCardString = function(typeCard, card){
	var cardOf = typeCard +" of "+ card;
	return console.log(cardOf);
};

//makeHtmlPragraph("hello world");
//=>

var makeHtmlPragraph = function(content){
	var openParagraph = "<p>";
	var closeParagraph = "</p>";
	var htmlPragraph = openParagraph + content + closeParagraph;

	return htmlPragraph;
};

var openParagraph = "this is not a tag";

console.log(openParagraph);