import { Container, Logo, GPSContainer, LeftContainer, Cart, QuantityCard } from './style'
import LogoCoffee from '../../assets/Café logo.svg'
import GPSIcon from '../../assets/icone de gps.svg'
import CartIcon from '../../assets/Carrinho amarelo.svg'

function Header () {
 return (
  <>
   <Container>
    <Logo><img src={LogoCoffee}/></Logo>
    <LeftContainer>
     <GPSContainer><img src={GPSIcon}/><p>Porto Alegre, RS</p></GPSContainer>
     <Cart>
      <img src={CartIcon}/>
      <QuantityCard>1</QuantityCard>
     </Cart> 
    </LeftContainer>
   </Container>
  </>
 )
}

export default Header