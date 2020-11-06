let caddie=true;

if (caddie==true){
let eraseEmpty= document.getElementsByClassName("empty")[0];
while (eraseEmpty.firstChild) {
    eraseEmpty.removeChild(eraseEmpty.firstChild);
}
} else {     
    let eraseFull=document.getElementsByClassName("full")[0];
    while (eraseFull.firstChild) {
        eraseFull.removeChild(eraseFull.firstChild);
    }
};

let listItem =JSON.parse(localStorage.getItem('cards'));
console.log(listItem);
b=0;
for (item of listItem) {
    let cardsRowDivSup=document.createElement("div");

    let newRowCards=document.getElementsByClassName("product-row")[0];
    cardsRowDivSup.className="row d-flex justify-content-center row-product-cards";
    newRowCards.appendChild(cardsRowDivSup);

    let cardsDivSup=document.createElement("div");
    let newColCards=document.getElementsByClassName('row-product-cards')[b];
    cardsDivSup.className="col-3 col-md-2 border product-cards";
    newColCards.appendChild(cardsDivSup);
    b++;
}