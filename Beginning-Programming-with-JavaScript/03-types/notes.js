// your notes here!
console.log("hello world!");
console.log("This is the type section");
var addThree = function(a, b, c){
	return a + b + c;
};
console.log(addThree(5,5,5));
console.log(addThree("Hello ", "World", "!!!"));

var isNumber = function(potencialNumber){
	return typeof potencialNumber === "number";
};

var isPositiveNumber = function(number){
	return isNumber(number) && number > 0;
};

var isYear = function (potencialYear){
	return isPositiveNumber(potencialYear) && potencialYear <= 9999;
};

var isTweet = function (potenciaTweet){
	return potenciaTweet.length <= 140;
};

var isTweetWithLol = function (potenciaTweet){
	return isTweet(potenciaTweet) && potenciaTweet.indexOf("lol") > -1;
};