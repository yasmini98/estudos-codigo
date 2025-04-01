console.log("====CADASTRO====");

const cestaDeProdutos = [];

function cadastrar() {
    console.log("Cadastrando...");
    const produto = [];

    // entrada
    const nome = document.getElementById("nome");
    const preco = document.getElementById("preco");
    const qtde = document.getElementById("qtde");

    console.log(nome.value, preco.value , qtde.value);
    
    // processamento
    produto.push(nome.value, preco.value, qtde.value);
    cestaDeProdutos.push(produto);

    // saída
    nome.value = "";
    preco.value = "";
    qtde.value = "";

    console.table(cestaDeProdutos);

    const linhas = cestaDeProdutos.map((produto, index) => {
        console.log(produto[0], produto[1], produto[2]);
        
        
        return `<tr>
            <td>${index}</td>
            <td>${produto[0]}</td>
            <td>${produto[1]}</td>
            <td>${produto[2]}</td>
        </tr>`
        
    }).join("");

    console.log(linhas);

    document.getElementById("produtos").innerHTML = linhas;
}