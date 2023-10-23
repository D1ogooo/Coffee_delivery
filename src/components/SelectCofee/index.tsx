import { Container, NewQuantiti, Card } from './style'
import DecrementImage from '../../assets/decrementar.svg'
import Increment from '../../assets/adicionar.svg'
import { NewContador, NewValor } from './style'
import { Third } from '../Main/style'
import LixeiraImage from '../../assets/icone de lixeira.svg'
import PrimeiroCaffe from '../../assets/Expresso Tradicional.svg'
import { TitleCard, RemoveItem } from './style'
import { CardsInfo } from '../../pages/Home/data'

// Apenas um exemplo de como irá ficar com o sistema implementado

export function SelectCofee() {
  return(
  <>
  {/* {CardsInfo.map((item) => ())} */}
  <Container>
   <Card>
   <img id="PrimeiroCaffee" src={PrimeiroCaffe}/>
   <TitleCard>Expresso Tradicional</TitleCard>
   <NewContador>
    <NewValor><span>R$ <Third>1</Third></span></NewValor>
     <NewQuantiti>
     <button id='decrement'><img src={DecrementImage} alt="Decrementar"/></button>
      <p>1</p>
     <button id='increment'><img src={Increment} alt="Incrementar"/></button>
     </NewQuantiti>
    <RemoveItem>
     <img src={LixeiraImage} alt="Remover item do carrinho"/>
    </RemoveItem>
   </NewContador>
   </Card>
  </Container>
  </>
 )
}