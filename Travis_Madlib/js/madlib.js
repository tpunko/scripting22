// JavaScript Document

function write(){
	
console.log("working test");

// form info
	
var name = document.getElementById('name').value;
	console.log(name);
	
var pronoun = document.querySelector('input[name="pronoun"]:checked').value;
	console.log(pronoun);

var nature = document.getElementById('nature').value;
	console.log(nature);
	
var place = document.getElementById('place').value;
	console.log(place);
	
var animal = document.getElementById('animal').value;
	console.log(animal);
	
var plant = document.getElementById('plant').value;
	console.log(plant);
	
var light = document.getElementById('light').value;
	console.log(light);
	
var eating = document.getElementById('eating').value;
	console.log(eating);
	
var running = document.getElementById('running').value;
	console.log(running);

// pronoun if statements

var proPes;
	
var proPast;

var proCap;
	
var proOther;
	
if(pronoun=="she"){
	proPes = "she";
	proPast = "her";
	proCap = "She";
	proOther = "her";
}else if(pronoun=="he"){
	proPes = "he";
	proPast = "his";
	proCap = "He";
	proOther = "him";
}else if(pronoun=="they"){
	proPes = "they";
	proPast = "their";
	proCap = "They";
	proOther = "them";
}
	console.log(proPes);
	console.log(proPast);
	console.log(proCap);
	console.log(proOther);
	
// Output info
	
document.getElementById('output1').innerHTML = "<hr><h3>Story Generated</h3><hr>"
	
document.getElementById('output2').innerHTML = "<p>"+name+" was taking a walk through the "+nature+" early in the morning. It was "+place+", no one else was around. Only the sound of the "+plant+" could be heard. "+proCap+" continued they walk, admiring the features of the "+nature+". The "+light+" started raising from behind the mountains, illuminating the "+nature+". The light piercing through the branches of the "+plant+". "+name+" loved walking here in the mornings for this reason. Later "+proPes+" came across a small creak that cut through the path. "+proCap+" looked around for a way across and saw one of the "+plant+" have fallen across the creak making a bridge. "+proCap+" made "+proPast+" way over to it and crossed to the overside.  </p><p>After a while of walking, there was a break in the "+plant+". A group of "+animal+" was gracing in a "+eating+" manner, which intrigued "+name+". "+proPes+" slowly walked closer, then stepped on a broken branch. The "+animal+" all turned and looked in the direction of the sound seeing "+proOther+". The leader screamed and the group of "+animal+" started "+running+" in the other direction. "+proCap+" started "+running+" after them. The "+animal+" were fast and escaped in the "+plant+". "+name+" looked around for a while trying to find where they went but no luck. "+proCap+" turned around and continued down the path.</p><p>As "+name+" walked, the "+plant+" were spread further apart, coming to another open field. The path came to an end at the edge of a cliff that overlooked the rest of the "+nature+". Just as "+proPes+" got to the edge the "+light+" could be seen clearly, shining between the two towering mountains. "+name+" took off "+proPast+" bag and sat on the ground. Looking out into the distance they slowly breathed in and out, closed their eyes, and started to meditate. </p>";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}