import axios from "axios";

const livrosApi = axios.create({baseURL: "http://localhost:8000/livros"})  //Api que contem o endereço Backend

async function getLivros(){
    const response = await livrosApi.get('/')     //livrosApi.get('/') é a requisição
    return response.data                          //Esta é a Respotas
}

export{
    getLivros
}