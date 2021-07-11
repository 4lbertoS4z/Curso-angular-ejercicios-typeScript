/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'nokia',
    precio:350
}

const tableta:Producto={
    desc:'ipad air',
    precio:400
}

export function calcularISV(productos:Producto[]):[number,number]{
    
    let total=0;

    productos.forEach(({precio})=>{
        total +=precio;
    })
    return [total,total*0.15];
}
/* const articulos =[telefono,tableta];

const [total,isv]=calcularISV(articulos);

console.log('ISV: ',isv);
console.log('Total: ',total);
*/

