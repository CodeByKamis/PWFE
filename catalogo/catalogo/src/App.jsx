import { Cabecalho } from "./componentes/Cabecalho";
import { BarraNavegacao } from "./componentes/BarraNavegacao";
import { Conteudo } from './componentes/Conteudo';
import { Rodape } from './componentes/Rodape';


//estrutura basica para usar React é através das funções
function App() {
  return ( 
    <>
      <Cabecalho/>
      <BarraNavegacao/>
      <Conteudo/>
      <Rodape/>
    </>
  )
}

export default App
