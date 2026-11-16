function abrirDepartamentos() {

    document.getElementById("tela-inicial")
        .classList.add("oculto");

    document.getElementById("secao-departamentos")
        .classList.remove("oculto");
}

function abrirAula(id) {

    document.getElementById("secao-departamentos")
        .classList.add("oculto");

    const aulas = [
        "aula-whatsapp",
        "aula-celular",
        "aula-internet",
        "aula-seguranca",
        "aula-redes"
    ];

    aulas.forEach(function(aula){
        document.getElementById(aula)
            .classList.add("oculto");
    });

    document.getElementById(id)
        .classList.remove("oculto");
}

function voltar() {

    const aulas = [
        "aula-whatsapp",
        "aula-celular",
        "aula-internet",
        "aula-seguranca",
        "aula-redes"
    ];

    aulas.forEach(function(aula){
        document.getElementById(aula)
            .classList.add("oculto");
    });

    document.getElementById("secao-departamentos")
        .classList.remove("oculto");
}

