//funciones tradicionales con los 5 problemas
function distanciaPlanetaria(x1,y1,x2=0,y2=0) {
    return  (`Distancia entre los planetas= ${Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2))}`);
}

function descifradorPiloto(codNave){
  return  (`Nombre del piloto de la Nave= ${codNave.split(":").slice(1)}`);
}

function calcularTemperaturaPromedio (Temperatura){
  let temperatura = (Math.min(...Temperatura)+Math.max(...Temperatura))/2;
  return `Temperatura promediode endor= ${temperatura}C`;
}

function numeroSablesOscuros(sables){
  let energiaOscura=0;
  for(let i=0;i<sables.length;i++){
    if(sables[i]<0){
      energiaOscura++;
    }
  }
  return (`cantidad de sables con energia negativa= ${energiaOscura}`);
}

function wattoSalarioVendedor(nombre,nroLicenciasVendidas=0){

  let vendedorSalario = 3500000+((1500000*nroLicenciasVendidas)-(75000*nroLicenciasVendidas));

  console.log(`${nombre} se gana un salario mensual de $${vendedorSalario} millones de pesos`)
}

//escribe los resultados  por consola haga sus propios testeos
console.log(distanciaPlanetaria(50,70));
console.log(descifradorPiloto("ARQ20055: Noddin Chavrin"));
console.log(calcularTemperaturaPromedio([10,50,60,20,5]));
console.log(numeroSablesOscuros([2,4-8,5,-6]));
console.log(wattoSalarioVendedor("Martin",1));