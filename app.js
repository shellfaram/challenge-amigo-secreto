// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array para almacenar los nombres
let listaAmigos = [];

// Función para añadir un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre && !listaAmigos.includes(nombre)) {
        listaAmigos.push(nombre);
        actualizarListaAmigos();
        input.value = ""; // Limpiar el input
    } else {
        alert("Por favor, ingresa un nombre válido o uno que no se haya agregado.");
    }
}

// Función para mostrar los nombres en la lista
function actualizarListaAmigos() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Función para generar un nombre aleatorio
function sortearAmigo() {
    if (listaAmigos.length > 1) {
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        const amigoSecreto = listaAmigos[indiceAleatorio];

        // Mostrar el resultado
        const ulResultado = document.getElementById("resultado");
        ulResultado.innerHTML = `<li>🎉 El amigo secreto es: ${amigoSecreto}</li>`;
    } else {
        alert("Debes ingresar al menos dos nombres para sortear un amigo secreto.");
    }
}
