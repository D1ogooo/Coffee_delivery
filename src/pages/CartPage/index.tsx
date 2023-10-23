import { SelectCofee } from "../../components/SelectCofee"
import { NewContainer } from "./style" //Foi importado da pagina home
import { Title, Formulario, InforForm, InternalInfo, Form, InfoPaiSecundari } from './style'
import { Cep, Rua, NumeroEcomplemento, Numero, Complemento, TitleListCofee } from './style'
import { FinalInfo, Bairro, Cidade, UF, Pai, Second } from './style'
import { Card, Pagamento, CardPagamento } from './style'
import { First_second, TitlePagamento } from './style'
import GPSImage from '../../assets/icone de gps amarelo.svg'
import CartaoDeCredito from '../../assets/icone de cartão de credito.svg'
import Banco from '../../assets/icone de casa loterica.svg'
import Dinehiro from '../../assets/icone de nota de dinheiro.svg'
import Cifrao from '../../assets/icone de sifrão roxo.svg'


function Cart() {
  return (
   <>
    <NewContainer>
     <Title>Complete seu pedido</Title>
     <Pai>
     <Formulario>
      <InforForm>
       <InfoPaiSecundari>
       <img src={GPSImage}/>
       <InternalInfo>
       <h1>Endereço de Entrega</h1>
       <p>Informe o endereço onde deseja receber seu pedido </p>  
       </InternalInfo>
       </InfoPaiSecundari>

       <Form>
        <Cep><input type="text" placeholder="CEP" /></Cep>
        <Rua><input type="text" placeholder="Rua" /></Rua>
        <NumeroEcomplemento>
         <Numero><input type="text" placeholder="Número" /></Numero>
         <Complemento><input type="text" placeholder="Complemento" /></Complemento>
        </NumeroEcomplemento>
        <FinalInfo>
         <Bairro><input type="text" placeholder="Bairro" /></Bairro>
         <Cidade><input type="text" placeholder="Cidade" /></Cidade>
         <UF><input type="text" placeholder="UF" /></UF>
        </FinalInfo>
       </Form>
      </InforForm>
     </Formulario>
    
    <Pagamento>
     <First_second>
       <img src={Cifrao}/>
      <TitlePagamento>
       <h1>Pagamento</h1>
       <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </TitlePagamento>
     </First_second>

     <Card>
      <CardPagamento><img src={CartaoDeCredito}/><p>Cartão de crédito</p></CardPagamento>
      <CardPagamento><img src={Banco}/><p>cartão de débito</p></CardPagamento>
      <CardPagamento><img src={Dinehiro}/><p>dinheiro</p></CardPagamento>
     </Card>
    </Pagamento>

    {/* <Second>
     <TitleListCofee>Cafés selecionados</TitleListCofee>
     <SelectCofee/>
    </Second> */}
    </Pai>
   </NewContainer>
  </>
 )
}

export default Cart