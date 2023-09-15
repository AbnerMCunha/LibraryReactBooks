import axios from "axios"

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavoritos() {
    const response = await favoritosAPI.get('/')

    return response.data
}

async function postFavorito(id) {
    //await favoritosAPI.post(`/${id}`);
    await favoritosAPI.post(`/${id}`).catch(e => console.log('Erro no encadeamento!', e));

}

async function deleteFavorito(id) {
    await favoritosAPI.delete(`/${id}`)
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}

/*
import axios from "axios"

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavoritos() {
    const response = await favoritosAPI.get('/favoritos')
    return response.data
}

async function postFavorito(id) {
    await favoritosAPI.post(`/favoritos/${id}`)
}

async function deleteFavorito(id) {
    await favoritosAPI.delete(`/favoritos/${id}`)
    alert(`Você deletou o livro de id: ${id}`)
  }


export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}
*/
/*
import axios from "axios"

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavoritos() {
    const response = await favoritosAPI.get('/favoritos')
    return response.data
}

async function postFavorito(id) {
    await favoritosAPI.post(`/favoritos/${id}`)
}

async function deleteFavorito(id){
    await favoritosAPI.delete(`/favoritos/${id}`)
    alert(`ID: ${id}, deletado dos Favoritos, com Sucesso!!`)
}

export{
    getFavoritos,
    postFavorito,
    deleteFavorito
}

*/