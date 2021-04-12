const entrada = document.getElementById("inputText");
const lista = document.getElementById("lista");
const apagar = document.getElementById("apagar");

function criarItem(){
    var item = document.createElement("li");
    var texto = document.createTextNode(entrada.value);
    item.appendChild(texto);
    lista.appendChild(item);
    entrada.value = '';

    item.addEventListener("click", function(){ 
        item.style.textDecoration = "line-through";
        })
}

entrada.addEventListener("keydown", function(event){
    var tecla = event.keyCode;
    if (tecla==13) {
        criarItem();
    }
});

apagar.addEventListener("click", function(){
    lista.innerHTML="";
})