// ''''''/*console.log('Hola mundo!');

// let nomb="Luciano";
// const apellido="Prandi";

// var edad=39;

// var tenerMascota=false;

// console.log(nomb, apellido)
// console.log(edad)
// console.log(tenerMascota)*/

// // let nombre = prompt("Ingrese su nombre");
// // let apellido = prompt("Ingrese su apellido");

// // alert("Hola " + nombre + " " + apellido + ", que disfrutes la visita!")
// // if (nombre = null) { let nombre = prompt("Ingresa tu nombre, por favor!"); }

// //Array vacio
// // let vacio = []

// // //array boolean
// // let booleano = [true, false, true]

// // //propiedad Length
// // let colorMascotas = [['perro', 'marron', 'negro'],
// // ['gato', 'blanco', 'tricolor'],
// // ['canario','verde']]

// // console.log(colorMascotas.length)
// // console.log(colorMascotas[0][0])

// // //estructura if
// // let a = 4;

// // if (a > 5) {
// //     console.log ("el número es mayor a 5")
// // }
// // else if (a < 5){
// //     console.log ("el número es menor a 5")
// // }
// // else {
// //     console.log("El número es igual a 5")
// // }

// // //Sin operador ternario

// // let edad1 = 19;
// // let esMayorEdad1;

// // if (edad > 18){
// //     esMayorEdad1 = true;
// // }
// // else
// // {
// //     esMayorEdad1 = false;
// // }

// // //operador ternario

// // let edad = 18;

// // let  esMayorEdad = edad > 18 ? true : false;

// // console.log("Es mayor de edad?" + esMayorEdad);

// //let nombre = 'Pepito';
// //let edad = 19;

// //edad > 18 ? console.log (nombre + ' es mayor de edad') : console.log (nombre + ' no es mayor de edad');

// let lista = ["Harina", "Papas", "Manzanas", "Jugo", "Chocolate"];

// let articulo = prompt ("Qué artículo desea agregar a la lista?");

// if (lista.includes(articulo)){
//     alert (articulo + ' ya está en la lista')
// } else {
//     lista.push (articulo)
//     alert("La lista es: " + lista)
// }

console.log (new Date().getDay());

let numeroDia = new Date().getDay();

switch(numeroDia) {
    case 0:
        alert ("Hoy es domingo!");
        break;
        case 1:
        alert ("Hoy es lunes!");
        break;
        case 2:
        alert ("Hoy es martes!");
        break;
        case 3:
        alert ("Hoy es miércoles!");
        break;
        case 4:
        alert ("Hoy es jueves!");
        break;
        case 5:
        alert ("Hoy es viernes!");
        break;
        case 6:
        alert ("Hoy es sábado!");
        break;
        default:
            alert ("Hoy es osvaldo!!")

}

console.log (new Date().getDay());

let numeroDia1 = new Date().getDay();

switch(numeroDia1) {
    case 0:
        dia= "domingo!";
        break;
        case 1:
            dia= "lunes!";
        break;
        case 2:
            dia= "martes!";
        break;
        case 3:
            dia= "miércoles!";
        break;
        case 4:
            dia= "jueves!";
        break;
        case 5:
            dia= "viernes!";
        break;
        case 6:
            dia= "sábado!";
        break;
        default:
            dia= " del arquero"
}

console.log=("Hoy es el día " + dia)
alert("Hoy es el día " + dia)