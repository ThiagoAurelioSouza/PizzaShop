let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})


function reservarPizza() {
    window.location.href = "reserva.html";
    return false;
}

function montarPizza() {
    window.location.href = "montar.html";
    return false;
}



function voltar(){
    window.location.href = "index.html";
}

function enviarDados() {
    // Obtendo os valores dos campos
    const nome = document.getElementById("name").value;
    const endereco = document.getElementById("endereço").value;
    const telefone = document.getElementById("phone").value;
    const tamanho = document.getElementById("pizza-size").value;
    const tipo = document.getElementById("pizza-type").value;

    // Verificando se os campos estão preenchidos
    if (nome && endereco && telefone && tamanho && tipo) {
        // Lógica para enviar os dados do pedido
        console.log("Pedido enviado!"); // Apenas para simular o envio do pedido

        // Removendo os botões
        const botoes = document.querySelector('.botoes');
        botoes.style.display = 'none';

        // Mostrando mensagem de sucesso
        const mensagem = document.createElement("p");
        mensagem.textContent = "Pedido enviado com sucesso!";
        mensagem.style.color = "green";
        botoes.parentNode.insertBefore(mensagem, botoes.nextSibling);
    } else {
        // Mostrando mensagem de erro se algum campo estiver vazio
        alert("Por favor, preencha todos os campos!");
    }
}


function enviarPedido() {
    // Pegar os valores dos campos
    var nome = document.getElementById("name").value;
    var endereco = document.getElementById("endereço").value;
    var telefone = document.getElementById("phone").value;
    var tamanho = document.getElementById("pizza-size").value;
    var observacoes = document.getElementById("observacoes").value;

    // Validar se todos os campos estão preenchidos
    if (nome === "" || endereco === "" || telefone === "" || tamanho === "" || observacoes === "") {
        alert("Por favor, preencha todos os campos.");
        return; // Impede o envio do pedido se algum campo estiver vazio
    }

    // Aqui você pode adicionar a lógica para enviar o pedido, por exemplo:
    // alert("Pedido enviado com sucesso!");
    // Ou você pode redirecionar o usuário para outra página, etc.

    // Substituir os botões pela mensagem de envio
    var botoesDiv = document.querySelector(".botoes");
    botoesDiv.innerHTML = "<p style='color: green;'>Pedido enviado com sucesso!</p>";
    
}



