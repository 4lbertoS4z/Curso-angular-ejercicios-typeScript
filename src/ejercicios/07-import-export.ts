/*
    ===== Código de TypeScript =====
*/
import { Producto, calcularISV } from "./06-desestructuracion-funcion";



const carritoCompras:Producto[]=[
    {
        desc:'telefono 1',
        precio:100
    },
    {
        desc:'telefono 2',
        precio:150
    },
];

const [total,isv]=calcularISV(carritoCompras);

console.log('ISV: ',isv);
console.log('Total: ',total);


