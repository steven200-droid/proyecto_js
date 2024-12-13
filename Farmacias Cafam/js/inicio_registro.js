//PROGRAMACION DE TRANSICION DE AMBOS FORMULARIOS
const signUpButton=document.getElementById("sinup");//form registro
const signInButton=document.getElementById("signIn");//form ingreso
const container=document.getElementById("container");
const boost=document.getElementById("boost");
//Evento click de mostrar form registro
signInButton.addEventListener("click",()=>{
    container.classList.add("right-panel-active");
    boost.style.visibility="hidden";
});
// Evento click de ocultar form registro
signInButton.addEventListener("click",()=>{
    container.classList,remove("reigt-panel-active");
    boost.style.visibility="visible";
});
//Mostrar conrtraseña
function mostrarSeña()
{
    var tipo=document.getElementById("seña");
    if(tipo.type=="password"){
        tipo.tyle="text"; //muestra contraseña
    }else{
        tipo.type= "password";// ocultar contraseña
    }
}