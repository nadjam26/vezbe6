//primitivni tipovi
var godine = 20;
var ime = "Nadja";
var studira = true;
//kompleksni tipovi
//nizovi
var predmeti = ["EPOS", "Klijentske", "Cloud"]; //niz stringova
var ocene = [10, 9, 8]; //niz brojeva
//Tuples
var tuple = ["Nadja", 20];
//enum
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeElektronskogPoslovanja"] = 0] = "TehnologijeElektronskogPoslovanja";
    Modul[Modul["SoftvreskoInzenjerstvo"] = 1] = "SoftvreskoInzenjerstvo";
    Modul[Modul["InformacioniSistemi"] = 2] = "InformacioniSistemi";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeElektronskogPoslovanja;
//objekti
var student = {
    ime: "Nadja",
    godine: 20,
    studira: true
};
//unija tipova
var brojIliString = 10;
//Any tip
var biloKojiTip = "Moze biti bilo koji tip";
//void tip
function cao() {
    console.log("Cao");
}
//null i undefined
var n = null;
var u = undefined;
//tipe assertions
var nekaVrednost = "Neki string";
var duzinaStringa = nekaVrednost.length;
console.log("Duzina stringa je", duzinaStringa);
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n, u);
