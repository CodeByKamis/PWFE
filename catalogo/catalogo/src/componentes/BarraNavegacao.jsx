//estrutura para componente react
import estilos from './BarraNavegacao.module.css';//esse estilos é o apelido que dei para o arquivo que importei
export function BarraNavegacao(){
    //todo retorno só pode renderizar um componente
    return(
        <nav className={estilos.conteiner}>
            {/* é assim que se chama uma class */}
            <ul>
                <a href=""><li>Home</li></a>

                <a href="http://"><li>Todos os Doramas</li></a>

                <a href=""><li>Perfil do Usuario</li></a>
                
                
                
            </ul>
        </nav>
    )
}