import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'

function Home() {
    return(
        <section className={styles.home_container}>
            <h1>
                Seja bem-vindo!
            </h1>
            <p>Cadastre vagas da sua empresa para possiveis candidatos!</p>
            <LinkButton to="/cadastro" text="Cadastrar vaga" />
        </section>
    )
}

export default Home