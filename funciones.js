function verdad() {
    return true;
};
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(), 5000);
  });
  promise
  .then(()=>console.log("soy una promesa"))

function* generarIndices(){
    let indice= 0;
    while(true){
        indice +=2
        yield indice
    }
}
let generador= generarIndices();
console.log(generador.next());
console.log(generador.next());