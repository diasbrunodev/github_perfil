import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        //ao trocar de usuário, fazer com que entre a mensagem carregando
        setEstaCarregando(true);
        //pega api
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
        //após 3s muda setEstaCarregando que começou true para false e termina de trazer a api    
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
                //para ter acesso ao array do repositorio vindo da api
                //console.log(resJson);
            }, 3000);
        })
    }, [nomeUsuario]);
    return (
        //encapsulando os elementos com a tag pois está escrevendo a lista html<></>
        //usando a div container no lugar de <></> e usando className de forma normal sem {} pois esta class vai estar global
        <div className="container">
        {/* se estaCarregando for true exibe h1 */}
        {estaCarregando && (
            <h1>Carregando...</h1>
        )}
        {/* se estaCarregando for false segue a construção da lista */}
        <ul className={styles.list}>
        {/* faz um map para iterar e retornar cada item do array */}
            {/* {repos.map(repositorio => ( */}
            {/* fazendo a desestruturação da linha acima 'repositorio' */}
            {repos.map(({ id, name, language, html_url}) => (
        // através do key indica qual elemento foi alterado
        // repositorio.id indica para o key através do id qual é o elemento da array
        //após a desestruturação fica somente id        
                <li className={styles.listItem} key={id}>
        {/* pega a propriedade name de cada elemento do array */}
                    <div className={styles.itemName}>
                        <b>Nome:</b>
                        {name}
                    </div>
        {/* pega a propriedade language de cada elemento do array */}            
                    <div className={styles.itemLanguage}>
                        <b>Linguagem:</b>
                        {language}
                    </div>
        {/* pega a propriedade html_url que é o endereço do link do repositório de cada elemento do array */}             
                    <a className={styles.itemLink} 
                    target="_blank" href={html_url}>
                        Visitar no Github
                    </a>
                </li>
            ))}
        </ul>
        </div>
    )
};

export default ReposList;