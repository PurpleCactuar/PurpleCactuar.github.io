function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    let mes = "";

    for (let i = 1; i <= Math.ceil(pHeight/2); i++) {
        
        for (let j = 1; j <= i; j++) {
            if (j % 2 == 0) {
                mes += `<span style='color: ${pColorEven};'>${pSymbol}</span>`;
            } else {
                mes += `<span style='color: ${pColorOdd};'>${pSymbol}</span>`;
            }
        }
        mes += "<br>";
    }

    for (let i = Math.floor(pHeight/2); i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            if (j % 2 == 0) {
                mes += `<span style='color: ${pColorEven};'>${pSymbol}</span>`;
            } else {
                mes += `<span style='color: ${pColorOdd};'>${pSymbol}</span>`;
            }
        }
        mes += "<br>";
    }


    document.getElementById("rhombus").innerHTML = mes;
}
