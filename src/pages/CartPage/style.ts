import styled from 'styled-components'
import { Container } from '../Home/style'
import { Theme } from '../../styles/theme'

export const Title = styled.h1`
 margin-top: -50px;
 margin-bottom: 0.9rem;
 color: ${({ theme }) => theme.colors.base_subtitle};
 font-family: 'Baloo 2';
 font-size: 1.125rem;
 font-style: normal;
 font-weight: 700;
 line-height: 130%;
`

export const NewContainer = styled(Container)`
 width: 80%;
`

export const Formulario = styled.div`
 width: 40rem;
 display: flex;
 padding: 2.5rem;
 flex-direction: column;
 align-items: flex-start;
 gap: 2rem;
 align-self: stretch;
 
 background-color: ${({ theme }) => theme.colors.base_card};
 border-radius: 0.376rem;
 padding: 2.5rem;
`

export const InforForm = styled.div`
 display: flex;
 flex-direction: column;
 gap: 0.5rem;

 img {
  width: 1.75rem;
  height: 1.75rem;
 }
`

export const InternalInfo = styled.div`
 margin-bottom: 2rem;
 
 h1 {
  color: ${({ theme }) => theme.colors.base_subtitle};
  font-family: 'Roboto';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%
 }

 p {
  color: ${({ theme }) => theme.colors.base_text};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
 }
`

export const Pai = styled.div`
 display: grid;
 gap: 2rem;
`

export const Form = styled.form`
 width: 560px;
`

export const Cep = styled.div`
 width: 200px;
 height: 42px;
 display: flex;
 margin-bottom: 1rem;
 border-radius: 4px;

 input {
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.base_button};
  background-color: ${({ theme }) => theme.colors.base_in};
  padding: 12px;
  width: 100%;
  padding-left: 12px;
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
 }

 ::placeholder {
 color: ${({ theme }) => theme.colors.base_label};
 }
`

export const InfoPaiSecundari = styled.div`
 display: flex;
 gap: 0.5rem;
`

export const Rua = styled.div`
 width: 100%;
 height: 42px;
 display: flex;
 
 input {
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.base_button};
  padding: 12px;
  width: 100%;
  padding-left: 12px;
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
 }

 ::placeholder {
  color: ${({ theme }) => theme.colors.base_label};
 }
`

export const NumeroEcomplemento = styled.div`
 margin-top: 1rem;
 margin-bottom: 1rem;
 display: flex;
 gap: 12px;
`

export const Numero = styled.div`
 width: 12.5rem;
 height: 42px;
 
 input {
 border-radius: 4px;
 border: 1px solid ${({ theme }) => theme.colors.base_button};
 padding: 0.75rem;
 width: 100%;
 padding-left: 0.75rem;
 font-family: 'Roboto';
 font-size: 0.875rem;
 font-style: normal;
 font-weight: 400;
 line-height: 130%;
 }

 ::placeholder {
  color: ${({ theme }) => theme.colors.base_label};
 }
`

export const Complemento = styled(Numero)`
 width: 90%;
 height: 2.625rem;
`

export const FinalInfo = styled(Complemento)`
 display: flex;
`

export const Bairro = styled(Numero)`
 width: 10rem;
`

export const Cidade = styled(Bairro)`
 width: 276px;
 margin-left: 12px;
`

export const UF = styled(Cidade)`
 width: 60px;
`

export const TitleListCofee = styled.h1`
 width: 156px;
 color: ${({ theme }) => theme.colors.base_subtitle};
 font-family: 'Baloo 2';
 font-size: 18px;
 font-style: normal;
 font-weight: 700;
 line-height: 130%;
`

export const Second = styled.div`
 display: flex;
 flex-direction: column;
 
 margin-top: -2.125rem;
`

export const Card = styled.div`
 display: flex;
 gap: 12px;
`

export const Pagamento = styled.div`
 width: 640px;
 border-radius: 6px;
 background-color: ${({ theme }) => theme.colors.base_card};
 display: flex;
 padding: 40px;
 flex-direction: column;
 align-items: flex-start;
 gap: 2rem;
 align-self: stretch;
 margin
`

export const First_second = styled.div`
 display: flex;
`

export const CardPagamento = styled.button`
 display: flex;
 padding: 16px;
 align-items: center;
 gap: 12px;
 cursor: pointer;
 flex: 1 0 0;
 
 border: none;
 border-radius: 6px;
 background: ${({ theme }) => theme.colors.base_button};
 img {
  width: 1.5rem;
  height: 1.5rem;
 }

 p {
  width: 115px;
  height: 19px;
  color: ${({ theme }) => theme.colors.base_text};
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
 }
`


export const TitlePagamento = styled.div`
 margin-left: 0.5rem;
 
 h1 {
  color: ${({ theme }) => theme.colors.base_subtitle};
  font-family: 'Roboto';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
 }

 p {
  color: ${({ theme }) => theme.colors.base_text};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
 }
`