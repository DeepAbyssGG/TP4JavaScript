let auto = {
    color: 'gris',
    marca: 'Volkswagen',
    modelo: 'Gol',
    encender: ()=>{
        document.write('<p>Auto encendido</p>')
    },
    apagar: ()=>{
        document.write('<p>Auto apagado</p>')
    }
}
document.write(`<p>El color del auto es: ${auto.color}</p>`)
document.write(`<p>La marca del auto es: ${auto.marca}</p>`)
document.write(`<p>El modelo del auto es: ${auto.modelo}</p>`)
auto.encender()
auto.apagar()