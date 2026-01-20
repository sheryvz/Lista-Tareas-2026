/* Referencias al docuemto DOM */


const tareaEntrada = document.getElementById("tareaEntrada");
const botonAgregar = document.getElementById("botonAgregar");
const contenedorTareas = document.getElementById("contenedorTareas");

/* función para crear el elemento tarea(función creadora del nodo tarea) */

function crearElementoTarea() {
   //crear los elementos html de la tarea 
   const tareaContenedor = document.createElement("div");
   const tareaTexto = document.createElement("p");
   const iconosContenedor = document.createElement("div");
   const iconoCompletada = document.createElement("i");
   const iconoEliminar = document.createElement("i");

   //creamos la estructura de la tarea

   iconosContenedor.append(iconoCompletada, iconoEliminar);
   tareaContenedor.append(tareaTexto, iconosContenedor);

   //Agregamos las clases a los elementos de la tarea 
   tareaContenedor.classList.add("tarea");
   tareaTexto.classList.add("tarea-texto");
   iconosContenedor.classList.add("tarea-iconos");
   iconoCompletada.classList.add("bi", "bi-check-circle");
   iconoEliminar.classList.add("bi", "bi-trash2");

   // Agregamos el texto el usuraio
   tareaTexto.innerText = tareaEntrada.value;

   //retornamos la estructura de la tarea
   return tareaContenedor;
  
  console.log(tareaContenedor);


}

/* Escuchador */

botonAgregar.addEventListener("click", agregarTarea);

/* función agregar el elemento tarea */

function agregarTarea() {
    //traemos el elemento retornado por la función crearElementoTarea
    const elementoTarea = crearElementoTarea();
    contenedorTareas.append(elementoTarea);
}

//reiniciar el value del input

tareaEntrada.value = "";