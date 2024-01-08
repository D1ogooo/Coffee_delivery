import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from 'zod'
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
  const createUserFormSchema = z.object({
   
  })

  const [ output, setOutput] = useState('')
  const { register, handleSubmit } = useForm()

  function createUser(data: any) {
   setOutput
  }
  
  return (
   <>
    <NewContainer>
     <Pai>
     <Title>Complete seu pedido</Title>
     <Formulario>
      <InforForm>
       <InfoPaiSecundari>
       <img src={GPSImage}/>
       <InternalInfo>
       <h1>Endereço de Entrega</h1>
       <p>Informe o endereço onde deseja receber seu pedido </p>  
       </InternalInfo>
       </InfoPaiSecundari>

       <Form onSubmit={handleSubmit(createUser)}>
        <Cep>
         <input 
         type="text"
         placeholder='CEP'
         {...register('CEP')}
         />
        </Cep>
        <Rua>
        <input
         type="text"
         placeholder='Rua'
         {...register('Rua')}
         />
        </Rua>
        <NumeroEcomplemento>
        <Numero>
        <input
         type="number"
         placeholder="Número"
         {...register('Número')}
         />
         </Numero>
          <Complemento>
          <input
          type="text"
          placeholder="Complemento"
          {...register('Complemento')}
          />
          </Complemento>
        </NumeroEcomplemento>
        <FinalInfo>
         <Bairro>
          <input
          type="text"
          placeholder="Bairro"
          {...register('Bairro')}
          />
          </Bairro>
         <Cidade>
          <input
          type="text"
          placeholder="Cidade"
          {...register('Cidade')}
          />
          </Cidade>
         <UF>
          <input
          type="text"
          placeholder="UF"
          {...register('UF')}
          />
          </UF>
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

    </Pai>
    <Second>
     <TitleListCofee>Cafés selecionados</TitleListCofee>
     <SelectCofee/>
    </Second> 
   </NewContainer>
  </>
 )
}

export default Cart