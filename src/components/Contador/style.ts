import styled from "styled-components";

export const Valor = styled.p`
 display: flex;
 margin-top: 2.2813rem;
 color: ${(props) => props.theme.base_text};
 font-family: 'Baloo 2';
 font-size: 1.5rem;
 font-style: normal;
 font-weight: 800;
 line-height: 130%;
 margin-right: 1.5rem;

 span {
  color: ${({ theme }) => theme.colors.base_text};
  text-align: right;
  font-family: 'Roboto';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
 }
`

export const Quantiti = styled.div` 
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

export const AddCard = styled.button`
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
  width: 1.375rem;
  height: 1.375rem;
 }
 `

export const ExternalDiv = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`

export const Third = styled.span``