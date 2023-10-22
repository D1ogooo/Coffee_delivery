import styled from 'styled-components'

export const Title = styled.h1`
 margin-bottom: 0.9rem;
 color: ${({ theme }) => theme.colors.base_subtitle};
 font-family: 'Baloo 2';
 font-size: 1.125rem;
 font-style: normal;
 font-weight: 700;
 line-height: 130%;
`

export const Formulario = styled.div`
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
  font-family: Roboto;
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
 
`

export const Form = styled.form`
 width: 560px;
`

export const Cep = styled.div`
 
`

export const Rua = styled.div`
 
`

export const NumeroEcomplemento = styled.div`
 
`

export const Numero = styled.div`
 
`

export const Complemento = styled.div`
 
`

export const FinalInfo = styled.div`
 
`

export const Bairro = styled.div`
 
`

export const Cidade = styled.div`
 
`

export const UF = styled.div`
 
`