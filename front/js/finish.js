const listOrder = JSON.parse(localStorage.getItem('order'));
console.log(listOrder);

const nameRepeat=document.getElementById("name-repeat");
nameRepeat.innerHTML=listOrder.contact.firstName;
const numberID=document.getElementById("recapitulatif");
numberID.innerHTML=listOrder.orderId;