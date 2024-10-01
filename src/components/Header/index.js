import Logo from '../logo'
import OpcoesHeader from '../opcoesHeader'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    justify-content: center;
    max-height: 100px;
    display: flex;
    background: rgb(0,29,55);
    background: linear-gradient(50deg, rgba(0,29,55,1) 17%, rgba(0,51,103,1) 76%, rgba(0,80,177,1) 100%);

`

function Header(){
    return(
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <OpcoesHeader/>
        </HeaderContainer>
    )

}

export default Header;