// Lista com os nomes
const nomes = [
    "adriana.matias", "adriano.faria", "andreza.orsini", "aurea.gimenez", "camargo.ana",
    "cassia.pereira", "edna.faria", "fabio.franca", "francieli.costa", "gabriel.gneves",
    "giulia.diaz", "gleice.helen", "hellen.mendonca", "isabelly.vitoria", "jessika.sampaio",
    "kamily.steffani", "leandro.cintra", "mariele.milani", "mayara.santos", "michelle.araujo",
    "nadia.esteves", "oliveira.claudia", "rafael.rhenrique", "rayane.lima", "suelen.felix", "suzana.dias", "tavares.lucas"
];

// Referência ao botão e ao elemento de exibição do vencedor
const botaoSortear = document.getElementById("sortear");
const exibirVencedor = document.getElementById("vencedor");
const listaVencedores = document.getElementById("listaVencedores");

// Função para sortear o nome
botaoSortear.addEventListener("click", () => {
    if (nomes.length === 0) {
        exibirVencedor.textContent = "Todos os nomes já foram sorteados!";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    const vencedor = nomes[indiceAleatorio];

    // Exibe o vencedor atual
    exibirVencedor.textContent = `O vencedor é: ${vencedor}`;

    // Adiciona o vencedor à lista de vencedores
    const vencedorItem = document.createElement("div");
    vencedorItem.classList.add("vencedor-item");
    vencedorItem.textContent = vencedor;
    listaVencedores.appendChild(vencedorItem);

    // Remove o nome sorteado da lista
    nomes.splice(indiceAleatorio, 1);
});