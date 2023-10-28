import LinkButton from '../layout/LinkButton'

import styles from './Cadastro.module.css'

function Cadastro() {
    return(
        <section className={styles.cadastro_container}>
            <h1>Cadastre uma vaga</h1>

            <form className={styles.form}>
                <div>
                    <label>Tipo de vaga</label>
                    <input type='text' name='tipo' placeholder='Júnior, estágio, senior...' />
                </div>         
                <div>
                    <label>Descrição</label>
                    <textarea type='text' name='descricao' placeholder='Nós gostariamos...' />
                </div>         
                <div>
                    <label>Cargo</label>
                    <input type='text' name='cargo' placeholder='Programador, auxiliar...' />
                </div>         
                <div>
                    <label>Local</label>
                    <input type='text' name='local' placeholder='R. Nome, 123' />
                </div>         
                <div>
                    <label>Turno</label>
                    <input type='text' name='turno' placeholder='Diurno, noturno...' />
                </div>         
                <div>
                    <label>Salário</label>
                    <input type='text' name='salario' placeholder='xxxxx,xx' />
                </div>
                <div className={styles.form_button}>
                    <LinkButton to="/vagas" text="Cadastrar" />
                </div>         
            </form>
        </section>              
    )
}

export default Cadastro