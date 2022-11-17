let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces")
let contador = 0;

/*Esta funcio me indica el abrir y cerrar de la lista de menu*/
boton.addEventListener("click", function(){
if(contador==0){
    enlaces.className = ("enlaces dos")
    contador=1;
}else{
    enlaces.classList.remove("dos")
    enlaces.className = ("enlaces uno")
    contador=0;
}
})