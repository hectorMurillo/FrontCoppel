export interface Poliza{
    idPoliza:number,
    cantidad:number,
    cliente:string,
    fecha:Date,
    empleadoGenero:Usuario,
    detalleArticulo:Inventario
}

interface Inventario{
    sku:number,
    cantidad:number,
    nombre:string
}
interface Usuario{
    username:string,
    nombre:string,
    apellido:string
}