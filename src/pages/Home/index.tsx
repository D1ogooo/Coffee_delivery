import { Container, Coffee, Cards, Card, TitleCard, Paragraph, FirstParagraph } from './style'
import { Contador, Valor, AddCard, Quantiti, First, Second, Third } from './style'
import { useState } from 'react'
import { TitleCoffee } from './style'
import { Main } from '../../components/Main'
import { CardsInfo } from './data'
import CartImage from '../../assets/Carrinho branco.svg'
import DecrementImage from '../../assets/decrementar.svg'
import AdicionarImage from '../../assets/adicionar.svg'

function Home(){
 const [quantities, setQuantities] = useState<number[]>(CardsInfo.map(() => 0));
 
 const decrement = (product_id: number) => {
  const newPrice = [...quantities]
 if(newPrice[product_id] === 0) {
  null
 }else {
  newPrice[product_id] -= 1
  setQuantities(newPrice)
  }
 }
 
 const increment = (product_id: number) => {
  const newPrice = [...quantities]
  newPrice[product_id] += 1
  setQuantities(newPrice)
 }

 return (
 <>
  <Container>
   <Main/>
    <Coffee>
    <TitleCoffee>Nossos cafés</TitleCoffee>
     <Cards>
      {CardsInfo.map((card) => (
       <Card key={card.id}>
        <img src={card.image}/>
        <FirstParagraph><First>{card.tipo}</First> {card.segundoTipo && <Second>{card.segundoTipo}</Second>}</FirstParagraph>
        <TitleCard>{card.titulo}</TitleCard>
        <Paragraph>{card.explicacao}</Paragraph>
        <Contador>
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
       </Contador>
      </Card>))}
    </Cards>
    </Coffee>
   </Container>
  </>
 )
}

export default Home
