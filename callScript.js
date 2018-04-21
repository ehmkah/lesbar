var x = document.documentElement.innerHTML;

// entfernen des Innen in Ihren Varianten
var x = x.replace(/rInnen/g, "r");
var x = x.replace(/Innen/g, "en");

// entfernen der Sterne in ihren Varianten
var x = x.replace(/r\*innen/g, "r");
var x = x.replace(/r\*in/g, "r");
var x = x.replace(/\*innen/g, "en");

// und noch ein paar verrückte Dinge
var x = x.replace(/jede\*r/g, "jeder");

document.documentElement.innerHTML = x;
