let teddiesId = new URLSearchParams(location.search).get("id");
fetchItem(teddiesId);

//fonction de validation du choix pour rajout dans le panier
let amount=1;
function valideChoice() {

    //recup de localStorage si null creation de listItems

    let listItems =JSON.parse(localStorage.getItem('cards'));
    if (listItems===null) {
        listItems=[];
    }

    // sinon verification de la presence de l'id dans le localStorage
    let testId=false; 
    for (item of listItems) {
        if (teddiesId===item.id){           
            testId=true;
        }
    }
  console.log(testId);
  
    // et si true ajout d'une quantité, sinon creation de l'objet puis stockage dans le localStorage

    if (testId===true) {
        item.amounts++;
    } else {      
        const objet = {
            id: teddiesId,
            name: titreArea.innerHTML,    
            price: parseInt(priceAera.innerHTML),
            amounts: amount      
        }       
       listItems.push(objet);    
    }

   console.log(listItems);
   localStorage.setItem('cards', JSON.stringify(listItems));
  
}


