let minori = 17;
let anziani = 65;
const costoKm = 0.21;
let prezzo = 0;



let km = prompt('Quanti chilometri devi percorrere?');
console.log(km);

prezzo = km*costoKm;

let età = prompt ('Quanti anni hai?');
console.log(età);
 
if (età<=minori){
    prezzo = prezzo-((prezzo/100)*20);
    prezzo = prezzo.toFixed(2);
    prompt('il prezzo è: '+prezzo+'€','complimenti hai diritto ad uno sconto del 20%. Buon Viaggio!');
}else if (età>anziani){
    prezzo = prezzo-((prezzo/100)*40);
    prezzo = prezzo.toFixed(2);
    prompt('il prezzo è: '+prezzo+'€',' complimenti hai diritto ad uno sconto del 40%','Buon Viaggio!');
}else{
    prezzo = prezzo.toFixed(2);
    prompt('Il prezzo del Viaggio è: '+prezzo+'€');
}

