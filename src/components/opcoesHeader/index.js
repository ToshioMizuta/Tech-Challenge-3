import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcoes = styled.ul`
  display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100%;
    padding: 45px 5px;
    cursor: pointer;
    min-width: 120px;
    color: #FFF;
    
`
const textoOpcoes = ['ESTANTE', 'SOBRE']

function OpcoesHeader(){
    return(
      <Opcoes>
        {textoOpcoes.map((texto) => (
          <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
        ))}
      </Opcoes>
    )
}

export default OpcoesHeader;