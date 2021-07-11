

/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe{
    nombre:string;
    edad:number;
    direccion:Direccion
   /* direccion:{
        calle:string
        pais:string
        ciudad:string
    };*/
    mostrarDireccion:() => string;
}
interface Direccion{
    calle:string
    pais:string
    ciudad:string
}


const superHeroe:SuperHeroe={
    nombre:'Spiderman',
    edad:30,
    direccion:{
        calle:'Main ST',
        pais:'USA',
        ciudad:'NY'
    },
    mostrarDireccion(){
        return this.nombre+', '+this.edad+', '+this.direccion.calle+', '+this.direccion.ciudad+', '+this.direccion.pais;
    }
    
}
const direccion=superHeroe.mostrarDireccion();
    console.log(direccion);
