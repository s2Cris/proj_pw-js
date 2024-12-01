let proximoId = 1

function adicionarlinha(){
    const nome = document.getElementById("nome").value;
}

if(nome === ''){
    alert("Preencha os valores do formulário!");
} else{
    //Cria uma linha da tabela se não existir
    const tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];

    //Inserindo uma nova linha
    const novaLinha=tabela.insertRow();

    const celNome = novaLinha.insertCell(1);

    celNome.innerHTML = nome;

    document.getElementById("linhaForm").reset();}