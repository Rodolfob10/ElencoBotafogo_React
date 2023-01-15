import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState('')
    const [imagem, setImagem] = useState('')
    const [posicao, setPosicao] = useState('')


  

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoJogadorCadastrado({
            nome: nome,
            numero: numero,
            imagem: imagem,
            posicao: posicao
        })
        setNome('')
        setNumero('')
        setImagem('')
        setPosicao('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do jogador"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Número"
                    placeholder="Digite o número do jogador"
                    valor={numero}
                    aoAlterado={valor => setNumero(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem "
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Posição" 
                    itens={props.posicoes}
                    valor = {posicao}
                    aoAlterado ={valor => setPosicao(valor)} 
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario