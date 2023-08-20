import Input from "../Input";
import { useState } from "react";
import { livros } from './dadosPesquisa'

import styled from 'styled-components'

//import { findByRole } from "@testing-library/react";
const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2px;
    cursor: pointer;  
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    
        
    p {
        width: 300px;
        font-size: 23px;
    }

    img {
        width: 200px;
    }

    &:hover {
        border: 1px solid white;
        background-color: grey;
    }
`

function Pesquisa(){
    const [livrosPesquisados, setlivrosPesquisados] = useState([])
    console.log(livrosPesquisados)

    return( 
        <PesquisaContainer>
            <Titulo>Já Sabe por onde Começar?</Titulo>
            <SubTitulo>Encontre Livros em Nossa Estante</SubTitulo>
            <Input
                placeholder="Já sabe oque pesquisar?"
                onBlur={evento => {
                        const textoDigitado = evento.target.value.toUpperCase()
                        const resultadoPesquisa = livros.filter( livro => livro.nome.toUpperCase().includes(textoDigitado) )
                        setlivrosPesquisados(resultadoPesquisa)
                    }
                }
            />
            {
                livrosPesquisados.map(                   
                    livro => (
                        <Resultado>
                            <img src={livro.src} alt="img"></img>
                            <p>{livro.nome}</p>
                        </Resultado>
                    )
                )
            }
        </PesquisaContainer>
    )

}

export default Pesquisa




