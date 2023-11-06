//----------------------------VIDEO 1: DOM----------------------------

/*
// DOCUMENTO
console.log(document)


// SELECTORES
//Id
console.log(document.getElementById('cabecera'))
console.log(document.getElementById('meloinvento')) //null
//Clase
console.log(document.getElementsByClassName('border-grey'))
//Tipo
console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByTagName('nav'))
//Name
console.log(document.getElementsByName('cabecera'))


// SELECTORES QUERY
//Tipo
console.log(document.querySelector("li"))
console.log(document.querySelectorAll("li"))
//Clase
console.log(document.querySelector(".border-grey"))
console.log(document.querySelectorAll(".border-grey"))
//Id
console.log(document.querySelector("#header"))
console.log(document.querySelectorAll("#main")) //No recomendado
//Name
console.log(document.querySelector("[name=cabecera]"))
console.log(document.querySelectorAll("[name=cabecera]"))


// ELEMENTOS
const elemento = document.getElementById("header")

// CONSOLA
/*
elemento.children
document.children
elemento.parentElement
document.parentElement //null
*/ /*

// TIPOS DE LISTAS
const lista1 = document.getElementsByClassName("border-grey") //Memoria dinámica
const lista2 = document.querySelectorAll(".border-grey") //Memoria estática

//----------------------------FIN VIDEO----------------------------*/


//-------------------------VIDEO 2: ELEMENTOS DINÁMICOS-------------------------
/*


//CREAR
//Etiqueta
const titulo2 = document.createElement("h2");
//Texto
const textoTitulo2 = document.createTextNode("Nuevo título");
//Comentario
const cometario = document.createComment("Nuevo comentario");


//CLONAR
const articulo = document.querySelector("article");
//Consola: articulo.cloneNode() (Sin hijos)
//Consola: articulo.cloneNode(true) (Con hijos)

//VERIFICAR SI UN ARTÍCULO ESTÁ CONECTADO AL HTML
articulo2 = articulo.cloneNode(true);
//Consola: articulo2.isConnected


//INSERTAR
const section = document.getElementById("section");
//ELEMENTO
//Consola
/*
section.appendChild(articulo2)
section.insertAdjacentElement('beforebegin',articulo2)
section.insertAdjacentElement('beforeend',articulo2)
section.insertAdjacentElement('afterbegin',articulo2)
section.insertAdjacentElement('afterend',articulo2)
*/
//TEXTO
//Consola
/*
section.insertAdjacentText('beforebegin','Texto a insertar')
section.insertAdjacentText('beforeend','Texto a insertar')
section.insertAdjacentText('afterbegin','Texto a insertar')
section.insertAdjacentText('afterend','Texto a insertar')
*/
//ELEMENTO HTML
//Consola
/*
section.insertAdjacentHTML('beforebegin','<h3>Esto es un título inventado</h3>')
section.insertAdjacentHTML('beforeend','<h3>Esto es un título inventado</h3>')
section.insertAdjacentHTML('afterbegin','<h3>Esto es un título inventado</h3>')
section.insertAdjacentHTML('afterend','<h3>Esto es un título inventado</h3>')
*/


//QUITAR
//Consola: section.remove()


//MODIFICAR
//Consola
/*
section.innerHTML
section.innerHTML = '<h3>Nuevo título de sección</h3>'
section.outerHTML
section.outerHTML = '<h3>Nuevo título de sección</h3>'
section.children[0].textContent = 'Otro título más'
//Get
section.getAttribute('id')
//Set
section.setAttribute('nombre','otro-valor')
//Lista de clases
section.classList //Como lista
section.className //Como string
section.className += ' nueva-clase'
section.classList.add('nueva-clase')
section.toggle('clase')
*/ /*

//----------------------------FIN VIDEO----------------------------*/


//----------------------------VIDEO 3: EVENTOS----------------------------
/*
//Handler
function clickTitulo() {
    console.log("El usuario hizo clic en el título");
}
//Listener
const tituloFormulario = document.getElementById('titulo-formulario');

//tituloFormulario.onclick = clickTitulo;
tituloFormulario.addEventListener("click",clickTitulo);
//tituloFormulario.removeEventListener("click",clickTitulo);

//Handler para examinar evento
//function clickTitulo(event) {console.log(event);}

//Evento que obliga a esperar que el html se cargue completamente
//antes de acceder a sus elementos
document.addEventListener("DOMContentLoaded", () => {
    console.log("El documento se ha cargado");
});


//MANEJO DE FORMULARIOS
const form = document.querySelector('#formulario');
/*const enviarFormulario = (ev) => {
    ev.preventDefault();
    console.log(ev);
}*/
/*const enviarFormulario = (ev) => {
    ev.preventDefault();
    console.log(ev.target.name, ev.target.email, ev.target.password);
}*//*
const enviarFormulario = (ev) => {
    ev.preventDefault();

    const { name, email, password } = ev.target;

    console.log(
        name.value,
        email.value,
        password.value);
    if (name.value.length === 0) alert("El nombre no es válido");
}
form.addEventListener("submit", enviarFormulario);
*/
//--------------------------------FIN VIDEO--------------------------------


//----------------------------VIDEO 4: BUBBLING----------------------------
/*
const tituloForm = document.querySelector('#titulo-formulario');
tituloForm.addEventListener("click", (ev) => {
    // console.log(ev.bubbles, ev.cancelBubble);
    // ev.stopPropagation();
    // console.log(ev.bubbles, ev.cancelBubble);
    console.log("CLICK EN EL TÍTULO");
});

const seccionForm = document.querySelector('#seccion-formulario');
seccionForm.addEventListener("click",
    (ev) => {
        console.log("CLICK EN LA SECCIÓN");
        // console.log(ev.target, ev.currentTarget);
    },
    {
        capture: true
    }
);
*/