import { useEffect, useState } from 'react'
import Tabela from '../table/Tabela';

function VerVagas() {

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

    const [vagas, setVagas] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/listar")
        .then(retorno => retorno.json())
        .then(retorno_convertido => setVagas(retorno_convertido));
    }, []);

    return(
        <Tabela vetor={vagas}/>
    )
}

export default VerVagas