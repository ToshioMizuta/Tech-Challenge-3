import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  .Home{
      width: 100vw;
      height: 100vh;
  }
`
const H2styled = styled.h2`
  text-align: center;2
  margin-top: +25px;
`

function Home() {
  
    return (
      <AppContainer>
          <H2styled>Boas vindas à Livraria!</H2styled> 
      </AppContainer>
    );
  }

export default Home;
