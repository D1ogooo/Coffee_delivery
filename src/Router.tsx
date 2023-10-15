import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PedidoConfimado from './pages/ConfirmPedido'

export function Router() {
 return (
  <>
   <Routes>
    <Route path='/' element={<DefaultLayout/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/cart/pedidoConfirmado' element={<PedidoConfimado/>}/>
    </Route>
   </Routes>
  </>
 )
}