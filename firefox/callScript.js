var x = document.documentElement.innerHTML;

var element = "<span title='Ersetzt durch lesbar' style='text-decoration: underline;color:darkviolet;'>"

var x = x.replace(/([a-zA-ZöüäÄÖÜß!\*]*Innen)/g, element+"$1</span>");
var x = x.replace(/([a-zA-ZöüäÄÖÜß!\*]*\*innen)/g, element+"$1</span>");
var x = x.replace(/([a-zA-ZöüäÄÖÜß!\*]*In)/g, element+"$1</b>");


// entfernen des Innen erst die speziellen, dann die allgemeinen
var x = x.replace(/ztInnen/g, "zte");
var x = x.replace(/torInnen/g, "toren");
var x = x.replace(/rInnen/g, "r");
var x = x.replace(/Innen/g, "en");

// entfernen der Sterne erst die speziellen, dann die allgemeinen
var x = x.replace(/zt\*innen/g, "zte");
var x = x.replace(/tor\*innen/g, "toren");
var x = x.replace(/r\*innen/g, "r");
var x = x.replace(/r\*in/g, "r");
var x = x.replace(/\*innen/g, "en");

// und noch ein paar verrückte Dinge
var x = x.replace(/ede\*r/g, "eder");
var x = x.replace(/eine\*r/g, "einer");
var x = x.replace(/sie\*er/g, "er");

document.documentElement.innerHTML = x;
