
class Producto {
    constructor (codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    
}
// agregar metodo imprimir datos, el cual escribira por pantalla los valores de las propiedeades.
imprimirDatos() {
    document.write(`<p>El codigo del producto es: ${this.codigo} <br>
    El nombre corresponde a: ${this.nombre} <br>
    Mientras que su precio equivale a: ${this.precio} </p>`);

}
agregarArray() {
    arrayCasas.push(this.codigo, this.nombre, this.precio);
    console.log(arrayCasas)
}
mostrarArray() {
    document.write(arrayCasas)
}
}

arrayCasas = []
// crear 3 instancias del objeto y guardarlas en un array
let casa1 = new Producto(parseInt(01), "casa1", parseInt(1500))
let casa2 = new Producto(parseInt(02), "casa2", parseInt(3300))
let casa3 = new Producto(parseInt(03), "casa3", parseInt(4500))

casa1.imprimirDatos()
casa2.imprimirDatos()
casa3.imprimirDatos()

casa1.agregarArray()
casa2.agregarArray()
casa3.agregarArray()

console.log(arrayCasas)


