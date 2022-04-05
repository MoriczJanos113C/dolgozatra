//install
//npm i lokijs
//npm i uuid

const loki = require('lokijs');
const uuid = require('uuid');

const db = new loki("library.db");

db.addCollection("konyv", ["id", "cim", "szerzo"]); //indexek/oszlopok megadása

const b = db.addCollection("konyvek", {
    indices: ["cim", "szerzo"],
    unique: ["cim", "id"] //1, v 2 oszlop is akár, egyedi nem lehet ugyanaz mikor beszurunk
});


try {
    b.insert({
        "id": uuid.v4(),
        "cim": 'Alma',
        "szerzo": 'Korte'
    });
    b.insert({
        "id": uuid.v4(),
        "cim": 'Barack',
        "szerzo": 'Korte'
    });
} catch (err) {
    console.log(err);
}

//console.table(b)


//keresés összes
const konyveim = b.find({
    
})
console.table(konyveim)


//keresés egy db
const egyKonyv = b.find({
    "cim": 'Barack'
});
console.table(egyKonyv);

//törlés
b.remove(egyKonyv);
console.table(konyveim)

//frissítés
let ujkonyv = b.findOne({
    cim: 'Alma'
})
ujkonyv.szerzo='Ujszerzo';
b.update(ujkonyv);

console.log(b.find()),



db.saveDatabase(err => {
    console.log(err)
});