function abrirDepartamentos() {
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("secao-departamentos").style.display = "block";
}

function abrirAula(idDaAula) {
    document.getElementById("secao-departamentos").style.display = "none";
    document.getElementById("aula-whatsapp").style.display = "none";
    document.getElementById("aula-seguranca").style.display = "none";
    document.getElementById("aula-mapas").style.display = "none";
    document.getElementById("aula-certificado").style.display = "none";
    
    document.getElementById(idDaAula).style.display = "block";
}

function voltarDepartamentos() {
    document.getElementById("aula-whatsapp").style.display = "none";
    document.getElementById("aula-seguranca").style.display = "none";
    document.getElementById("aula-mapas").style.display = "none";
    document.getElementById("aula-certificado").style.display = "none";
    
    document.getElementById("secao-departamentos").style.display = "block";
}

function gerarCertificado() {
    const nomeInput = document.getElementById("nome-participante").value;
    
    if (nomeInput.trim() === "") {
        alert("Por favor, escreva o seu nome completo antes de gerar o certificado.");
        return;
    }
    
    // Insere o nome digitado no certificado
    document.getElementById("nome-impresso").innerText = nomeInput;
    
    // Mostra o certificado e o botão de imprimir
    document.getElementById("caixa-certificado").style.display = "block";
    document.getElementById("btn-imprimir").style.display = "inline-block";
}
