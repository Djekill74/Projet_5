
//fonction de recherche et affichage de la page menu

function fetchMenu() {
    fetch('http://localhost:3000/api/teddies')
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error(response);
        })
        .then(data => {
            for (let item of data) {
                newDivItem2();
                titleDivSup.innerHTML = "<a href='visual.html?id=" + item._id + "'>" + item.name + "</a>";
                priceDivSup.innerHTML = item.price;
                descriptionDivSup.innerHTML = item.description;
                rightDivSup.innerHTML = '<a href="visual.html?id=' + item._id + '"><img src="' + item.imageUrl + '" class="mw-100" alt="description" /></a>';
                a++;
            }
        })
        .catch(err => {
            console.log(err);
        })
}

//fonction d'affichage de la peluche selectionné

let titreArea = document.getElementsByClassName("titre")[0];
let priceAera = document.getElementsByClassName("price")[0];

function fetchItem(id) {
    fetch('http://localhost:3000/api/teddies/' + id)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error(response);
        })
        .then(data => {
            let imageArea = document.getElementsByClassName("image")[0];
            imageArea.innerHTML = "<img src='" + data.imageUrl + "' class='mw-100 alt='photo'/>";
            titreArea.innerHTML = data.name;
            priceAera.innerHTML = data.price;
            let descriptionArea = document.getElementsByClassName("description")[0];
            descriptionArea.innerHTML = data.description;
            for (let color of data.colors) {
                newOption(color);
            }
        })
        .catch(err => {
            console.log(err);
        })
}


//fonction post
function finishPage(){
    window.location.href="./finish.html";
}

let idCards;
async function postItem() {

    let headers = new Headers({ 'content-Type': 'application/json' })

   await fetch('http://localhost:3000/api/teddies/order', {
        method: 'POST',
        body: JSON.stringify(objetToSend),
        headers: headers
    })
    .then(response => {
        return response.json()
    })
    .then(response => {
    console.log('success');
       idCards= response.orderId;
       console.log(idCards);
       localStorage.setItem('order', JSON.stringify(response));
    })
    .catch(err => {
    
        console.log(err)
    })

    
//    window.location.href="./finish.html"
}


