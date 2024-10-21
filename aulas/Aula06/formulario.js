let proximoId = 1

function adicionarlinha(){
    const A = document.getElementById("A").value;
    const B = document.getElementById("B").value;
    const C = document.getElementById("C").value;
    const X1 = document.getElementById("1").value;
    const X2 = document.getElementById("2").value;

    //Se for preenchido vazio
    if(nome === '' || idade === '' || admissao === ''){
        alert("Preencha os dados do formulário!");
    } else{

        const tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];

        //Inserindo uma nova linha
        const novaLinha=tabela.insertRow();
    
        //Inserindo valores da linha 
        const celA = novaLinha.insertCell(0);
        const celB = novaLinha.insertCell(1);
        const celC = novaLinha.insertCell(2);
        const celX1 = novaLinha.insertCell(3);
        const celX2 = novaLinha.insertCell(4);
    
        //Inserindo os valores dentro das células
        celNº.innerHTML = proximoId;
        celA.innerHTML = celAA;
        celB.innerHTML = celB;
        celC.innerHTML = celCC;
        celX1.innerHTML = celX1;
        celX2.innerHTML = celX2;
     
        proximoId++
    
        //Limpar o formulário
        document.getElementById("linhaForm").reset();}
    }