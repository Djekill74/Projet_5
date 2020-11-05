let caddie=true;

if (caddie==true){
let eraseEmpty= document.getElementsByClassName("empty")[0];
while (eraseEmpty.firstChild) {
    eraseEmpty.removeChild(eraseEmpty.firstChild);
}
} else {     
    let eraseFull=document.getElementsByClassName("full")[0];
    while (eraseFull.firstChild) {
        eraseFull.removeChild(eraseFull.firstChild);
    }
};