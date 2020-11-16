
//function qui crée autant de box que d'article a faire apparaitre au menu

let a = 0;
let titleDivSup, priceDivSup, descriptionDivSup, rightDivSup;

function newDivItem2() {
    let generalDiv = document.getElementsByClassName("row")[2];
    let generalDivSup = document.createElement("div");
    generalDivSup.className = "col-12 col-lg-6 col-xl-4 generalDiv shadow mb-5";
    generalDiv.appendChild(generalDivSup);
    let rowDiv = document.getElementsByClassName("generalDiv")[a];
    let rowDivSup = document.createElement("div");
    rowDivSup.className = "row internalRowGeneral m-1";
    rowDiv.appendChild(rowDivSup);
    let leftDiv = document.getElementsByClassName("internalRowGeneral")[a];
    let leftDivSup = document.createElement("div");
    leftDivSup.className = "col-6 leftDiv";
    leftDiv.appendChild(leftDivSup);
    let rightDiv = document.getElementsByClassName("internalRowGeneral")[a];
    rightDivSup = document.createElement("div");
    rightDivSup.className = "col-6 rightDiv";
    rightDiv.appendChild(rightDivSup);
    let titleDiv = document.getElementsByClassName("leftDiv")[a];
    titleDivSup = document.createElement("div");
    titleDivSup.className = "col-12 text-center titletDiv m-1";
    titleDiv.appendChild(titleDivSup);
    let priceDiv = document.getElementsByClassName("leftDiv")[a];
    priceDivSup = document.createElement("div");
    priceDivSup.className = "col-12 priceDiv m-1";
    priceDivSup.innerHTML = "price";
    priceDiv.appendChild(priceDivSup);
    let descriptionDiv = document.getElementsByClassName("leftDiv")[a];
    descriptionDivSup = document.createElement("div");
    descriptionDivSup.className = "col-12 priceDiv m-1";
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
    cardsDivPriceSup.innerHTML = item.price+"€";

    let cardsDivAmountSup = document.createElement("div");
    let newColAmountCards = document.getElementsByClassName('row-product-cards')[b];
    cardsDivAmountSup.className = "col-2 col-md-2 border product-cards";
    newColAmountCards.appendChild(cardsDivAmountSup);
    cardsDivAmountSup.innerHTML = item.amounts;

    let cardsDivTotalSup = document.createElement("div");
    let newColTotalCards = document.getElementsByClassName('row-product-cards')[b];
    cardsDivTotalSup.className = "col-2 col-md-2 border product-cards";
    newColTotalCards.appendChild(cardsDivTotalSup);
    let totalCards = item.price * item.amounts+"€";
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
        totalCards = item.price * item.amounts+"€";
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
            totalCards = item.price * item.amounts+"€";
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
        const verifArray = document.getElementById("verif");
        verifArray.innerHTML = "<div class='alert alert-success alert-dismissible fade show' role='alert'>" +
            "<h5 class='alert-heading'>Etes vous sur de vouloir supprimer cet aricle du panier ?</h5>" +
            "<button type='submit' class='m-1' id='yes'>oui</button>" +
            "<button type='button' data-dismiss='alert' aria-label='Close'>non</button></div>"
        let supConfirm = document.getElementById("yes");
        supConfirm.addEventListener('click', function () {
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
    })
    b++;
}



//verification de localStorage si vide, envoie pour affichage, si non vide, creation de la page d'affichage
let caddie;
let listItems = JSON.parse(localStorage.getItem('cards'));
function verifCards() {

    if (listItems === null || listItems.length === 0) {
        caddie = false;
    } else {
        caddie = true;
        b = 0;
        for (item of listItems) {
            newDivCards(item);
        };
    }
    // si le localStorage est vide affiche un message dans le caddie, sinon affiche le caddie

    if (caddie == true) {
        let eraseEmpty = document.getElementsByClassName("empty")[0];
        while (eraseEmpty.firstChild) {
            eraseEmpty.removeChild(eraseEmpty.firstChild);
        }
    } else {
        let eraseFull = document.getElementsByClassName("full")[0];
        while (eraseFull.firstChild) {
            eraseFull.removeChild(eraseFull.firstChild);
        }
    };

}


// fonction de verification de validité des données

function isValid(value) {
    return /^[a-zA-ZéèôîïÉÈÎÏ][a-zéôèêàçîï]+([-'\s][a-zA-ZéèôîïÉÈÎÏ\s][a-zéèêôàçîï\s]+)?$/.test(value)
}

function AdressIsValid(value) {
    return /^[1-9a-zA-ZéèôîïÉÈÎÏ][0-9a-zéôèêàçîï]+([-'\s][0-9a-zA-ZéèôîïÉÈÎÏ\s][0-9a-zéèêôàçîï\s]+)?$/.test(value)
}

function emailIsValid(value) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
}
