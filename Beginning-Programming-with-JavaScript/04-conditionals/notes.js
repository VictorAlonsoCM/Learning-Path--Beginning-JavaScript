// your notes here!
console.log("hello world!");

var getTagName = function(tag){
	var result;
	if(tag.charAt(1) !== "/"){
		result = tag.slice(1, tag.length - 1);
	}else{
		result = tag.slice(2, tag.length - 1);
	}
	return result;
};

// improveTweet("Hello world");

var improveTweet = function(tweet){
	var result = tweet;

	if(tweet.toLowerCase().indexOf("lol") === -1){
		result = tweet + " lol";
	}

	return result;
};

var gettingByHour = function(hour){
	if(hour >= 0 && hour <= 5){
		console.log("wow iti is early!");
	}else if(hour >= 6 && hour <=12){
		console.log("Good Morning!");
	}else if(hour >= 13 && hour <= 17){
		console.log("Good Afternoon!");
	}else if(hour >= 18 && hour <= 20){
		console.log("Good Evening!");
	}else if(hour >= 21 && hour <= 24){
		console.log("Should'n you be in bed?");
	}else{
		console.log("Oh gush, this is awkward -- that's not a time");
	}
};

var classifyTweet = function(tweet){
	var result;
	if(tweet.length >= 100){
    	result = "awesome";
	} else if(tweet.length >= 50 && tweet.length < 100){
		result = "sorta-good";
	} else{
    	result = "not great";
	}
	return result;
};

var maxOfThree = function(a, b, c){
	var result;
	
	if(a > b && a > c){
		result = a;
	}else if(b > a && b > c){
		result = b;
	}else{
		result = c;
	}

	return result;
};

var isNumber = function(value){
    return typeof value === "number";
};

var addThree = function(a, b, c){

	if(!isNumber(a) || !isNumber(b) || !isNumber(c)){
		throw "ALL INPUTS TO ADDTHREE MUST BE NUMBERS";
	}

	return a+b+c;
};