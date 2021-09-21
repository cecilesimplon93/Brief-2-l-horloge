// Séléction des aiguilles de la montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extractionde l'heure avec Date()
//déclaration en dehors de la fonction pour pouvoir récupérer les valeurs ailleurs
let heure, min, seconde;
function whattime() {
let temps= new Date();
heure= temps.getHours();
min= temps.getMinutes();
seconde= temps.getSeconds();}
whattime()
//console.log("Il est "+ heure  +":"+  min +":" + seconde);
if (heure>=12)[heure=heure-12];

// Calculer le degré de mouvement de l'aiguille "heure", "minute" et "seconde"
// Hint : Tous les aiguilles doivent se déplacer chaque seconde selon un degré



// JE METS LA MONTRE A L'HEURE
//plaçage initial des aiguilles en degrés en fonction de l'heure
let degSeconde = (seconde*6);
let degMinute = (min*6);
let degHeure = (heure*30);


/*
// Exécuter la fonction chaque seconde
// calcul du nb de degrés qu'on doit incrémenter chaque seconde
let incrementHeure = (12/60)/360;
let incrementMinute = 1/360;
let incrementSeconde = 60/360;

//var interval = setInterval(demarrerLaMontre, 1000);

 function lheuretourne() {
setInterval(
    
    function() {
    AIGUILLESEC.style="transform:rotate("+degSeconde+incrementSeconde+"deg)";
    AIGUILLEMIN.style="transform:rotate("+degMinute+incrementMinute+"deg)";
    AIGUILLEHR.style="transform:rotate("+degHeure+incrementHeure+"deg)"; 
                }
                
    , 1000);             }
lheuretourne();*/

function demarrerLaMontre() { 
    setInterval(
        function()
                    {
    AIGUILLESEC.style="transform:rotate("+degSeconde+"deg)";
    AIGUILLEMIN.style="transform:rotate("+degMinute+"deg)";
    AIGUILLEHR.style="transform:rotate("+degHeure+"deg)"; 
    console.log("Il est "+ heure  +":"+  min +":" + seconde);
                    }
                 
    , 1000);            }

    demarrerLaMontre();

    

