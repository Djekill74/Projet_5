
// lancement de la function de verification du caddie
verifCards();

//Validation de la commande

let objetToSend;
const submitCards = document.getElementById('submit-cards');
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

    let messageErrorFirstName= document.getElementById("firstName-error");
    messageErrorFirstName.innerHTML="";
    let messageErrorLastName= document.getElementById("lastName-error");
    messageErrorLastName.innerHTML="";
    let messageErrorAddress= document.getElementById("address-error");
    messageErrorAddress.innerHTML="";
    let messageErrorCity= document.getElementById("city-error");
    messageErrorCity.innerHTML="";
    let messageErrorEmail= document.getElementById("email-error");
    messageErrorEmail.innerHTML="";


  
    let validFirstName;
    if (firstName.value=="") {
        messageErrorFirstName.innerHTML="merci de remplir cette case";
        validFirstName=false
    } else if (isValid(firstName.value)==false) {
        messageErrorFirstName.innerHTML="merci de rentrer un nom correct";
        validFirstName=false
    } else {
        validFirstName=true
    }
    let validLastName;
    if (lastName.value=="") {
        messageErrorLastName.innerHTML="merci de remplir cette case";
        validLastName=false
    } else if (isValid(lastName.value)==false) {
        messageErrorLastName.innerHTML="merci de rentrer un prénom correct";
        validLastName=false
    } else {
        validLastName=true
    }
    let validAddress; 
    if (address.value=="") {
        messageErrorAddress.innerHTML="merci de remplir cette case";
        validAddress=false
    } else if (isValid(address.value)==false) {
        messageErrorAddress.innerHTML="merci de rentrer une adresse correct";
        validAddress=false
    } else {
        validAddress=true
    }
    let validCity;
    if (city.value=="") {
        messageErrorCity.innerHTML="merci de remplir cette case";
        validCity=false
    } else if (isValid(city.value)==false) {
        messageErrorCity.innerHTML="merci de rentrer une ville correct";
        validCity=false
    } else {
        validCity=true
    }
    let validEmail;
    if (email.value=="") {
        messageErrorEmail.innerHTML="merci de remplir cette case";
        validEmail=false
    } else if (emailIsValid(email.value)==false) {
        messageErrorEmail.innerHTML="merci de rentrer un emial correct";
        validEmail=false
    } else {
        validEmail=true
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
    } else {
        console.log("il manque un truc")
    }
})

