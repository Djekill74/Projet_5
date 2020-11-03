
//function qui crée autant de box que d'article a faire apparaitre au menu

let a = 0;
let titleDivSup, priceDivSup, descriptionDivSup, rightDivSup;

function newDivItem2() {
    let generalDiv = document.getElementsByClassName("row")[2];
    let generalDivSup = document.createElement("div");
    generalDivSup.className = "col-12 col-lg-6 col-xl-4 border generalDiv";
    generalDiv.appendChild(generalDivSup);

    let rowDiv = document.getElementsByClassName("generalDiv")[a];
    let rowDivSup = document.createElement("div");
    rowDivSup.className = "row border internalRowGeneral";
    rowDiv.appendChild(rowDivSup);

    let leftDiv = document.getElementsByClassName("internalRowGeneral")[a];
    let leftDivSup = document.createElement("div");
    leftDivSup.className = "col-6 border leftDiv";
    leftDiv.appendChild(leftDivSup); 

    let rightDiv = document.getElementsByClassName("internalRowGeneral")[a];
    rightDivSup = document.createElement("div");
    rightDivSup.className = "col-6 border rightDiv";
    rightDiv.appendChild(rightDivSup);

    let titleDiv = document.getElementsByClassName("leftDiv")[a];
    titleDivSup = document.createElement("div");
    titleDivSup.className = "col-12 border text-center titletDiv";
    titleDiv.appendChild(titleDivSup);

    let priceDiv = document.getElementsByClassName("leftDiv")[a];
    priceDivSup = document.createElement("div");
    priceDivSup.className = "col-12 border priceDiv";
    priceDivSup.innerHTML = "price";
    priceDiv.appendChild(priceDivSup); 

    let descriptionDiv = document.getElementsByClassName("leftDiv")[a];
    descriptionDivSup = document.createElement("div");
    descriptionDivSup.className = "col-12 border priceDiv";
    descriptionDivSup.innerHTML = "description";
    descriptionDiv.appendChild(descriptionDivSup);
}

//fonction qui crée une case option pour chaque couleur et la remplie 
let optionCaseSup;
function newOption(couleur) {    
    let optionCase = document.getElementById("option-color");
    optionCaseSup=document.createElement("option");
    optionCase.appendChild(optionCaseSup);
    optionCaseSup.innerHTML=couleur;
}
let selectColor;
//fonction de validation de la couleur
function valideColor() {
    let elementColor=document.getElementById("option-color");
    selectColor=elementColor.value;
    console.log(selectColor);
}