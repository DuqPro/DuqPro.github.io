var cookiecount = 0;
var multiplier = 1;
var clickvalue = 1;

function add() {
    cookiecount = cookiecount + (clickvalue * multiplier);
    document.getElementById("cookiecounter").innerHTML = "Cookie count: " + cookiecount;
}