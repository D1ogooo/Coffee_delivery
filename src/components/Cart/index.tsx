import { Cart, QuantityCard } from './style'
import CartIcon from '../../assets/Carrinho amarelo.svg'

function CartComponent () {
 return (
  <>
   <Cart to='/cart'>
    <img src={CartIcon}/>
    <QuantityCard>{}</QuantityCard>
   </Cart> 
  </>
 )
}

export default CartComponent