const apiUrl = "http://localhost/app-php-js-chat-yes-no-senati/api.php";

// Función para enviar datos con método PUT
async function putData() {
    console.log('ingreso a put data');
    try {
        const respuesta = await fetch(apiUrl, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: 123,
                nombre: "Victor",
                apellidos: "Hugo"
            })
        });
        const data = await respuesta.json();
        console.log('data PUT');
        console.log(data);
    } catch (error) {
        console.log("error al momento de hacer la petición PUT:", error);
    }
}

// Función para enviar datos con método DELETE
async function deleteData() {
    console.log('ingreso a delete data');
    try {
        const respuesta = await fetch(`${apiUrl}?id=123&nombre=oscar&apellidos=mamani`, {
            method: "DELETE"
        });
        const data = await respuesta.json();
        console.log('data DELETE');
        console.log(data);
    } catch (error) {
        console.log("error al momento de hacer la petición DELETE:", error);
    }
}

// Asignar eventos a los botones
let botonPut = document.querySelector('#put-data');
botonPut.addEventListener('click', function () {
    putData();
});

let botonDelete = document.querySelector('#del-data');
botonDelete.addEventListener('click', function () {
    deleteData();
});
