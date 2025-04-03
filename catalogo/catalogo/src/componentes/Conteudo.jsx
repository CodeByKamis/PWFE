import estilos from './Conteudo.module.css';
import { Lista } from './Lista';//coloca {} porque é um componente e dá esses espaços pois é boa prática

export function Conteudo(){
    return(
        <main className={estilos.container}>
            <Lista/>
        </main>
    )
}