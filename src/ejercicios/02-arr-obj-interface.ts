/*
    ===== Código de TypeScript =====
*/

let habilidades:string[]= ['Atacar','Contra','Curar'];

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}


const personaje:Personaje = {
    nombre: 'Strider',
    hp:100,
    habilidades:['Atacar','Contra','Curar']
}

personaje.puebloNatal='Insomnia';

console.table(personaje);