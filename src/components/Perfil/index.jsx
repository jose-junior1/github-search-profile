import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => { 
    return (
        <>
            <header className={styles.header}>
                <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}  alt='José Junior' title='José Junior'/>
                <h1 className={styles.name}>{nomeUsuario}</h1>
            </header>
        </>
    );
};

export default Perfil;