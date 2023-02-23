let yo={
    nombre:"julianny",
    apellido:"camacho",
    edad: 26,
    altura:1.62,
    itsDeveloper:true,
}
let edad= yo.edad;

let objetos= [
    yo, {nombre:"maria", apellido:"davila", edad:28, altura:1.67, itsDeveloper:false},{nombre:"moises", apellido:"lledo",edad:27,altura:1.74, itsDeveloper:true},
];
objetos.sort((a,b)=>b.edad-a.edad);
