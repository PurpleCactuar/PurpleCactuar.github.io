var myImages =["Images/Xmas Fambam.jpeg", 
               "Images/Binx Xmas.jpeg",
               "Images/Kuma Car.jpeg",
               "Images/Binx and Kuma.jpeg",
               "Images/Izzy Toy Bin.jpeg"];


var captionImages =["Christmas 2020","Binx, the present destroyer","Kuma in her car","Favorite picture of them","Newest edition, Izzy"];

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

