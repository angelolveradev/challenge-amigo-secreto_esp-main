// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables globales
const listaAmigos = []; // Array para almacenar los nombres de los amigos
const inputAmigo = document.getElementById("amigo"); // Input donde el usuario escribe un nombre
const ulListaAmigos = document.getElementById("listaAmigos"); // Lista en HTML para mostrar los amigos agregados
const ulResultado = document.getElementById("resultado"); // Lista en HTML donde se mostrará el amigo secreto

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); // Elimina espacios en blanco al inicio y final del nombre

    // Validar que el input no esté vacío
    if (nombre === '') {
        alert("Por favor, ingrese un nombre válido");
        return; // Detiene la ejecución si el input está vacío
    }

    // Validar que el nombre no se repita en la lista
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista. Intente con otro.");
        return; // Detiene la ejecución si el nombre ya existe
    }

    // Agregar el nombre a la lista de amigos
    listaAmigos.push(nombre);
    
    // Crear un nuevo elemento <li> para mostrarlo en la lista en HTML
    const li = document.createElement("li");
    li.textContent = nombre;
    ulListaAmigos.appendChild(li); // Agregar el <li> dentro de la lista

    // Limpiar el input para que el usuario pueda escribir otro nombre
    inputAmigo.value = '';
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (listaAmigos.length === 0) {
        alert("No hay amigos disponibles. Agrega al menos uno.");
        return; // Detiene la ejecución si la lista está vacía
    }
    
    // Generar un número aleatorio dentro del rango de la lista
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random]; // Obtener el nombre aleatorio

    // Mostrar el resultado en la lista en HTML
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
