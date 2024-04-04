//primitivni tipovi
let godine:number=20;
let ime:string="Nadja";
let studira:boolean=true;

//kompleksni tipovi


 //nizovi
let predmeti:string[]=["EPOS","Klijentske","Cloud"]; //niz stringova
let ocene:number[]=[10,9,8]; //niz brojeva

//Tuples
let tuple:[string,number]=["Nadja", 20];

//enum
enum Modul{
    TehnologijeElektronskogPoslovanja,
    SoftvreskoInzenjerstvo,
    InformacioniSistemi
}
let modul:Modul=Modul.TehnologijeElektronskogPoslovanja;

//objekti
let student:{ime:string,godine:number,studira:boolean}={
    ime:"Nadja",
    godine:20,
    studira:true
};

//unija tipova
let brojIliString:number | string = 10;

//Any tip
let biloKojiTip:any="Moze biti bilo koji tip";

//void tip
function cao():void{
    console.log("Cao");
}

//null i undefined
let n:null=null;
let u:undefined=undefined;

//tipe assertions
let nekaVrednost:any="Neki string";
let duzinaStringa:number=(nekaVrednost as string).length;
console.log("Duzina stringa je",duzinaStringa);

console.log(godine,ime,studira);
console.log(predmeti,ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n,u);