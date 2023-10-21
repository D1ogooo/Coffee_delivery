import { Container, Logo, GPSContainer, LeftContainer } from './style'
import LogoCoffee from '../../assets/Café logo.svg'
import GPSIcon from '../../assets/icone de gps.svg'
import CartComponent from '../Cart'

function Header () {
 return (
  <>
   <Container>
    <Logo to='/'><img src={LogoCoffee}/></Logo>
    <LeftContainer>
     <GPSContainer><img src={GPSIcon}/><p>Porto Alegre, RS</p></GPSContainer>
     <CartComponent/>
    </LeftContainer>
   </Container>
  </>
 )
}

export default Header