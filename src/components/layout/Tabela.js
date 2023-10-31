import styles from './Tabela.module.css'
import { Link } from 'react-router-dom'

function Tabela (){
    return(
        <section className={styles.tb_container}>
            <p>Suas vagas cadastradas apareceram aqui.</p>
            <table className={styles.tb}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo de vaga</th>
                        <th>Cargo</th>
                    </tr>
                </thead>

                <tbody className={styles.tb_body}>
                    <tr>
                        <td>4278828</td>
                        <td>Junior</td>
                        <td>Desenvolvedor</td>
                        <td className={styles.btn_folder}>
                            <Link className={styles.btn} type="detalhes" to="/detalhes">Detalhes</Link>
                            <Link className={styles.btn} type="editar" to="/alteracao">Editar</Link>
                            <Link className={styles.btn} type="excluir">Excluir</Link>
                        </td>
                    </tr>

                    <tr>
                        <td>4278828</td>
                        <td>Junior</td>
                        <td>Desenvolvedor</td>
                        <td className={styles.btn_folder}>
                            <Link className={styles.btn} type="detalhes" to="/detalhes">Detalhes</Link>
                            <Link className={styles.btn} type="editar" to="/alteracao">Editar</Link>
                            <Link className={styles.btn} type="excluir">Excluir</Link>
                        </td>
                    </tr>

                    <tr>
                        <td>4278828</td>
                        <td>Junior</td>
                        <td>Desenvolvedor</td>
                        <td className={styles.btn_folder}>
                            <Link className={styles.btn} type="detalhes" to="/detalhes">Detalhes</Link>
                            <Link className={styles.btn} type="editar" to="/alteracao">Editar</Link>
                            <Link className={styles.btn} type="excluir">Excluir</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>     
    )
}

export default Tabela;