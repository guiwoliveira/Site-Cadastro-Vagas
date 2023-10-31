import { Link } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'
import styles from './FormularioAlteracao.module.css'

function FormularioAlteracao({eventoTeclado, cadastrar}) {
    return(
        <section className={styles.formulario_container}>
            <h1>Altere a vaga</h1>

            <form className={styles.form}>
                <div>
                    <label>Nome da Empresa</label>
                    <input type='text' onChange={eventoTeclado} name='nome_empresa' placeholder='Nome' />
                </div>
                <div>
                    <label>Tipo de vaga</label>
                    <input type='text' onChange={eventoTeclado} name='tipo' placeholder='ex.: Júnior, estágio, senior...' />
                </div>         
                <div>
                    <label>Descrição</label>
                    <textarea type='text' onChange={eventoTeclado} name='descricao' placeholder='ex.: Nós gostariamos...' />
                </div>         
                <div>
                    <label>Cargo</label>
                    <input type='text' onChange={eventoTeclado} name='cargo' placeholder='ex.: Programador, auxiliar...' />
                </div>         
                <div>
                    <label>Local</label>
                    <input type='text' onChange={eventoTeclado} name='local' placeholder='ex.: R. Nome, 123' />
                </div>         
                <div>
                    <label>Turno</label>
                    <input type='text' onChange={eventoTeclado} name='turno' placeholder='ex.: Diurno, noturno...' />
                </div>         
                <div>
                    <label>Salário</label>
                    <input type='number' onChange={eventoTeclado} name='salario' placeholder='ex.: xxxxx,xx' />
                </div>
                <section className={styles.form_button}>
                    <button type="button" className={styles.btnEditar} onClick={cadastrar}>Editar</button>
                    <button type="button" className={styles.btnRemover} onClick={cadastrar}>Remover</button>
                    <Link type="button" className={styles.btnCancelar} onClick={cadastrar} to="/vagas">Cancelar</Link>
                </section>         
            </form>
        </section>              
    )
}

export default FormularioAlteracao