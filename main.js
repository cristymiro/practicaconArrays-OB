


let listaCompra = ['naranjas', 'patatas', 'chocolate', 'sal', 'mermelada'];
document.write('Ejercicio 1 ' + '<br>')
document.write(listaCompra)
let anadir = listaCompra.push('aceite de girasol');

console.log(anadir);
document.write('Ejercicio 2' + '<br>');


document.write('Lista de la compra: ' + listaCompra + '<br>')

document.write('Ejercicio 3 ' + '<br>')
listaCompra.splice(5);
document.write(listaCompra + '<br>')

document.write('Ejercicio 4: Una lista de tus 3 películas favoritas: objetos con propiedades: titulo, director, fecha)' + '<br>')

let peliculasFavoritas = [
    {
        titulo: 'Harry Potter',
        director: 'J.K. Rowling',
        fecha: 2001,
    },
    {
        titulo: 'La vida es Bella',
        director: 'Roberto Benigni',
        fecha: 1999,
    },
    {
        titulo: 'Limitless',
        director: 'Neil Burger',
        fecha: 2011,
    }
]

console.log(peliculasFavoritas)

let anteriorPelicula = peliculasFavoritas.filter(peliculasFavoritas => peliculasFavoritas.fecha <= 2010)
console.log(anteriorPelicula);


const newArray = peliculasFavoritas.map(valor => {
    return valor.director
})

console.log(newArray);

const listaPeliculas = peliculasFavoritas.map(valor => {
    return valor.titulo
})

console.log(listaPeliculas);


const practicaConcat = newArray.concat(listaPeliculas);
console.log(practicaConcat)

