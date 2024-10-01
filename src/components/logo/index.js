import logo from '../../images/livross.png'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    color: #FFF;
    text-align: center;
    align-items: center;
`
const LogoImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    margin-top: -25px;
`


function Logo (){
    return(
        <LogoContainer>
          <LogoImg 
            src={logo} 
            alt= 'logo'>
          </LogoImg>
          <p>Livraria <strong>Tech Challenge</strong> </p>
        </LogoContainer>
    )
}

export default Logo;