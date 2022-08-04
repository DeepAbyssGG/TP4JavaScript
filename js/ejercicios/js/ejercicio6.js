class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this.ISBN = ISBN;
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
    }
    mostrarLibro() {
      document.write(
        `<p>El libro "${this.mostrarTitulo}" con ISBN ${this.mostrarISBN} creado por el autor ${this.mostrarAutor} tiene ${this.mostrarNumPaginas} paginas</p>`
      );
    }
    comparacionLibros(){
      if (libro1.numPaginas > libro2.numPaginas) {
        document.write(`<p>El libro "${libro1.titulo}" tiene mas paginas</p>`);
      } else {
        document.write(`<p>El libro "${libro2.titulo}" tiene mas paginas</p>`);
      }
    }
    get mostrarISBN() {
      return this.ISBN;
    }
    get mostrarTitulo() {
      return this.titulo;
    }
    get mostrarAutor() {
      return this.autor;
    }
    get mostrarNumPaginas() {
      return this.numPaginas;
    }
    set setISBN(nuevoISBN) {
      this.ISBN = nuevoISBN;
    }
    set setTitulo(nuevoTitulo) {
      this.titulo = nuevoTitulo;
    }
    set setAutor(nuevoAutor) {
      this.autor = nuevoAutor;
    }
    set setNumPaginas(nuevoNumPaginas) {
      this.numPaginas = nuevoNumPaginas;
    }
  }
  
  let libro1 = new Libro(
    "103-2",
    "La llamada de Cthulu",
    "H.P LOVECRAFT",
    803
  );
  let libro2 = new Libro(
    "205-1",
    "Metro 2033",
    "Dmitri Glujovsky",
    420
  );
  
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  libro1.comparacionLibros()