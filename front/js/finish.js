const listOrder = JSON.parse(localStorage.getItem('order'));
console.log(listOrder);
console.log("orderid:"+listOrder.orderId)
console.log("nom : "+listOrder.contact.firstName)