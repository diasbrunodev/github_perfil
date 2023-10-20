import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        setEstaCarregando(true);
        setErro(null);

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error("Erro ao buscar repositórios. Verifique o nome de usuário.");
                }
                return res.json();
            })

            .then((resJson) => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })

            .catch((error) => {
                setEstaCarregando(false);
                setErro(error.message);
            });

    }, [nomeUsuario]);

    return (
        <div className="backgroundContainer">
            <div className="container">

                {estaCarregando ? (
                    <h2>Carregando...</h2>

                ) : erro ? (

                    <div>
                        <h2>{erro}</h2>
                    </div>

                ) : (

                    <ul className={styles.list}>

                        {repos.map(({ id, name, language, html_url }) => (

                            <li className={styles.listItem} key={id}>

                                <div className={styles.itemName}>
                                    <b>Nome:</b>
                                    {name}
                                </div>
                                <div className={styles.itemLanguage}>
                                    <b>Linguagem:</b>
                                    {language}
                                </div>
                                <a className={styles.itemLink}
                                    target="_blank" href={html_url}>
                                    Visitar no Github
                                </a>

                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ReposList;
