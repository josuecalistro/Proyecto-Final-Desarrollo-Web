const formulario = document.querySelector(".formulario");


formulario.addEventListener("submit", (evento)=>{

    const nombre = document.querySelector("#nombre").value;
    const mensaje = document.querySelector("#mensaje").value;


    if(nombre.length < 3){

        evento.preventDefault();

        alert("El nombre debe tener mínimo 3 caracteres");

    }


    if(mensaje.length < 10){

        evento.preventDefault();

        alert("El mensaje debe tener mínimo 10 caracteres");

    }

});