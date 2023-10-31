import { useEffect, useState } from 'react'
import Formulario from '../forms/Formulario.js';

function Cadastro() {

    const vaga = {
        id: 0,
        nome_empresa: '',
        tipo_vaga: '',
        descricao: '',
        cargo: '',
        local: '',
        turno: '',
        salario: ''
    }

    const [objVaga, setObjVaga] = useState(vaga);

    //* Obter dados da vaga
    const aoDigitar = (e) => {
        setObjVaga({...objVaga, [e.target.name]:e.target.value});
    }

    const [vagas, setVagas] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/listar")
        .then(retorno => retorno.json())
        .then(retorno_convertido => setVagas(retorno_convertido));
    }, []);

    const cadastrar = () => {
        fetch('http://localhost:8080/cadastrar',{
            method:'post',
            body: JSON.stringify(objVaga),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(retorno => retorno.json())
        .then(retorno_convertido => {
            if (retorno_convertido.mensagem !== undefined){
                alert(retorno_convertido.mensagem);
            }else{
                setVagas([...vagas, retorno_convertido]);
                alert('Vaga cadastrada com sucesso!')
            }
        })
    }

    return(
        <div>
            <Formulario 
                eventoTeclado={aoDigitar}
                cadastrar={cadastrar}
            /> 
        </div>              
    )
}

export default Cadastro