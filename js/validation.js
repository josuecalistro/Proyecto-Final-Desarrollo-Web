const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    let mensaje = document.querySelector("#mensaje").value;


    let valido = true;


    if(nombre.trim() === ""){
        document.querySelector("#errorNombre").textContent =
        "Ingrese su nombre";

        valido = false;

    } else {
        document.querySelector("#errorNombre").textContent = "";
    }



    if(!email.includes("@")){

        document.querySelector("#errorEmail").textContent =
        "Ingrese un email válido";

        valido = false;

    } else {

        document.querySelector("#errorEmail").textContent = "";

    }



    if(mensaje.length < 10){

        document.querySelector("#errorMensaje").textContent =
        "El mensaje debe tener al menos 10 caracteres";

        valido = false;

    } else {

        document.querySelector("#errorMensaje").textContent = "";

    }



    if(valido){

        alert("Formulario enviado correctamente");
        formulario.reset();

    }

});