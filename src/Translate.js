function NotSupported(){
    document.body.innerHTML = "Sorry, this country is not supported.";
    document.body.style.cssText = "background-color: black; color: white; font-size: 35px;";
}

function ButtonClick(){
    const button = document.getElementById("button");
    button.style.cssText = "background-color: black; color: teal; font-weight: 700;";
}

function Error(){
    document.body.innerHTML = "Looks like you lost your connection. Please check it and try again.";
    document.body.style.cssText = "background-color: black; color: white; font-size: 35px;";
}

const Translate = (searchKey)=>{
    switch(searchKey.trim().split(" ").join("").toLowerCase()){
        case "argentina":
            return "ar"
        case "australia":
            return "au"
        case "austria":
            return "at"
        case "belgium":
            return "be"
        case "brazil":
            return "br"
        case "bulgaria":
            return "bg"
        case "canada":
            return "ca"
        case "china":
            return "cn"
        case "colombia":
            return "co"
        case "cuba":
            return "cu"
        case "czechrepublic":
            return "cz"
        case "egypt":
            return "eg"
        case "france":
            return "fr"
        case "germany":
            return "de"
        case "greece":
            return "gr"
        case "hongkong":
            return "hk"
        case "hungary":
            return "hu"
        case "india":
            return "in"
        case "indonesia":
            return "id"
        case "ireland":
            return "ie"
        case "israel":
            return "il"
        case "italy":
            return "it"
        case "japan":
            return "jp"
        case "latvia":
            return "lv"
        case "lithuania":
            return "lt"
        case "malaysia":
            return "my"
        case "mexico":
            return "mx"
        case "morocco":
            return "ma"
        case "netherlands":
            return "nl"
        case "newzealand":
            return "nz"
        case "nigeria":
            return "ng"
        case "norway":
            return "no"
        case "philippines":
            return "ph"
        case "poland":
            return "pl"
        case "portugal":
            return "pt"
        case "romania":
            return "ro"
        case "russia":
            return "ru"
        case "saudiarabia":
            return "sa"
        case "serbia":
            return "rs"
        case "singapore":
            return "sg"
        case "slovakia":
            return "sk"
        case "slovenia":
            return "si"
        case "southafrica":
            return "za"
        case "southkorea":
            return "kr"
        case "sweden":
            return "se"
        case "switzerland":
            return "ch"
        case "taiwan":
            return "tw"
        case "thailand":
            return "th"
        case "turkey":
            return "tr"
        case "uae":
            return "ae"
        case "ukraine":
            return "ua"
        case "unitedkingdom":
            return "gb"
        case "britain":
            return "gb"
        case "england":
            return "gb"
        case "uk":
            return "gb"
        case "u.k.":
            return "gb"
        case "u.k":
            return "gb"
        case "unitedstates":
            return "us"
        case "america":
            return "us"
        case "us":
            return "us"
        case "u.s.":
            return "us"
        case "u.s":
            return "us"
        case "usa":
            return "us"
        case "u.s.a.":
            return "us"
        case "u.s.a":
            return "us"
        case "venezuela":
            return "ve"
        default:
            NotSupported()
            return ""
    }
}

export const list = {Translate, ButtonClick, Error};