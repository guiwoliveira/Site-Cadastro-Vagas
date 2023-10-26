import LinkButton from '../layout/LinkButton'

function Cadastro() {
    return(
        <form>
            <div>
                <lable>Tipo de vaga</lable>
                <input type='text' name='tipo' placeholder='Júnior, estágio, senior...' />
            </div>         
            <div>
                <lable>Descrição</lable>
                <textarea type='text' name='descricao' placeholder='Nós gostariamos...' />
            </div>         
            <div>
                <lable>Cargo</lable>
                <input type='text' name='cargo' placeholder='Programador, auxiliar...' />
            </div>         
            <div>
                <lable>Local</lable>
                <input type='text' name='local' placeholder='R. Nome, 123' />
            </div>         
            <div>
                <lable>Turno</lable>
                <input type='text' name='turno' placeholder='Diurno, noturno...' />
            </div>         
            <div>
                <lable>Salário</lable>
                <input type='text' name='salario' placeholder='xxxxx,xx' />
            </div>         
            <LinkButton to="/vagas" text="Cadastrar" />
        </form>      
    )
}

export default Cadastro