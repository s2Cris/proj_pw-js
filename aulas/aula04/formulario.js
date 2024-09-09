let proximoId = 1

function adicionarlinha(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const admissao = document.getElementById("admissao").value;
    const demissao = document.getElementById("demissao").value;

    //Se for preenchido vazio
    if(nome === "" || idade === "" || admissao === ""){
    alert("Preencha os valores do formulário!")
    }

    //Cria uma linha da tabela se não existir
    const tabela = document.getElementById("tabelaDados").getElementsByTagName("tbody")[0];

    //Inserindo uma nova linha
    const novaLinha = tabela.inserBow

    //Inserindo valores da linha 
    const celId = novaLinha.insertCell(0);
    const celnome = novaLinha.insertCell(1);
    const celIdade = novaLinha.insertCell(2);
    const celAdmissao = novaLinha.insertCell(3);
    const celDemissao = novaLinha.insertCell(4);

    //Inserindo os valores dentro das células
    celId.innerHTML = proximoID;
    celNome.innerHTML = nome;
    celIdade.innerHTML = idade;
    celAdmissao.innerHTML = admissao;
    celDemissao.innerHTML = demissao;
 
    proximo++

    //Limpar o formulário
    document.getElementById("linhaForm").reset();
}