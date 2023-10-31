import styles from './Tabela.module.css'
import { Link } from 'react-router-dom'

function Tabela ({vetor, remover}){
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
                    {
                        vetor.map((obj, indice) => (
                            <tr key={indice}>
                                <td>{indice+1}</td>
                                <td>{obj.tipo_vaga}</td>
                                <td>{obj.cargo}</td>
                                <td className={styles.btn_folder}>
                                    <Link className={styles.btn} type="detalhes" to="/alteracao">Detalhes</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>     
    )
}

export default Tabela;