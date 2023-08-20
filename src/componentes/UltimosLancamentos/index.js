

import styled from 'styled-components'


import { livros } from './dadosUltimosLancamentos'
import { Titulo } from "../Titulo";
import { CardRecomenda } from "../CardRecomenda"
import ImgAngular from '../../imagens/livro2.png'


const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return (
        <UltimosLancamentosContainer>
            <Titulo cor='#EB9B00' tamanhoFonte='38px' padding='20px' >Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>                
                {
                    livros.map( 
                        livro => ( 
                            <img src={livro.src} alt='img'></img>
                        )
                    )
                }            
            </NovosLivrosContainer>
            <CardRecomenda
                titulo={"Tavez voce se interesse por..."}
                subtitulo={"Angular11"}
                descricao={"Construindo uma aplicação com a plataforma Google"}
                Imagem={ImgAngular}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos
