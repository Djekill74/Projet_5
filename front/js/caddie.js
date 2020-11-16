
// lancement de la function de verification du caddie
verifCards();

//Validation de la commande

let objetToSend;
const submitCards = document.getElementsByClassName('submit-cards')[0];
submitCards.addEventListener('click', function() {
    event.preventDefault();

    let listId=[];
    const listItem = JSON.parse(localStorage.getItem('cards'));
    for(item of listItem) {
        console.log(item.id);
        listId.push(item.id);
    }

    const firstName = document.getElementById("name");
    const lastName= document.getElementById("prenom");
    const address= document.getElementById("adresse");
    const city=document.getElementById("ville");
    const email=document.getElementById("email");

      let validFirstName;
    if (firstName.value=="") {
        firstName.className="form-control border border-danger";
        validFirstName=false
    } else if (isValid(firstName.value)==false) {
        firstName.className="form-control border border-danger";
        validFirstName=false
    } else {
        validFirstName=true
        firstName.className="form-control";
    }
    let validLastName;
    if (lastName.value=="") {
        lastName.className="form-control border border-danger";
        validLastName=false
    } else if (isValid(lastName.value)==false) {
        lastName.className="form-control border border-danger";
        validLastName=false
    } else {
        validLastName=true
        lastName.className="form-control";
    }
    let validAddress; 
    if (address.value=="") {
        address.className="form-control border border-danger";
        validAddress=false
    } else if (AdressIsValid(address.value)==false) {
        address.className="form-control border border-danger";
        validAddress=false
    } else  {
        validAddress=true
        address.className="form-control";
    }
    let validCity;
    if (city.value=="") {
        city.className="form-control border border-danger";
        validCity=false
    } else if (isValid(city.value)==false) {
        city.className="form-control border border-danger";
        validCity=false
    } else {
        validCity=true
        city.className="form-control";
    }
    let validEmail;
    if (email.value=="") {
        email.className="form-control border border-danger";
        validEmail=false
    } else if (emailIsValid(email.value)==false) {
        email.className="form-control border border-danger";
        validEmail=false
    } else {
        validEmail=true
        email.className="form-control";
    }




    const contactOne = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value
    }
    objetToSend = {
        contact: contactOne,
        products: listId
    }
    

    if (validFirstName==true && validLastName==true && validAddress==true && validCity==true && validEmail==true){
    postItem();
    let commandButton= document.getElementsByClassName("command-button")[0];
    console.warn(commandButton);
    commandButton.innerHTML='<button class="btn btn-primary" type="button" disabled>'+
    '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>'+
    'Loading...'+
  '</button>'

    setTimeout(function() {
        window.location.href="./finish.html"
    }, 2000);
    } else {
        console.log("il manque un truc")
    }
})

