import { useEffect, useState } from 'react';
import styles from './ReposList.module.css';

const RepoList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        const buscarRepos = async () => {
            setEstaCarregando(true);
            setErro('');
            setRepos([]);

            try {
                const res = await fetch(`https://api.github.com/users/${nomeUsuario}/repos`);

                if (!res.ok) {
                    throw new Error('Usuário não encontrado!');
                }

                const resJson = await res.json();

                // Simulando carregamento
                setTimeout(() => {
                    setRepos(resJson);
                    setEstaCarregando(false);
                }, 3000);
            } catch (e) {
                console.error(e.message);
                setErro(e.message);
                setEstaCarregando(false);
            }
        };

        if (nomeUsuario) {
            buscarRepos();
        }
    }, [nomeUsuario]);

    return (
        <div className='container'>
            {estaCarregando ? (
                <h3>Carregando...</h3>
            ) : erro ? (
                <h2 style={{ color: 'red' }}>{erro}</h2>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.listItemName}>
                                <b>Nome: </b>
                                {name}
                            </div>
                            <div className={styles.listItemLanguage}>
                                <b>Linguagem:</b> {language || "Não encontrado"}
                            </div>
                            <a
                                className={styles.listItemLink}
                                href={html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visitar no GitHub
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RepoList;