//verification de localStorage si vide, envoie pour affichage, si non vide, creation de la page d'affichage
let caddie;
let listItems = JSON.parse(localStorage.getItem('cards'));

function verifCards() {

if (listItems === null || listItems.length===0) {
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
verifCards();

