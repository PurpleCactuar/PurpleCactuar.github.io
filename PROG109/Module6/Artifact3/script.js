function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine  ="";
       for (let j = 1; j <= i; j++) {
rLine  +="<p>";
    
//Create each line on the Rhombus
       for (let j = 1; j <= i; j++) {

//Is the position even or odd so we change the color
       if (j % 2 == 0) {
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
 } else {
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
}
}
rLine +="</p>";

}

document.getElementById("upRight").innerHTML = rLine;
}


function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine  ="";
       for (let j = 1; j <= i; j++) {
mes  +="<p>";
    
//Create each line on the Rhombus
       for (let j = 1; j <= i; j++) {

//Is the position even or odd so we change the color
       if (j % 2 == 0) {
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
 } else {
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
}
}
rLine +="</p>";

// console.log(rLine);

}

document.getElementById("downRight").innerHTML = rLine;
}
