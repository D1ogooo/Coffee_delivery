import { SelectCofee } from "../../components/SelectCofee"
import { Container } from "../Home/style" //Foi importado da pagina home
import { Title, Formulario, InforForm, InternalInfo, Form } from './style'
import { Cep, Rua, NumeroEcomplemento, Numero, Complemento } from './style'
import { FinalInfo, Bairro, Cidade, UF, Pai } from './style'
import GPSImage from '../../assets/icone de gps amarelo.svg'

function Cart() {
  return (
   <>
    <Container>
     <Title>Complete seu pedido</Title>
     <Pai>
     <Formulario>
      <InforForm>
       <img src={GPSImage}/>
       <InternalInfo>
       <h1>Endereço de Entrega</h1>
       <p>Informe o endereço onde deseja receber seu pedido </p>  
       </InternalInfo>

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
          <UF><input type="text" placeholder="UF"/></UF>
        </FinalInfo>
       </Form>
      </InforForm>
     </Formulario>

     <SelectCofee/>
    </Pai>
   </Container>
  </>
 )
}

export default Cart