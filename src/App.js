import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Posicao from './componentes/Posicao';
import Rodape from './componentes/Rodape';

function App() {
  const [jogadores, setJogador] = useState([])

  const posicoes = [
    {
      nome: 'Goleiro',
      corPrimaria: '#808080',
      corSecundaria: '#FFFAFA'
    },
    {
      nome: 'Zagueiro',
      corPrimaria: '#FFFAFA',
      corSecundaria: '#808080'
    },
    {
      nome: 'Lateral',
      corPrimaria: '#808080',
      corSecundaria: '#FFFAFA'
    },
    {
      nome: 'Meio-campo',
      corPrimaria: '#FFFAFA',
      corSecundaria: '#808080'
    },
    {
      nome: 'Atacante',
      corPrimaria: '#808080',
      corSecundaria: '#FFFAFA'
    }
  ]

  const aonovoJogadorAdicionado = (jogador) => {
    setJogador([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario posicoes={posicoes.map(posicao => posicao.nome)}aoJogadorCadastrado={jogador => aonovoJogadorAdicionado(jogador)} />
      {posicoes.map(posicao => <Posicao 
        key={posicao.nome}
        nome={posicao.nome}
        corPrimaria={posicao.corPrimaria}
        corSecundaria={posicao.corSecundaria} 
        jogadores = {jogadores.filter(jogador => jogador.posicao === posicao.nome)}/>)}
        <Rodape />
    </div>
  );
}

export default App;
