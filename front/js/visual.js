let teddiesId = new URLSearchParams(location.search).get("id");
fetchItem(teddiesId);

//fonction de validation du choix pour rajout dans le panier
function valideChoice() {
    let selectColor;
    let elementColor=document.getElementById("option-color");
    selectColor=elementColor.value;
    console.log(selectColor);
    let listItems =JSON.parse(localStorage.getItem('cards'));
    if (listItems===null) {
        listItems=[];
    }
   const objet = {
        name: titreArea.innerHTML,
        price: priceAera.innerHTML,
        color: selectColor
    }
   listItems.push(objet);
   console.log(listItems);
   localStorage.setItem('cards', JSON.stringify(listItems));
}


