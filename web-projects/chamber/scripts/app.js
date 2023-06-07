let text = document.lastModified; 
document.getElementById("time").innerHTML = text;

const date = new Date();
document.getElementById("date").innerHTML = date;

//if today is monday or tuesday get banner and show grid//

if (date.getDay() === 1 || date.getDay() === 2) {
    banner = document.getElementById("banner");
    banner.style.display = "grid";
}

const nav = document.getElementById(nav)

