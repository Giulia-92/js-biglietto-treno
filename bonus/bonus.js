let cucina = 0;
let sala = 0;




let sceltac = prompt('Quale cucina vuoi?');
console.log(sceltac);


if (sceltac =='p') {
    cucina = 1; prompt('Hai scelto il modello base:Ottimo per cominciare');
} else if (sceltac == 'm') {
    cucina = 2;
    prompt('Hai scelto il nostro modello standard');
} else if (sceltac == 'g'){
    cucina = 3;
    prompt('Hai scelto il modello Delux');
}





let sceltas = prompt('Quale salotto vuoi?');
console.log(sceltas);


if (sceltas =='p') {
    salotto = 1; prompt('Hai scelto il modello base:Ottimo per cominciare');
} else if (sceltas == 'm') {
    salotto = 2;
    prompt('Hai scelto il nostro modello standard');
} else if (sceltas == 'g'){
    salotto = 3;
    prompt('Hai scelto il modello Delux');
}

