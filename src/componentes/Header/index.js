import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'

import { Link } from 'react-router-dom'

import styled from 'styled-components'
const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

export default function Header() {
    return(
        <HeaderContainer>
            <Link to="/livros">
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

//export default Header
