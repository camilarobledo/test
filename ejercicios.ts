// Typescript playground: https://www.typescriptlang.org/play 
// console.log(): https://developer.mozilla.org/en-US/docs/Web/API/console/log_static 
// forEach: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// filter(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
// map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
// find(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 


// LECTURAS:
// https://www.w3schools.com/typescript/typescript_arrays.php
// https://www.w3schools.com/typescript/typescript_object_types.php
// https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
// https://www.w3schools.com/typescript/typescript_union_types.php
// https://www.w3schools.com/typescript/typescript_functions.php


// Más práctica online: https://www.w3schools.com/typescript/exercise.php?filename=exercise_intro1 
// Triple igual en comparaciones: https://developer.mozilla.org/es/docs/Web/JavaScript/Equality_comparisons_and_sameness 


// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.

const nombre: string = "Cami";

// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.

const edad: number = 26;

// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.

const esEstudiante: boolean = true;

// Imprimir en consola el valor de cada variable usando console.log()

console.log(nombre, edad, esEstudiante);



// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.

function sumar(a: number, b: number): number { return a + b; }

// Llamar a la función e imprimir el resultado.
console.log(sumar(3, 4));

// Realizar otra función que reste dos números.
function restar(a: number, b: number): number { return a - b; }

// Realizar otra función que multiplique dos números.
function multiplicar(a: number, b: number): number { return a * b; }


// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
const numeros: number[] = [1, 2, 3, 4, 5];

// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())

numeros.forEach(n => console.log(n * 2));


// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).

interface Persona { nombre: string; edad: number; esEstudiante: boolean; }

// Crear tres objetos que sigan la estructura de la interfaz.
const p1: Persona = { nombre: "Sabrina", edad: 20, esEstudiante: true };
const p2: Persona = { nombre: "Matias", edad: 30, esEstudiante: false };
const p3: Persona = { nombre: "Beto", edad: 25, esEstudiante: true };

// Imprimir en consola.

console.log(p1, p2, p3);

// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir
let dato: string | number;
dato = "Texto";
console.log(dato);
dato = 123;
console.log(dato);

// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
interface Producto { nombre: string; precio: number; enStock: boolean; }

// Crear un array de "productos" con seis objetos que sigan la interfaz.
const productos: Producto[] = [
  { nombre: "Teclado", precio: 35, enStock: true },
  { nombre: "Mouse", precio: 20, enStock: false },
  { nombre: "Monitor", precio: 180, enStock: true },
  { nombre: "USB", precio: 10, enStock: false },
  { nombre: "SSD", precio: 90, enStock: true },
  { nombre: "RAM", precio: 60, enStock: false },
];

// Crear una función que reciba el array y retorne los productos en stock (sólo en stock). 
function productosEnStock(arr: Producto[]): Producto[] {
  return arr.filter(p => p.enStock);
}
// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
function productosSinStock(arr: Producto[]): Producto[] {
  return arr.filter(p => !p.enStock);
}


// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
interface Cliente { id: number; nombre: string; saldo: number; activo: boolean; }
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
const clientes: Cliente[] = [
  { id: 1, nombre: "Juan", saldo: 100, activo: true },
  { id: 2, nombre: "Juancito", saldo: 0, activo: false },
  { id: 3, nombre: "Juanes", saldo: 50, activo: true },
  { id: 4, nombre: "Juana", saldo: 10, activo: false },
  { id: 5, nombre: "Juani", saldo: 200, activo: true },
  { id: 6, nombre: "Juanote", saldo: 5, activo: false },
];
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado). 
function clientesActivos(arr: Cliente[]): Cliente[] {
  return arr.filter(c => c.activo);
}
// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
function clientesInactivos(arr: Cliente[]): Cliente[] {
  return arr.filter(c => !c.activo);
}




//Ejercicio 8: Catálogo de Productos - forEach
//Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las propiedades nombre (string) y precio (number).
const catalogo: { nombre: string; precio: number; }[] = [
  { nombre: "Lapicera", precio: 15 },
  { nombre: "Cuaderno", precio: 80 },
  { nombre: "Mochila", precio: 320 },
  { nombre: "Regla", precio: 25 },
];
//Usar forEach para imprimir el nombre y el precio de cada producto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 
catalogo.forEach(p => console.log(p.nombre, p.precio));

//Ejercicio 9: Catálogo de Productos - filter
//Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
//Imprimir productosBaratos en la consola.

const productosBaratos = catalogo.filter(p => p.precio < 50);
console.log(productosBaratos);

//Ejercicio 10: Actualización de Inventario - map
//Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
//Imprimir catalogoConDescuento en la consola.

const catalogoConDescuento = catalogo.map(p => ({
  nombre: p.nombre,
  precio: +(p.precio * 0.9).toFixed(2),
}));
console.log(catalogoConDescuento);



//Ejercicio 11: Búsqueda de Usuario - find
//Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
//Usar find para buscar el usuario con el id 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
//Imprimir en la consola el objeto del usuario encontrado.

const usuarios = [
  { id: 1, nombre: "Ana", activo: true },
  { id: 2, nombre: "Luis", activo: false },
  { id: 3, nombre: "Mara", activo: true },
  { id: 4, nombre: "Tom", activo: false },
];

const usuarioId3 = usuarios.find(u => u.id === 3);
console.log(usuarioId3);



//Ejercicio 12: Contador de Usuarios Activos - filter y length
//Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
//Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length 

const usuariosActivos = usuarios.filter(u => u.activo);
console.log(usuariosActivos.length);

//Ejercicio 13: Actualización de Estado de Usuarios
//Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
//Imprimir el array usuarios para verificar que todos los usuarios están inactivos.

usuarios.forEach(u => u.activo = false);
console.log(usuarios);


//Ejercicio 14: Formateo de Productos para Mostrar - map
//Usar el array catalogo.
//Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
//Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
//Imprimir el array productosFormato en la consola.

const productosFormato = catalogo.map(p => `Producto: ${p.nombre}, Precio: $${p.precio}`);
console.log(productosFormato);



//ACLARACION: Los errores que me dan es porque se repite la funcion de logPerson en los ejercicios siguientes


//Ejercicio 15:
//Con los datos que tenemos, crear una interfaz "User" y aplicarla, para que el siguiente codigo compile sin errores:

interface User { name: string; age: number; occupation: string; }

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(user: User): void {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);




//Ejercicio 16:
//Vamos a volver a usar la interfaz User del ejercicio anterior.
//Crear una nueva interfaz Admin segun los datos que tenemos.
//Corregir el type Person para que acepte dos tipos: User y la nueva interfaz. 
//Corregir la implementacion para aplicar el type Person para que el siguiente codigo compile sin errores. 

interface User { name: string; age: number; occupation: string; }
interface Admin { name: string; age: number; role: string; }

type Person = User | Admin;
const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);




