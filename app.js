
const pokemonsList = document.querySelectorAll('.pokelist')
pokemonsList.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const idPokemon = pokemon.attributes.id.value

        const classeAberta = document.querySelector('.aberto')
        classeAberta.classList.remove('aberto')

        const cartaoPokemon = document.querySelector('#cartao-' + idPokemon)
        cartaoPokemon.classList.add('aberto')

        const listaAtiva = document.querySelector('.ativo')
        listaAtiva.classList.remove('ativo')

        const semAtivo = document.getElementById(idPokemon)
        semAtivo.classList.add('ativo')

    })
})

