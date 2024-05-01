
let ggr = document.getElementsByTagName("li");

for (let i = 0; i < ggr.length; i++) {
    
    ggr[i].onclick = function () {
        ggr[i].id = "active";
        let active = document.getElementById("active");
        if (ggr[i] = active) {
            active.style.backgroundColor = "hsl(217, 12%, 63%)";
            active.style.color = "hsl(0, 0%, 100%)";
        }
    }
}

let star = document.getElementById("star-image");
let ask = document.getElementById("ask");
let explain = document.getElementById("explain");
let ul = document.getElementById("ul");
let button = document.getElementById("button");

let thankimg = document.getElementById("thank-image");
let selected = document.getElementById("selected");
let thank = document.getElementById("thank");
let parag = document.getElementById("parag");

let activation = document.querySelector("#selected p span");

button.addEventListener("click", function (el) {
    el.preventDefault();
    star.style.display = "none";
    ask.style.display = "none";
    explain.style.display = "none";
    ul.style.display = "none";
    button.style.display = "none";

    thankimg.style.display = "block";
    selected.style.display = "block";
    thank.style.display = "block";
    parag.style.display = "block";

    activation.textContent = document.getElementById("active").innerHTML;

});
