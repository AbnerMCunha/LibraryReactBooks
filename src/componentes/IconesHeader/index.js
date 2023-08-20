

import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [sacola,perfil]

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone) => (
            <Icone ><img src={icone} alt='icone'  ></img></Icone>
            )) }
        </Icones>
    )
}

export default IconesHeader

/*

//import './estilo.css';

import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
const icones = [perfil,sacola];

import styled from 'styled-components';

const UlContainer = styled.ul`
  display: flex ;
`

const LiContainer = styled.li`
  display: flex ;
  margin-right: 40px;
  align-items: center;  
  cursor: pointer;  
`

function IconesHeader(){
    return(        
        <UlContainer>
          { icones.map( ( icone ) => (
              <LiContainer ><img src={icone} alt='icones'></img></LiContainer>
            ))  
          }          
        </UlContainer>
    )
}

export default IconesHeader

/*
        <ul className="icones">
          { icones.map( ( icone ) => (
              <li className='icone'><img src={icone} alt='icones'></img></li>
            ))
          }          
        </ul>
*/
