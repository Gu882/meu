// ===========================
// MENSAGEM DE BOAS-VINDAS
// ===========================

window.addEventListener("load", () => {
    console.log("Animal Resgate carregado com sucesso!");
});

// ===========================
// ROLAGEM SUAVE DOS LINKS
// ===========================

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function () {
        console.log("Navegando para:", this.href);
    });
});

// ===========================
// ANIMAÇÃO DOS BOTÕES
// ===========================

const botoes = document.querySelectorAll(".botao");

botoes.forEach(botao => {

    botao.addEventListener("mouseenter", () => {
        botao.style.transform = "scale(1.05)";
    });

    botao.addEventListener("mouseleave", () => {
        botao.style.transform = "scale(1)";
    });

});

// ===========================
// ANIMAÇÃO DOS CARDS
// ===========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});
function abrirModal(nome, foto, descricao){

    document.getElementById("nomeAnimal").innerHTML = nome;

    document.getElementById("fotoAnimal").src = foto;

    document.getElementById("descricaoAnimal").innerHTML = descricao;

    document.getElementById("modalAnimal").style.display = "flex";

}

function fecharModal(){

    document.getElementById("modalAnimal").style.display = "none";

}

window.onclick = function(event){

    const modal = document.getElementById("modalAnimal");

    if(event.target == modal){

        modal.style.display = "none";

    }

}