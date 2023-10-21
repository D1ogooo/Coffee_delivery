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
 {
   id: 2,
   preco: 9.90,
   image: `${AmericanoImage}`,
   tipo: 'Tradicional',
   titulo: 'Expresso Americano',
   explicacao: 'Expresso diluído, menos intenso que o tradicional',
 },
 {
   id: 3,
   preco: 9.90,
   image: `${CremosoImage}`,
   tipo: 'Tradicional',
   titulo: 'Expresso Cremoso',
   explicacao: 'Café expresso tradicional com espuma cremosa',
 },
 {
   id: 4,
   preco: 9.90,
   image: `${GeladoImage}`,
   tipo: 'Trandicional'+'\nGelado',
   titulo: 'Expresso Gelado',
   explicacao: 'Bebida preparada com café expresso e cubos de gelo',
 },
 {
   id: 5,
   preco: 9.90,
   image: `${CafeComleiteImage}`,
   tipo: 'Tradicional',
   segundoTipo: 'com leite',
   titulo: 'Café com Leite',
   explicacao: 'Meio a meio de expresso tradicional com leite vaporizado',
 },
//  {
//    id: 6,
//    preco: 9.90,
//    image: `${}`,
//    tipo: '',
//    titulo: '',
//    explicacao: '',
//  },
//  {
//    id: 7,
//    preco: 9.90,
//    image: `${}`,
//    tipo: '',
//    titulo: '',
//    explicacao: '',
//  },
//  {
//    id: 8,
//    preco: 9.90,
//    image: `${}`,
//    tipo: '',
//    titulo: '',
//    explicacao: '',
//  },
]