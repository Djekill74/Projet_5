
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
    optionCaseSup = document.createElement("option");
    optionCase.appendChild(optionCaseSup);
    optionCaseSup.innerHTML = couleur;
}

//function qui cree une ligne dans le caddie par item

function newDivCards(item) {
    let cardsRowDivSup = document.createElement("div");
    let newRowCards = document.getElementsByClassName("product-row")[0];
    cardsRowDivSup.className = "row d-flex justify-content-center row-product-cards";
    newRowCards.appendChild(cardsRowDivSup);

    let cardsDivTitleSup = document.createElement("div");
    let newColTitleCards = document.getElementsByClassName('row-product-cards')[b];
    cardsDivTitleSup.className = "col-3 col-md-2 border product-cards";
    newColTitleCards.appendChild(cardsDivTitleSup);
    cardsDivTitleSup.innerHTML = item.name;

    let cardsDivPriceSup = document.createElement("div");
    let newColPriceCards = document.getElementsByClassName('row-product-cards')[b];
    cardsDivPriceSup.className = "col-2 col-md-2 border product-cards";
    newColPriceCards.appendChild(cardsDivPriceSup);
    cardsDivPriceSup.innerHTML = item.price;

    let cardsDivAmountSup = document.createElement("div");
    let newColAmountCards = document.getElementsByClassName('row-product-cards')[b];
    cardsDivAmountSup.className = "col-2 col-md-2 border product-cards";
    newColAmountCards.appendChild(cardsDivAmountSup);
    cardsDivAmountSup.innerHTML = item.amounts;

    let cardsDivTotalSup = document.createElement("div");
    let newColTotalCards = document.getElementsByClassName('row-product-cards')[b];
    cardsDivTotalSup.className = "col-2 col-md-2 border product-cards";
    newColTotalCards.appendChild(cardsDivTotalSup);
    let totalCards = item.price * item.amounts;
    cardsDivTotalSup.innerHTML = totalCards;

    let cardsDivModifSup = document.createElement("div");
    let newColModifCards = document.getElementsByClassName('row-product-cards')[b];
    cardsDivModifSup.className = "col-3 col-md-2 border product-cards product-cards-modif d-flex justify-content-around";
    newColModifCards.appendChild(cardsDivModifSup);

    //creation des bouton de modification

    let inputPlus = document.createElement("input");
    inputPlus.type = "button";
    inputPlus.value = "+";
    inputPlus.id = this.id;
    let inputPlusDiv = document.getElementsByClassName("product-cards-modif")[b];
    inputPlusDiv.appendChild(inputPlus);
    inputPlus.addEventListener('click', function () {
        console.log(item.amounts);
        inputMoins.value = "-";
        item.amounts++;
        cardsDivAmountSup.innerHTML = item.amounts;
        totalCards = item.price * item.amounts;
        cardsDivTotalSup.innerHTML = totalCards;
        localStorage.setItem('cards', JSON.stringify(listItems));
    })

    let inputMoins = document.createElement("input");
    inputMoins.type = "button";
    inputMoins.value = "-";
    inputMoins.id = this.id;
    let inputMoinsDiv = document.getElementsByClassName("product-cards-modif")[b];
    inputMoinsDiv.appendChild(inputMoins);
    inputMoins.addEventListener('click', function () {
        if (item.amounts > 0) {

            console.log(item.amounts);
            item.amounts--;
            cardsDivAmountSup.innerHTML = item.amounts;
            totalCards = item.price * item.amounts;
            cardsDivTotalSup.innerHTML = totalCards;
            localStorage.setItem('cards', JSON.stringify(listItems));
            if (item.amounts == 0) {
                inputMoins.value = "/";
            }
        }
    })

    let inputDel = document.createElement("input");
    inputDel.type = "button";
    inputDel.value = "sup";
    inputDel.id = this.id;
    let inputDelDiv = document.getElementsByClassName("product-cards-modif")[b];
    inputDelDiv.appendChild(inputDel);
    inputDel.addEventListener('click', function () {
        let indexItem = listItems.indexOf(item);
        console.log(indexItem);
        let elementDel = listItems.splice(indexItem, 1);
        console.log(listItems);
        console.log(elementDel);
        localStorage.setItem('cards', JSON.stringify(listItems));
        let supRow = document.getElementsByClassName("row-product-cards")[indexItem];
        console.log(supRow);
        let eraseRow = document.getElementsByClassName("row-product-cards")[indexItem];
        while (eraseRow.firstChild) {
            eraseRow.removeChild(eraseRow.firstChild)
        }
        location.reload();
    })



    b++;
}




