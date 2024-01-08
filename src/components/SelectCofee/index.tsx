import { Container, NewQuantiti, Card } from './style'
import { TitleCard, RemoveItem } from './style'
import { NewContador, NewValor } from './style'
import { Third } from '../Main/style'
import PrimeiroCaffe from '../../assets/Expresso Tradicional.svg'
import Increment from '../../assets/adicionar.svg'
import DecrementImage from '../../assets/decrementar.svg'
import LixeiraImage from '../../assets/icone de lixeira.svg'

export function SelectCofee() {
  return(
  <>
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