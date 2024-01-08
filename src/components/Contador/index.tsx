import { Valor, Quantiti, AddCard, ExternalDiv, Third } from './style'
import CartImage from '../../assets/Carrinho branco.svg'
import DecrementImage from '../../assets/decrementar.svg'
import AdicionarImage from '../../assets/adicionar.svg'

export const Contador = ({ decrement, increment, card, quantities }: any) => {
 return (
  <>
   <ExternalDiv>
    <Valor>
     <span>R$ <Third>{card.preco}</Third></span>
    </Valor>
    <Quantiti>
     <button id='decrement' onClick={() => decrement(card.id)}><img src={DecrementImage} alt="Decrementar"/></button>
      <p>{quantities[card.id]}</p>
     <button id='increment' onClick={() => increment(card.id)}><img src={AdicionarImage} alt="Incrementar"/></button>
    </Quantiti>
    <AddCard>
     <img src={CartImage} alt="Adicionar ao carrinho"/>
    </AddCard>
   </ExternalDiv>
  </>
 )
}