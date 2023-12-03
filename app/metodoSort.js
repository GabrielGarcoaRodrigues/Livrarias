let btnOrdenaPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenaPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosTela(livrosOrdenados)
}