import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h2 className={styles.name}>
                {nomeUsuario}
            </h2>
        </header>
    )
};

export default Perfil;



