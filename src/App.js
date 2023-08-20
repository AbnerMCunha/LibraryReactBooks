import Header from './componentes/Header'
import styled from 'styled-components'
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos'

const AppContainer = styled.div`
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    width: 100vw;
    height: 100vh;   
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <UltimosLancamentos/>
      <Pesquisa/>
    </AppContainer>
  );
}

export default App
