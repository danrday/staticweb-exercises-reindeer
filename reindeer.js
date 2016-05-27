var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

var x = []

function colorReindeer () {
  for (i=0; i < reindeer.length; i++) {
    x.push("<li style=color:" + colors[i] + ";>" + reindeer[i] + "</li>");
  }
}


function listItems () {
  x.unshift("<ul>");
  x.shift("</ul>");
}

colorReindeer();

listItems();

/* console.log(x);  */

hohohoElement.innerHTML = x.join(' ');



