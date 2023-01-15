import './Jogador.css'

const Jogador = ({ nome,numero, posicao, imagem, CorDeFundo }) => {
    return (<div className='jogador'>
        <div className='cabecalho' style={{ backgroundColor: CorDeFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h4>Número: {numero}</h4>
            <h5>{posicao}</h5>
        </div>


    </div>)
}

export default Jogador