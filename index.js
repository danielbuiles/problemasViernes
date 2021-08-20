function Problem1(x1,y1,x2=0,y2=0) {
    return  Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
}

function problem2(clave) {
    return clave.split(" ").splice(1);
}

console.log("Problema N1= ",Problem1(50,70));
console.log("Problema N2= ",...problem2("SHJWER3D3: Juana Camellin"));