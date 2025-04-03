import axios from "axios";
import React, {useState, useEffect} from "react";//useState é o estado atual da variavel - e como um teste de mesa | useEffect renderiza(exibir, fazer funcionar) o resultado na tela daquilo que está no estado atual do UseState
import { Card } from './Card';

const API_URL = 'https://api.themoviedb.org/3';
const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';

export function Lista(){
    const[movies, setMovies] = useState([])

    //seter é guardar um valor a uma variavel e get é pegar/acessar/consumir essa informação
//() == parametros, eu envio algo para processar (ou n envio, depende, mas os dados processam nele) | {} ==script de programação, o que minha função vai fazer
//[] == dependencias - é um load, uma espera, exibir uma coisa para depois exibir a outra
    useEffect(()=>{
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)

        .then(response=>{
            console.log(response.data.results); /*results é uma coisa da propria API*/
            setMovies(response.data.results);
        })
        .catch(error =>{
            console.log('erro', error);
        });
        // só coloca ; quando é fechamento de raciocionio por isso deu no catch e nao no then
    },[]);
    return(
        <div>
            <figure>
                {movies.map(movie=>(
                    <Card key={movie.id}
                    movie={movie}
                    />
                ))}
            </figure>
        </div>
    )
}
