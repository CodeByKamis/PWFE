//estrutura
import estilos from './BarraNavegacao.module.css';
export function BarraNavegacao(){
    return(
        <nav className={estilos.conteiner}>
            <ul>
                <a href="http://"><li>Home</li></a>
                <a href="http://"><li>Filmes</li></a>
                <a href="http://"><li>Perfil</li></a>
            </ul>
        </nav>
    )
}