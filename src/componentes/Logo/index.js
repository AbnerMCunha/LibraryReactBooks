//import './estilo.css'


import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`    
    display: flex;
    font-size: 30px    
`
    

const LogoImage = styled.img`
    margin-right: 10px;
`


function Logo(){
    return(
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo'
            />
            <p><strong>React</strong>Books</p>
        </LogoContainer >
    )
}

export default Logo

/*
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo () {
    return(
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo'
            />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo

*/
/*
import logo from '../../imagens/logo.svg'
import './estilo.css'

function Logo(){
    return(
        <div className='logo'>
            <img 
                src={logo}
                alt='logo'
                className='logo-img'
            ></img>
            <p><strong>Abner</strong>Books</p>
        </div>
    )
}

export default Logo
*/