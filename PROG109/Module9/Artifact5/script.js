var myImages =["https://PurpleCactuar.github.io/PROG109/Module9/Artifact5/Images/Binx Xmas1.jpeg",
               "https://PurpleCactuar.github.io/PROG109/Module9/Artifact5/Images/Kuma Car1.jpeg",
               "https://PurpleCactuar.github.io/PROG109/Module9/Artifact5/Images/Binx and Kuma.jpeg",
               "https://PurpleCactuar.github.io/PROG109/Module9/Artifact5/Images/Izzy Toy Bin1.jpeg",
               "https://PurpleCactuar.github.io/PROG109/Module9/Artifact5/Images/Izzy Tongue1.jpeg"];


var captionImages =["Binx, the destroyer.","Kuma, in her car.","Renaissance painting of Binx and Kuma","Newest edition, Izzy!","She's a weird sleeper."];

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

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
