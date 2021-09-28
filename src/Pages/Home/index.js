import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styled'

function Home (props) {
  const [usuario, setUsuario ] = useState('')

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data))
  }

  return (
    <>
      <S.Input className="usarioInput"  placeholder="Usuário" value={usuario} onChange={event => setUsuario(event.target.value)} /> 
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </>
  );
}

export default Home;
