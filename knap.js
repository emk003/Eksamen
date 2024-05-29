//funktionens navn
function myFunction() {
    var dots = document.getElementById("dots"); //referrer til elementet med ID'et "dots"
    var moreText = document.getElementById("more");//referrer til elementet med ID'et "moreText"
    var btnText = document.getElementById("myBtn");//referrer til elementet med ID'et "BtnText"

    // if bruges til skifte mellem to tilstande (if og else) og derfor tjekker den om "dots" elementet er skjult
    if (dots.style.display === "none") {

        // Hvis "dots" er skjult, viser den dots
        dots.style.display = "inline";

        // Hvis "dots" er skjult, skifter den knapteksten til "Vis mere"
        btnText.innerHTML = "Vis mere";

        // Hvis "dots" er skjult, viser den ikke "moreText" elementet//
        moreText.style.display = "none";

        // else funktionen tjekker om if funktionens betingelser er falske og gør dermed følgende
    } else {
        // Hvis "dots" er synligt, viser den ikke dots
        dots.style.display = "none";

        // Hvis "dots" er synligt, skifter den knapteksten til "Vis mindre"
        btnText.innerHTML = "Vis mindre";

        // Hvis "dots" er synligt, viser den "moreText" elementet
        moreText.style.display = "inline";
    }
}

//https://www.w3schools.com/howto/howto_js_read_more.asp fået hjælp fra denne side til at lave funktionen