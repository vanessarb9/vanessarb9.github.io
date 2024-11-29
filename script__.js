// Función para cargar el archivo XML
function cargarXML() {
    const contenedor = document.getElementById("contenedor");

    // Crear una solicitud HTTP para leer el archivo XML
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "datos.xml", true);
    xhr.onload = function () {
        if (this.status === 200) {
            const parser = new DOMParser();
            const xml = parser.parseFromString(this.responseText, "text/xml");
            const libros = xml.getElementsByTagName("libro");

            // Iterar sobre los libros y mostrar en la página
            Array.from(libros).forEach(libro => {
                const titulo = libro.getElementsByTagName("titulo")[0].textContent;
                const autor = libro.getElementsByTagName("autor")[0].textContent;
                const año = libro.getElementsByTagName("año")[0].textContent;

                // Crear una tarjeta para cada libro
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <h3>${titulo}</h3>
                    <p><strong>Autor:</strong> ${autor}</p>
                    <p><strong>Año:</strong> ${año}</p>
                `;
                contenedor.appendChild(card);
            });
        }
    };
    xhr.send();
}

// Cargar el XML al cargar la página
document.addEventListener("DOMContentLoaded", cargarXML);
