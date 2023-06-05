
const element = document.getElementById("submit");
element.addEventListener("click", myFunction);

let text = document.lastModified; 
document.getElementById("time").innerHTML = text;

function myFunction() {
document.getElementById("scripture").innerHTML = document.getElementById("favchap").value; 
}
