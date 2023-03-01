var myImages =["Images/Binx Xmas.jpeg",
               "Images/Kuma Car.jpeg",
               "Images/Binx and Kuma.jpeg",
               "Images/Izzy Toy Bin.jpeg",
               "Images/Izzy Tongue.jpeg"];


var captionImages =["Binx, the destroyer","Kuma in her car","Renaissance painting on my wall","Newest edition, Izzy", "Izzy is a weird sleeper"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}

setInterval(autoSlide,2000); // Next


var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

