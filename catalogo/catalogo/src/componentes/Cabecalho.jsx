
// estrutura basica para os componentes
import estilos from './Cabecalho.module.css';

export function Cabecalho(){//o nome tem que ser obrigatóriamente igual do nome do arquivo
    return(
        <header className={estilos.conteiner}>
            <h2>DORAMAFLIX</h2>
            <p>Os melhores doramas você encontra aqui</p>
            
        </header>
    )
}