//funciones con los 5 problemas
function distanciaPlanetaria(x1,y1,x2=0,y2=0) {
    return  Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
}

function descifradorPiloto(codNave){
  return  codNave.split(":").slice(1);
}

const calcularTemperaturaPromedio = Temperatura =>{
  return (Math.min(...Temperatura)+Math.max(...Temperatura))/2;
}

function numeroSablesOscuros(sables){
  let energiaOscura=0;
  for(let i=0;i<sables.length;i++){
    if(sables[i]<0){
      energiaOscura++;
    }
  }
  return energiaOscura;
}

const saludoFlecha = saludo => `hello madafa.. ${saludo}`

//escribe los resultados  por consola haga sus propios testeos
console.log(`Distancia entre los planetas= ${distanciaPlanetaria(50,70)}`);
console.log(`Nombre del piloto de la Nave=${descifradorPiloto("ARQ20055: Noddin Chavrin")}`);
console.log(`Temperatura promediode endor= ${calcularTemperaturaPromedio([10,50,60,20,5])}C`);
console.log(`cantidad de sables con energia negativa= ${numeroSablesOscuros([2,4-8,5,-6])}`);
console.log(saludoFlecha("Kamill"))
