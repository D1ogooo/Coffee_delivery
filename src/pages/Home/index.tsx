import { Container, Coffee, Cards, Card, TitleCard, Paragraph, FirstParagraph } from './style'
import { First, Second } from './style'
import { useState } from 'react'
import { TitleCoffee } from './style'
import { Main } from '../../components/Main'
import { CardsInfo } from './data'
import { Contador } from '../../components/Contador'

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
      <Contador increment={increment} decrement={decrement} card={card} quantities={quantities}/>
     </Card>))}
    </Cards>
    </Coffee>
   </Container>
  </>
 )
}

export default Home
