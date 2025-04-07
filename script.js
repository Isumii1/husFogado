window.addEventListener('DOMContentLoaded', ()=>{
    const nyelvCookie=getCookie("nyelv");
    if(nyelvCookie){
        switch(nyelvCookie){
            case "magyar":
                magyarNyelv();
                break;
            case "angol":
                angolNyelv();
                break;
        }
    }
    else{
        magyarNyelv();
    }
});

const aktualisFile = window.location.pathname.split('/').pop();
let nyelv = "magyar";

function angolNyelv(){
    nyelv="angol";
    if(aktualisFile==="informaciok.html"){
        document.getElementById("cegInformaciokCim").innerText = "Company Information";
        document.getElementById("szekhelyCim").innerText = "Headquarters";
        document.getElementById("szekhelyP1").innerText = "Hús Megőrző Ltd.";
        document.getElementById("szekhelyP2").innerText = "1053 Budapest, Kossuth Lajos utca 10.";
        document.getElementById("szekhelyP3").innerText = "H-1053";
        document.getElementById("szekhelyP4").innerText = "Hungary";
        document.getElementById("kapcsolatCim").innerText = "Contact";
        document.getElementById("telefonP").innerText = "Phone: +36 1 234 5678";
        document.getElementById("emailP").innerHTML = 'Email: <a href="mailto:info@husmegorozo.hu">info@husmegorozo.hu</a>';
        document.getElementById("weboldalP").innerHTML = 'Website: <a href="https://www.husmegorozo.hu" target="_blank">www.husmegorozo.hu</a>';
        document.getElementById("cegjegyzekSzamCim").innerText = "Company Registration Number";
        document.getElementById("cegjegyzekSzamP").innerText = "01-09-123456";
        document.getElementById("adoszamCim").innerText = "Tax Number";
        document.getElementById("adoszamP").innerText = "12345678-2-42";
        document.getElementById("kepviseloCim").innerText = "Representation";
        document.getElementById("kepviseloP1").innerText = "Company Representative: Kovács Péter";
        document.getElementById("kepviseloP2").innerText = "Position: CEO";
    }
    if(aktualisFile==="allatok.html"){
        document.getElementById("osszes").innerText = "All";
        document.getElementById("dog").innerText = "Dogs";
        document.getElementById("cat").innerText = "Cats";
    }
    if(aktualisFile==="index.html"){
        document.getElementById("foSzoveg").innerText = "If you feel like your life is missing a little loyal dog or kitty who is always there when your favourite socks go missing (because he must have stolen them), then this is the place for you! Our shelter is full of dogs and cats with special superpowers: one is a professional couch potato and another is an expert at ‘I'm still hungry after a three-hour walk’. Our dogs and cats are ready to take over the running of the house, ensuring that all your days are filled with fun, weird noises (yes, they can talk, but in secret) and of course, lots of love. And if you think a dog or cat can't surprise you, wait until yours tries to reach the fridge..."; 
    }
    document.getElementById("termekekNav").innerText = "Adopt a Pet";
    document.getElementById("informaciokNav").innerText = "Information";
    document.getElementById("nyelvCsereleseSzoveg").innerText = "Change Language";
}

function magyarNyelv(){
    nyelv="magyar";
    if(aktualisFile==="informaciok.html"){
        document.getElementById("cegInformaciokCim").innerText = "Céginformációk";
        document.getElementById("szekhelyCim").innerText = "Székhely";
        document.getElementById("szekhelyP1").innerText = "Hús Megőrző Kft.";
        document.getElementById("szekhelyP2").innerText = "1053 Budapest, Kossuth Lajos utca 10.";
        document.getElementById("szekhelyP3").innerText = "H-1053";
        document.getElementById("szekhelyP4").innerText = "Magyarország";
        document.getElementById("kapcsolatCim").innerText = "Kapcsolat";
        document.getElementById("telefonP").innerText = "Telefon: +36 1 234 5678";
        document.getElementById("emailP").innerHTML = 'E-mail: <a href="mailto:info@husmegorozo.hu">info@husmegorozo.hu</a>';
        document.getElementById("weboldalP").innerHTML = 'Weboldal: <a href="https://www.husmegorozo.hu" target="_blank">www.husmegorozo.hu</a>';
        document.getElementById("cegjegyzekSzamCim").innerText = "Cégjegyzékszám";
        document.getElementById("cegjegyzekSzamP").innerText = "01-09-123456";
        document.getElementById("adoszamCim").innerText = "Adószám";
        document.getElementById("adoszamP").innerText = "12345678-2-42";
        document.getElementById("kepviseloCim").innerText = "Képviselet";
        document.getElementById("kepviseloP1").innerText = "A cég képviselője: Kovács Péter";
        document.getElementById("kepviseloP2").innerText = "Beosztás: Ügyvezető igazgató";
    }
    if(aktualisFile==="allatok.html"){
        document.getElementById("osszes").innerText = "Összes";
        document.getElementById("dog").innerText = "Kutyusok";
        document.getElementById("cat").innerText = "Cicák";
    }
    if(aktualisFile==="index.html"){
        document.getElementById("foSzoveg").innerText = "Ha úgy érzed, hogy életedből hiányzik egy kis hűséges kutya vagy cicus, aki mindig ott van, amikor a kedvenc zoknid eltűnik (mert ő biztos, hogy elrabolta), akkor itt a helyed! A menhelyünk tele van kutyákkal és macskákal, akik különleges szuperképességekkel rendelkeznek: egyikük profi kanapépihenő, másikuk pedig szakértő a ’három órás séta után is éhes vagyok’ programban. Kutyáink és macskáink készen állnak arra, hogy átvegyék a házvezetést, biztosítva, hogy az összes napod tele legyen mókával, fura hangokkal (igen, ők tudnak beszélni, de titokban) és természetesen rengeteg szeretettel. Ha pedig azt hiszed, hogy egy kutya vagy macska nem tudna meglepni, várj, amíg a tiéd megpróbálja elérni a hűtőt…"; 
    }
    document.getElementById("termekekNav").innerText = "Örökbefogadás";
    document.getElementById("informaciokNav").innerText = "Információk";
    document.getElementById("nyelvCsereleseSzoveg").innerText = "Nyelv cserélése";
}

document.getElementById("nyelvGomb").addEventListener("click",()=>{
    if(nyelv==="magyar"){
       angolNyelv();
       setCookie("nyelv",nyelv,7);
    }
    else{
        magyarNyelv();
        setCookie("nyelv",nyelv,7);
    }
});

function getCookie(key) {
    const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${key}=`));
    return cookie ? cookie.split("=")[1] : null;
}

function setCookie(name, value, days) {
    const date = new Date(); 
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}