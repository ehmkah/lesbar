var x = document.documentElement.innerHTML;
const genderSternchen = ['Innen', '\\*innen', ':innen'];
const ersetzungen = [
    ['zt', 'zte'],
    ['tor', 'toren'],
    ['r', 'r'],
    ['', 'en']
];

// allgemeine Ersetzungen
for (const einSternchen of genderSternchen) {
    for (const ersetzungenElement of ersetzungen) {
        const ersetzung = new RegExp(ersetzungenElement[0] + einSternchen, 'g');
        x = x.replace(ersetzung, ersetzungenElement[1]);
    }
}
// Spezialfaelle *
var x = x.replace(/r\*in/g, 'r');

// Spezialfaelle :
var x = x.replace(/r:in/g, 'r');

// und noch ein paar verrückte Dinge
var x = x.replace(/ede\*r/g, 'eder');
var x = x.replace(/eine\*r/g, 'einer');
var x = x.replace(/sie\*er/g, 'er');

document.documentElement.innerHTML = x;
