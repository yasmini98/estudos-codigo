console.log("====CADASTRO V2====");

const cestaDeProdutos = []; // array vazio

function cadastrar() {
    console.log("Cadastrando...");
    
    // entrada
    const nome = document.getElementById("nome");
    const preco = document.getElementById("preco");
    const qtde = document.getElementById("qtde");
    
    console.log(nome.value, preco.value , qtde.value);
    
    // processamento
    //produto.push(nome.value, preco.value, qtde.value);
    if(nome.value == "" || preco.value == "" || qtde.value == "") return;

    const produto = {}; //objeto vazio
    produto.nome = nome.value;
    produto.preco = preco.value;
    produto.qtde = qtde.value;
    produto.total = qtde.value * preco.value;

    cestaDeProdutos.push(produto);

    // saída
    nome.value = "";
    preco.value = "";
    qtde.value = "";

    console.table(cestaDeProdutos);

    const linhas = cestaDeProdutos.map((produto, index) => {
        //console.log(produto[0], produto[1], produto[2]);
        
        
        return `<tr>
            <td>${index}</td>
            <td>${produto.nome}</td>
            <td>${produto.preco}</td>
            <td>${produto.qtde}</td>
            <td>${produto.total}</td>
        </tr>`
        
    }).join("");

    console.log(linhas);

    document.getElementById("produtos").innerHTML = linhas;
}