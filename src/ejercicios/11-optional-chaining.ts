/*
    ===== Código de TypeScript =====
*/

interface pasajero{
    nombre:string;
    hijos?:string[];
}

const pasajero1:pasajero={
    nombre:'Fernas'
}
const pasajero2:pasajero={
    nombre:'Pepe',
    hijos:['maria','paco']
}
function imprimeHijos(pasajero:pasajero):void{
    const cuantosHijos=pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
    
}

imprimeHijos(pasajero2);