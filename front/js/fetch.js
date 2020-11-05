
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
                titleDivSup.innerHTML = "<a href='visual2.html?id="+item._id+"'>"+item.name+"</a>";
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

function fetchItem() {
    fetch('http://localhost:3000/api/teddies')
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error(response);
        })
        .then(data => {
            console.log(data);
            for (let item of data) {
                if (id == "?id=" + item._id) {
                    console.log(item.name + " est le champion");
                    let imageArea = document.getElementsByClassName("image")[0];
                    imageArea.innerHTML = "<img src='" + item.imageUrl + "' class='mw-100 alt='photo'/>";
                    let titreArea = document.getElementsByClassName("titre")[0];
                    titreArea.innerHTML = item.name;
                    let priceAera = document.getElementsByClassName("price")[0];
                    priceAera.innerHTML = item.price;
                    let descriptionArea = document.getElementsByClassName("description")[0];
                    descriptionArea.innerHTML = item.description;
                    for (let color of item.colors) {
                        newOption(color);
                    }
                }
            }
        })
        .catch(err => {
            console.log(err);
        })
}

function fetchItem2(id) {
    fetch('http://localhost:3000/api/teddies/_'+id)
    .then (response =>{
        if (response.status===200) {
            return response.json();
        }
        throw new Error(response);
    })
    .then (data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
}