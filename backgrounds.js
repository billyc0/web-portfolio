// JavaScript Document

var image1 = "aurora.jpg";
var image2 = "beach.jpg";
var image3 = "binary.jpg";
var image4 = "circuit-board.jpg";
var image5 = "code.jpg";
var image6 = "elephant.jpg";
var image7 = "mountain-lake.jpg";
var image8 = "mountains.jpg";
var image9 = "new-york.jpg";
var image10 = "panda.jpg";
var image11 = "stars.jpg";
var image12 = "trail.jpg";

var backgrounds = new Array(image1, image2, image3, image4, image5, image6, 
	image7, image8, image9, image10, image11, image12);
	
var randomNum = Math.floor((Math.random() * 11) + 0);

document.write("<style>");
document.write("body {");
document.write("background-image: url(images/backgrounds/" + backgrounds[randomNum] + ");");
document.write("background-repeat: no-repeat;");
document.write("background-attachment: fixed;");
document.write("background-size: cover;");
document.write("background-position: center;");
document.write("}");
document.write("</style>");	