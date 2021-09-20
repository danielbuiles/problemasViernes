//ejercisio N1
function hanSolo(plano,despegueNave) {
    if(plano<0 || plano>10){
        console.log(`el plano ${plano} es falso desacartalo Haaaaaaannn `)
        console.log(despegueNave(true))
    }else{
        console.log(`el plano ${plano} ha sido verificado y pasado con exito`)
        console.log(despegueNave(false))
    }
}

hanSolo(1,(plano) =>{
    return((plano)?"No despegues":"despegando...");
});


//EJERCISIO N2
const padawanActividad = (edad) => {
    return new Promise(resolve => {
        setTimeout(() => {
            if(edad>=15){
                resolve('Manejo del sable');
            }else{
                resolve('Manejo de la fuerza');
            }
        },2000);
    });

};

const matricularPadawans = async (studentData) =>{
    let padawan ={
        nombre:`${studentData[0]}`,
        planeta:`${studentData[1]}`,
        edad:`${studentData[2]}`,
        estatura:`${studentData[3]}`
    }
    console.log(`el padawan ${padawan.nombre} hara un ${await padawanActividad(padawan.edad)} en el planeta ${padawan.planeta}`);
};

//HAGA SUS TESTEOS
matricularPadawans(["kamil",'Naboon',10,1.89])