const pruef = function () {
    var liste = document.getElementsByTagName("TD");
    for (var i = 0; i < liste.length; i = i + 2) {
        if (liste[i].textContent === liste[i + 1].textContent) {

            // everything fine
        } else {
            
            alert('kaputt:'+ liste[i].textContent);
        }
    }
}