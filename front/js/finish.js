let finishData=new URLSearchParams(window.location.search);
console.log("has permet de verifier que name est present dans la barre url : "+finishData.has("name"));
console.log("get permet de recuperer la valeur de name dans la barre url : "+finishData.get("name"));
let tagName = document.getElementById("name-repeat");
tagName.innerHTML=finishData.get("name"); 