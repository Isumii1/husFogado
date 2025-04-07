let json = [];
const tarolo = document.getElementById('tarolo');
const lista = document.getElementById('lista');
window.addEventListener("DOMContentLoaded",async()=>{
    try {     
        const betoltes = await fetch('allatok.js');
        json = await betoltes.json();
        kepernyoBetoltes(json);
    } 
    catch (error) {
        alert('Meghibásodott adat.')
    }
})

lista.addEventListener('change',()=>{
    if(lista.value==="osszes"){
        kepernyoBetoltes(json)
    }
    if(lista.value==="kutya"){
        kepernyoBetoltes(json.filter(x => x.tipus=="kutya"))
    }
    if(lista.value==="cica"){
        kepernyoBetoltes(json.filter(x => x.tipus=="macska"))
    }
});

function kepernyoBetoltes(json){
    tarolo.innerHTML='';
    json.forEach(x => {
        const tartalom = `
            <div class="col">
                <div class="h-100 rounded shadow bg-opacity-75 bg-white border-danger border border-2 text-break sh p-4">
                    <div class="fw-bold fs-2 text-center text-danger">${x.nev}</div>
                    <img src="allatok/${x.kep}" alt="" class="img-fluid">
                    <div class="fw-bold fs-4 text-danger">Kor: <span class="fw-bold fs-5 text-dark">${x.kor}</span></div>
                    <div class="fw-bold fs-4 text-danger">Súly: <span class="fw-bold fs-5 text-dark">${x.suly}kg</span></div>
                    <div class="fw-bold fs-4 text-danger">Nem: <span class="fw-bold fs-5 text-dark">${x.nem}</span></div>
                    <div class="fw-bold fs-4 text-danger">Fajta: <span class="fw-bold fs-5 text-dark">${x.fajta}</span></div>
                    <div class="fw-bold fs-4 text-danger">Leírás: <span class="fw-bold fs-5 text-dark">${x.leiras}</span></div>
                </div>
            </div>
        `
        tarolo.insertAdjacentHTML("beforeend",tartalom);
    });
}