import { BASE_URL, API_KEY,IMG_URL_W500 } from './Api.js'

const row = document.querySelector('#row-detalhe')
const divLink = document.querySelector('#div-link-filme')
let idFilme = ''
window.onload = async() => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const id = +url.searchParams.get("id");
    idFilme = id;
    buscarFilme(id)
}


const buscarFilme = async(id) => {

    const filme = await fetch(`${BASE_URL}/movie/${id}?${API_KEY}`)
        .then(resp => resp.json())

    const img = document.createElement('img')
    img.setAttribute('width', '100%')
    img.setAttribute('height', '100%')
    img.src = IMG_URL_W500+filme.poster_path

    const titulo = document.createElement('h1')
    titulo.setAttribute('class', 'mb-4')
    titulo.innerText = filme.title

    const descricao = document.createElement('p')
    descricao.setAttribute('class', 'mb-4')
    descricao.innerText = filme.overview

    const dataLancamento = document.createElement('p')
    dataLancamento.innerText =`Data de Lançamento: ${filme.release_date}`
    dataLancamento.style.fontWeight = 'bold'

    const receita = document.createElement('p')
    receita.innerText = `Receita: ${parseFloat(filme.revenue)}`
    receita.style.fontWeight = 'bold'

    const divImg = document.createElement('div')
    divImg.setAttribute('class','col-sm-12 col-md-5')

    const divConteudo = document.createElement('div')
    divConteudo.setAttribute('class', 'col-sm-12 col-md-7')

    const saibaMais = document.createElement('a')
    saibaMais.setAttribute('href', `https://www.themoviedb.org/movie/${idFilme}`)
    saibaMais.setAttribute('class', 'btn btn-warning')
    saibaMais.innerHTML='Saiba mais'
    divLink.appendChild(saibaMais)

    divImg.appendChild(img)

    divConteudo.appendChild(titulo)
    divConteudo.appendChild(descricao)
    divConteudo.appendChild(dataLancamento)
    divConteudo.appendChild(receita)

    row.appendChild(divImg)
    row.appendChild(divConteudo)
}

