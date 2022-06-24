const formulario = document.forms.namedItem("dados");
const corpoTabela = document.getElementById("corpoTabela");
const cabecalhoTabela = document.getElementById("cabecalhoTabela");
const enviaTarefa = document.getElementById("enviaTarefa");


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const cabecalho = {
        tarefa: "Lista de Terefas",
        excluir: "Excluir"
    }

    const tarefa ={
        tarefa: formulario.tarefa.value,
    }

    cabecalhoTabela.innerHTML = templateLinhaCabecalho(cabecalho);
    corpoTabela.innerHTML += templateLinha(tarefa);
    limpaForm();
})


function templateLinhaCabecalho(cabecalho) {
    return `
        <tr>
            <td> ${cabecalho.tarefa}</td>
            <td> ${cabecalho.excluir}</td>
        </tr>
    `;
}

function templateLinha(tarefa) {
    return `
        <tr>
            <td><span onclick="this.parentElement.style.color = 'blue';">${tarefa.tarefa}</span></td>
            <td onclick="parentElement.remove()">X</td>
        </tr>
    `;
}



function limpaForm() {
    formulario.reset();
    formulario.tarefa.focus();
}


