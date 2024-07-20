
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let [pos0, pos1, pos2, pos3, pos4, ...resP] = numeros;

let dispuestos = [pos0, pos2, pos4]

let resto = [pos1, pos3, ...resP]
console.log(dispuestos)

console.log(resP)


let mascota ={
nombre: "Bony",
tipoDeMascota: "Perro",
color: "Dorado",
raza: "Golden retriever"
}

let {
    nombre, tipoDeMascota, color, raza
} = mascota

let mensaje = `Hola les presento a mi mascota su nombre es : ${nombre}, es un hermoso ${tipoDeMascota}, de color : ${color} y su raza es ${raza}.`

console.log(mensaje)
