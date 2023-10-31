import { Link } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'

import styles from './Alteracao.module.css'

function Alteracao() {
    return(
        <container>
            <section className={styles.alteracao_container}>
                <h1>Editar a vaga</h1>

                <form className={styles.form}>
                    <div className={styles.div_form}>
                        <label>Tipo de vaga</label>
                        <input type='text' name='tipo' placeholder='ex.: Júnior, estágio, senior...' />
                    </div>         
                    <div className={styles.div_form}>
                        <label>Descrição</label>
                        <textarea type='text' name='descricao' placeholder='ex.: Nós gostariamos...' />
                    </div>         
                    <div className={styles.div_form}>
                        <label>Cargo</label>
                        <input type='text' name='cargo' placeholder='ex.: Programador, auxiliar...' />
                    </div>         
                    <div className={styles.div_form}>
                        <label>Local</label>
                        <input type='text' name='local' placeholder='ex.: R. Nome, 123' />
                    </div>         
                    <div className={styles.div_form}>
                        <label>Turno</label>
                        <input type='text' name='turno' placeholder='ex.: Diurno, noturno...' />
                    </div>         
                    <div className={styles.div_form}>
                        <label>Salário</label>
                        <input type='number' name='salario' placeholder='ex.: xxxxx,xx' />
                    </div>        
                </form>
            </section>
            <section className={styles.form_button}>
                <Link className={styles.btn_editar} to="/vagas" text="Editar" >Editar</Link>
                <Link className={styles.btn_cancelar} to="/vagas" text="Editar" >Cancelar</Link>
            </section>
        </container>
    )
}

export default Alteracao