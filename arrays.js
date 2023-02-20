let compras=["pan", "harina", "azucar", "sal", "galletas"];
compras.push("aceite de girasol");
compras.pop();

let peliculas=[
    {nombre:"la llegada", director:"Denis Villeneuve", año:2016},
    {nombre:"Harry Potter y el prisionero de Azkaban", director:"Alfonso Cuaron", año:2004},
    {nombre:"la la land",director:"Damien Chazelle", año:2016},
    {nombre:"the Rocky Horror Picture Show", director:"Jim Sharman", año:1975}
]

let añoLanzamiento= peliculas.filter(fecha=> fecha.año > 2001);
let directores = peliculas.map((valor, indice)=>{
    return `${indice+1} - ${valor.director}`
});
let titulos= peliculas.map((valor, indice)=>{
    return `${indice+1} - ${valor.nombre}`
});
let unir=directores.concat(titulos);
let propagacion=[...directores,...titulos];
