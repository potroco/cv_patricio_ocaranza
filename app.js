//Click arra de navegacion
let vistaMenu = false;
let menu = document.getElementById("nav");
function onOffMenu(){
    if(vistaMenu==false){//si esta oculto
        menu.style.display = "block";
        vistaMenu = true;
    }
    else{
        menu.style.display = "none";
        vistaMenu = false;
    }
}

//Luego de seleccionar opcion se oculta la barrra
let titMenu = document.querySelectorAll("nav a");
for(let x = 0; x <titMenu.length;x++){
    titMenu[x].onclick = function(){
        menu.style.display = "none";
        vistaMenu = false;
    }
}