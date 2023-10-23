import styled from 'styled-components'
import { Quantiti, Valor, Contador } from '../../pages/Home/style'


export const NewContador = styled.div`
 
`

export const NewValor = styled.p`
 
`

export const Card = styled.div`
 display: flex;
 gap: 20px;
`

export const NewQuantiti = styled.div`
display: flex;
 align-items: center;
 margin-top: 2.53125rem;
 border-radius: 0.375rem;
 background-color: ${({ theme }) => theme.colors.base_button};
 gap: 0.5rem;
 padding-left: 10px;
 padding-right: 10px;

 p {
  width: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.base_title};
  font-family: 'Roboto';
 }

 #decrement {
  background-color: ${({ theme }) => theme.colors.base_button};
  cursor: pointer;
  border: none;
  display: flex;
  height: 38px;
  padding-top: 28px;
 
  justify-content: center;
  align-items: center;
 }

 #increment {
  background-color: ${({ theme }) => theme.colors.base_button};
  cursor: pointer;
  border: none;
  display: flex;
  height: 38px;
  padding-top: 28px;
  justify-content: center;
  align-items: center;
 }

 img {
  width: 14px;
  height: 14px;
 }
`

export const Container = styled.div`
 margin-top: 0.7rem;
 display: flex;
 width: 28rem;
 padding: 2.5rem;
 flex-direction: column;
 align-items: flex-start;
 gap: 1.5rem;
 background-color: ${({ theme }) => theme.colors.base_card};

 #PrimeiroCaffee {
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
 }
`


export const TitleCard = styled.h2`
 color: ${({ theme }) => theme.colors.base_subtitle};
 font-family: 'Roboto';
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 130%;
`

export const RemoveItem = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 border: none;
 cursor: pointer;
 border-radius: 0.375rem;
 background: ${({ theme }) => theme.colors.brand_purple_dark};
 margin-top: 2.5rem;
 margin-left: 0.5rem;
 width: 2.375rem;
 height: 2.375rem;
 padding-top: 1.875rem;

 img {
  width: 1.675rem;
  height: 1.675rem;
  margin-top: -28px;
 }
`
