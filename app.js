const apiUrl = "http://localhost/app-php-js-chat-yes-no-senati/api.php";

/////////////////////////////

async function getData() {
  console.log("ingreso a get data");
  try {
    const respuesta = await fetch(
      `${apiUrl}?id=123&nombre=Victor&apellidos=Apaza`,
      {
        method: "GET",
      }
    );
    const data = await respuesta.json();
    console.log("data");
    console.log(data);
  } catch (error) {
    console.log("error al momento de hacer la petición GET:", error);
  }
}

let botonGet = document.querySelector("#getdata");
botonGet.addEventListener("click", function () {
  getData();
});

async function postData() {
  //alert('ingreso aquiiiiiiiiiiiiiiiii');
  try {
    const respuesta = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: "oscar",
        apellido: "mamani",
        lenguaje_favorito: "nose",
        color: "negro",
      }),
    });
    const data_retorno = await respuesta.json();
    console.log(data_retorno);
  } catch (error) {
    console.log("error al momento de hacer la petición POST:", error);
  }
}

let botonPost = document.querySelector("#post-data");
botonPost.addEventListener("click", function () {
  postData();
});

// Función para enviar datos con método PUT
async function putData() {
  console.log("ingreso a put data");
  try {
    const respuesta = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 123,
        nombre: "Victor",
        apellidos: "Apaza",
      }),
    });
    const data = await respuesta.json();
    console.log("data PUT");
    console.log(data);
  } catch (error) {
    console.log("error al momento de hacer la petición PUT:", error);
  }
}

// Función para enviar datos con método DELETE
async function deleteData() {
  console.log("Ingreso a delete data");
  try {
    const respuesta = await fetch(`${apiUrl}?id=123`, {
      method: "DELETE",
    });
    const data = await respuesta.json();
    console.log("data DELETE");
    console.log(data);
  } catch (error) {
    console.log("Error al momento de hacer la petición DELETE:", error);
  }
}

// Asignar eventos a los botones
let botonPut = document.querySelector("#put-data");
botonPut.addEventListener("click", function () {
  putData();
});

const yesUrl = "https://yesno.wtf/api";

async function fetchSINO() {
  try {
    const response = await fetch(yesUrl, {
      method: "GET",
    });
    const data = await response.json();
    console.log("Aqui llega el mensage");
    console.log(data.answer);
    agregarMensaje(data.answer, false, data.image);
  } catch (error) {
    console.log("Error YES/NO API:", error);
  }
}
let botonYesNo = document.querySelector("#sino");
botonYesNo.addEventListener("click", function () {
  fetchSINO();
});

let botonDelete = document.querySelector("#del-data");
botonDelete.addEventListener("click", function () {
  deleteData();
});

//Funcionalidad del chat yes no
let chatMessages = document.getElementById("chatMessages");
let chatForm = document.getElementById("chatForm");
let messageinput = document.getElementById("messageinput");

function agregarMensaje(mensaje, soyYo = true, imagen = null) {
  const mensajeDiv = document.createElement("div");
  mensajeDiv.classList.add("message");
  mensajeDiv.classList.add(soyYo ? "user-message" : "api-message");
  mensajeDiv.textContent = mensaje;

  if (imagen) {
    const img = document.createElement('img');
    img.src = imagen;
    mensajeDiv.appendChild(img);
  }

  setTimeout(() => {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 500);

  chatMessages.appendChild(mensajeDiv);
  //Al hacer click en el boton:YesNo aparesca en el chat el mensaje o la palabra Yes y No
  

  //agregarMensaje("Hola Soy Victor",true);
  //agregarMensaje("Hola Soy la Api",false);
}

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const miMensaje = messageinput.value;
  agregarMensaje(miMensaje, true);
  fetchSINO();
});
