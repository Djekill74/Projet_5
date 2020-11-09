let perso= {name:'paul', hp:10};

console.log(perso.hp);




    a=0;
    b=0;

let newInput;
for (i=0;i<3;i++){
newInput = document.createElement("input");
newInput.type="button";
newInput.value=a+"+";
newInput.id=a;
let locationInput = document.getElementsByClassName("input-new")[0];
locationInput.appendChild(newInput);

a++;
newInput.addEventListener('click', function() {
    console.log(newInput.id);
    console.log(this.id);   

})
}


