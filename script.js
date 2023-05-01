// pega o input
var entrada = document.getElementById("entrada");

// botão principal
function addTarefa() {
    if (!entrada.value) { // verifica se o input não está vazio
        alert("Você precisa digitar a sua tarefa antes de enviar");
        return;
    }
    criarTarefa(); // cria tudo

    entrada.value = ""; // reseta o input
}


function criarTarefa() {
    var mainLista = document.getElementById("listaMain"); // acessa o pai do elemento

    criarP(mainLista, entrada.value); // cria o elemento dentro do pai

    
}

function criarP(div, text) {
    var pCriar = document.createElement("p"); // cria o elemento

    div.appendChild(pCriar); // inseri ele dentro do elemento pai

    pCriar.innerText = text; // inseri o texto dentro do p

    criarButton(pCriar); // cria o botão de apagar
}

function criarButton(p) {
    var buttonCriar = document.createElement("button"); // cria o botão

    p.appendChild(buttonCriar); // inseri ele dentro do elemento pai

    buttonCriar.innerHTML = `<ion-icon name="trash-bin"></ion-icon>`; // inseri o texto dentro do botão

    buttonCriar.setAttribute("onclick", "apagarElemento(this.parentElement)"); // cria a função através de um onclick

}

function apagarElemento(p) {
    p.remove(); // remove o elemento clicado
}