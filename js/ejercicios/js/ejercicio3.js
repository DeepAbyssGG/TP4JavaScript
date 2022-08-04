class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    perimetro() {
      document.write(
        `<p>El perimetro es: (2 * ${this.alto}) + (2 * ${this.ancho}) = ${
          2 * this.alto + 2 * this.ancho
        }</p>`
      );
    }
    area() {
      document.write(
        `<p>El area de este rectangulo es: (${this.alto} * ${this.ancho}) = ${
          this.alto * this.ancho
        }</p>`
      );
    }
    mostrarPropiedades() {
      document.write(`<p>Alto del triangulo: ${this.alto}</p>
      <p>Ancho del triangulo: ${this.ancho}</p>`);
    }
  
    set modificarAlto(NuevoAlto) {
      this.alto = NuevoAlto;
    }
    set modificarAncho(NuevoAncho) {
      this.ancho = NuevoAncho;
    }
  }
  
  // let alto  = parseInt(prompt("Ingrese el alto"))
  // let ancho = parseInt(prompt("ingrese el ancho"))
  // let alto  = 10
  // let ancho = 2
  
  let rectangulo1 = new Rectangulo(20, 10);
  rectangulo1.mostrarPropiedades();
  rectangulo1.perimetro();
  rectangulo1.area();
  
  console.log(rectangulo1);
  rectangulo1.modificarAlto = 100;
  rectangulo1.modificarAncho = 19;
  rectangulo1.mostrarPropiedades();
  rectangulo1.perimetro();
  rectangulo1.area();
  
  
  rectangulo1.modificarAlto = 120;
  rectangulo1.modificarAncho = 39;
  rectangulo1.mostrarPropiedades();
  rectangulo1.perimetro();
  rectangulo1.area();
  
  // DE DONDE SALE EL UNDEFINED? AIUDA..
  