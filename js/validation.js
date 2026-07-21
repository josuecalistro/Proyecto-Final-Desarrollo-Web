const formulario = document.querySelector("#contacto-form");


formulario.addEventListener("submit", function(event){


event.preventDefault();



const nombre =
document.querySelector("#nombre");


const email =
document.querySelector("#email");


const mensaje =
document.querySelector("#mensaje");



let valido = true;



const errorNombre =
document.querySelector("#error-nombre");


const errorEmail =
document.querySelector("#error-email");


const errorMensaje =
document.querySelector("#error-mensaje");


const exito =
document.querySelector("#mensaje-exito");



errorNombre.textContent="";
errorEmail.textContent="";
errorMensaje.textContent="";
exito.textContent="";




if(nombre.value.trim().length < 3){

errorNombre.textContent =
"El nombre debe tener al menos 3 caracteres.";

valido=false;

}





if(!email.validity.valid){

errorEmail.textContent =
"Ingresa un correo electrónico válido.";

valido=false;

}




if(mensaje.value.trim().length < 10){

errorMensaje.textContent =
"El mensaje debe tener al menos 10 caracteres.";

valido=false;

}





if(valido){


exito.textContent =
"Formulario enviado correctamente.";

formulario.reset();


}



});