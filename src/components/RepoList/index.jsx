import { useEffect, useState } from 'react';

import styles from './ReposList.module.css';

const RepoList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000);
        });
    }, [nomeUsuario]);

    return (
        <div className='container'>
            {estaCarregando ?(
                    <h2>Carregando...</h2>
            ) : (
            <ul className={styles.list}>
                {/* {repos.map(repo => ( */}
                {repos.map(({id, name, language, html_url}) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.listItemName}>
                            <b>Nome: </b>
                            {name}
                        </div>
                        <div className={styles.listItemLanguage}>
                            <b>Linguagem:</b> {language || "Não encontrado"}
                        </div>
                        <a className={styles.listItemLink} href={html_url} target="_blank" rel="noopener noreferrer">Visitar no GitHub</a>
                    </li>
                ))}
            </ul>
            )}
        </ div>
    );
};

export default RepoList;