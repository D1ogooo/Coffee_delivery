import { Container, Coffee, Cards, Card, TitleCard, Paragraph, FirstParagraph } from './style'
import { Contador, Valor, AddCard, Quantiti } from './style'
import { useState } from 'react'
import { TitleCoffee } from './style'
import { Main } from '../../components/Main'
import { CardsInfo } from './data'
import CartImage from '../../assets/Carrinho branco.svg'
import DecrementImage from '../../assets/decrementar.svg'
import AdicionarImage from '../../assets/adicionar.svg'

function Home(){
 const [value, setValue] = useState(0)
 const [quantity, setQuantiti] = useState(0)

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
        <FirstParagraph>{card.tipo} <span>{card?.segundoTipo}</span></FirstParagraph>
        <TitleCard>{card.titulo}</TitleCard>
        <Paragraph>{card.explicacao}</Paragraph>
        <Contador>
         <Valor>
          <span>R$ {card.preco + card.preco}</span>
          </Valor>
           <Quantiti>
            <button id='decrement'><img src={DecrementImage} alt="Decrementar" onClick={() => setValue(value-1)}/></button>
            <p>{value}</p>
            <button id='increment'><img src={AdicionarImage} alt="Incrementar" onClick={() => setValue(value+1)}/></button>
          </Quantiti>
          <AddCard>
         <img src={CartImage} alt="Adicionar ao carrinho" />
        </AddCard>
       </Contador>
      </Card>
     ))}
    </Cards>
    </Coffee>
   </Container>
  </>
 )
}

export default Home