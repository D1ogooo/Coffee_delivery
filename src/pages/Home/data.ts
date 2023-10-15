import ExpressImage from '../../assets/Expresso Tradicional.svg'
import AmericanoImage from '../../assets/Expresso Americano.svg'
import CremosoImage from '../../assets/Expresso Cremoso.svg'
import GeladoImage from '../../assets/Expresso gelado.svg'
import CafeComleiteImage from '../../assets/Café com leite.svg'
import LatteImage from '../../assets/Latte.svg'
import CapuccinoImage from '../../assets/Capuccino.svg'
import MacchiatoImage from '../../assets/Macchiato.svg'
import MocaccinoImage from '../../assets/Mocaccino.svg'
import ChocolateQuenteImage from '../../assets/Chocolate Quente.svg'
import HavaianoImage from '../../assets/Havaiano.svg'
import ArabeImage from '../../assets/árabe.svg'

interface CardsSection {
 id: number,
 preco: number,
 image: string,
 tipo: string,
 titulo: string,
 segundoTipo?: string,
 explicacao: string,
}
  
export const CardsInfo:CardsSection[] = [
 {
   id: 1,
   preco: 9.90,
   image: `${ExpressImage}`,
   tipo: 'Tradicional',
   titulo: 'Expresso Tradicional',
   explicacao: 'O tradicional café feito com água quente e grãos moídos',
 },
]