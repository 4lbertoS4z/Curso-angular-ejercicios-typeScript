/*
    ===== Código de TypeScript =====
*/


interface Reproductor {
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles {
    autor:string;
    anio:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:'hello',
    detalles:{
        autor:'pepito',
        anio:2021
    }
}

const{ volumen,segundo, cancion,detalles}=reproductor;
const{autor}=detalles;

/*console.log('El volumen es:', volumen);
console.log('El segundo es:', segundo);
console.log('El canción es:', cancion);
console.log('El autor es:', autor);*/

const dbz:string[]=['goku','trunks','vegeta'];
const [p1,p2,p3] = dbz;
console.log(p1);
console.log(p2);
console.log(p3);



