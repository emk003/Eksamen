// denne kode er til at gemme prisen på et valgt produkt og mængden
let price = 0
let quantity = 0



function set_item(item_name){
    switch(item_name){
        case "øl": //her skriver vi case som står for en item
            price = 10//her fortæller vi at item øl skal have prisen 10,-
            break // her afbrydes switch-statementet, så koden ikke går ned i den næste
        case "øl_0":
            price = 10
            break
        case "cider":
            price = 16
            break
        case "shot":
            price = 5
            break
        case "faxe_free":
            price = 6
            break
        case "faxe_kondi":
            price = 6
            break
        case "pepsi_max":
            price = 6
            break
        case "redbull":
            price = 16
            break
        case "cola":
            price = 6
            break
        case "drink":
            price = 25
            break
    }
     console.log(price)  //???????????????????????????????????????????????????????
}


//denne kode er til at sætte mængden af det valgte produkt
function set_quantity(amount){
    quantity = amount
    console.log(amount)
}

//denne Funktion er til at beregne den totale pris baseret på valgt pris og mængde og vise det efter man har trykket total
function calculate_total(){
    let total = price * quantity
    console.log(total)
    document.getElementById("total").innerHTML = total
}
