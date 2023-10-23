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
 preco: string,
 image: string,
 tipo: string,
 titulo: string,
 segundoTipo?: string,
 explicacao: string,
}
  
export const CardsInfo:CardsSection[] = [
 {
   id: 0,
   preco: '9.90',
   image: `${ExpressImage}`,
   tipo: 'Tradicional',
   titulo: 'Expresso Tradicional',
   explicacao: 'O tradicional café feito com água quente e grãos moídos',
 },
 {
   id: 1,
   preco: '9.90',
   image: `${AmericanoImage}`,
   tipo: 'Tradicional',
   titulo: 'Expresso Americano',
   explicacao: 'Expresso diluído, menos intenso que o tradicional',
 },
 {
   id: 2,
   preco: '9.90',
   image: `${CremosoImage}`,
   tipo: 'Tradicional',
   titulo: 'Expresso Cremoso',
   explicacao: 'Café expresso tradicional com espuma cremosa',
 },
 {
   id: 3,
   preco: '9.90',
   image: `${GeladoImage}`,
   tipo: 'Trandicional',
   segundoTipo: 'Gelado',
   titulo: 'Expresso Gelado',
   explicacao: 'Bebida preparada com café expresso e cubos de gelo',
 },
 {
   id: 4,
   preco: '9.90',
   image: `${CafeComleiteImage}`,
   tipo: 'Tradicional',
   segundoTipo: 'com leite',
   titulo: 'Café com Leite',
   explicacao: 'Meio a meio de expresso tradicional com leite vaporizado',
 },
 {
   id: 5,
   preco: '9.90',
   image: `${LatteImage}`,
   tipo: 'Tradicional',
   segundoTipo: 'com leite',
   titulo: 'Latte',
   explicacao: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
 },
 {
   id: 6,
   preco: '9.90',
   image: `${CapuccinoImage}`,
   tipo: 'Tradicional',
   segundoTipo: 'com leite',
   titulo: 'Capuccino',
   explicacao: 'Bebida com canela feita de doses iguais de café, leite e espuma',
 },
 {
   id: 7,
   preco: '9.90',
   image: `${MacchiatoImage}`,
   tipo: 'Tradicional',
   segundoTipo: 'com leite',
   titulo: 'Macchiato',
   explicacao: 'Café expresso misturado com um pouco de leite quente e espuma',
 },
 {
   id: 8,
   preco: '9.90',
   image: `${MocaccinoImage}`,
   tipo: 'Tradicional',
   segundoTipo: 'com leite',
   titulo: 'Mocaccino',
   explicacao: 'Café expresso com calda de chocolate, pouco leite e espuma',
 },
 {
   id: 9,
   preco: '9.90',
   image: `${ChocolateQuenteImage}`,
   tipo: 'Tradicional',
   segundoTipo: 'com leite',
   titulo: 'Chocolate Quente',
   explicacao: 'Bebida feita com chocolate dissolvido no leite quente e café',
 },
 {
   id: 10,
   preco: '9.90',
   image: `${HavaianoImage}`,
   tipo: 'Especial',
   titulo: 'Havaiano',
   explicacao: 'Bebida adocicada preparada com café e leite de coco',
 },
 {
   id: 11,
   preco: '9.90',
   image: `${ArabeImage}`,
   tipo: 'Especial',
   titulo: 'Árabe',
   explicacao: 'Bebida preparada com grãos de café árabe e especiarias',
 },
]