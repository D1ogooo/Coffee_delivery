import { PaiContainer, Pai } from '../../components/Main/style'
import { TextContainer, SecondTextContainer, First, Second, Third, For } from '../../components/Main/style'
import { SecondContainer, MiniContainer, SecondMiniContainer } from '../../components/Main/style'
import { ContentImage, SecondContentImage, ThirdContentImage, ForContentImage} from './style'
import PrincipalImage from '../../assets/Imagem principal de café.svg'
import CarrinhoBranco from '../../assets/Carrinho branco.svg'
import Relogio from '../../assets/Icone relogio.svg'
import IconePacote from '../../assets/Package icon.svg'
import IconeCafe from '../../assets/icone café.svg'

export function Main () {
  return (
   <>
    <Pai>
    <PaiContainer>
     <TextContainer>
      <h1>Encontre o café perfeito<br/>para qualquer hora do dia</h1>
      <p>Com o Coffee Delivery você recebe seu café onde estiver, a<br/>qualquer hora</p> 
     </TextContainer>
     
     <SecondTextContainer>
      <MiniContainer>
      <First>
       <ContentImage>
       <img src={CarrinhoBranco}/>
       </ContentImage>
       <p>Compra simples e segura</p>
      </First>

      <Second>
       <SecondContentImage>
       <img src={Relogio}/>
       </SecondContentImage>
       <p>Entrega rápida e rastreada</p>
      </Second>
      </MiniContainer>

      <SecondMiniContainer>
      <Third>
       <ThirdContentImage>
       <img src={IconePacote}/>
       </ThirdContentImage>
       <p>Embalagem mantém o café intacto</p>
      </Third>
      
      <For>
       <ForContentImage>
       <img src={IconeCafe}/>
       </ForContentImage>
       <p>O café chega fresquinho até você</p>
      </For>
      </SecondMiniContainer>
     </SecondTextContainer>
    </PaiContainer>

    <SecondContainer>
     <img src={PrincipalImage}/>
    </SecondContainer>
    </Pai>
   </>
  )
}
