//funciones con los 5 problemas
function distanciaPlanetaria(x1,y1,x2=0,y2=0) {
    return  Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
}

function descifradorPiloto(clave){
  return  clave.split(":").slice(1);
}

const temperaturaEndor = (max,min) =>{
  return (max+min)/2;
}

//escribe los resultados  por consola
console.log("Problema N1= ",distanciaPlanetaria(50,70));
console.log("Problema N2= ",...descifradorPiloto("ARQ20055: Noddin Chavrin"));
console.log(temperaturaEndor(27,10));