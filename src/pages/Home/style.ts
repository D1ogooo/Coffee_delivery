import styled from 'styled-components'

export const Container = styled.div`
 width: 80%;
 margin: 0 auto;
 margin-top: 7.88rem;
`

export const Coffee = styled.div`
 margin-top: 9.4688rem;
`

export const TitleCoffee = styled.h1`
 color: ${({ theme }) => theme.colors.base_subtitle};
 font-family: 'Baloo 2';
 font-size: 2rem;
 font-style: normal;
 font-weight: 800;
 line-height: 130%;
 margin-bottom: 3.375rem;
`

export const TitleCard = styled.h1`
 color: ${({ theme }) => theme.colors.base_subtitle};
 text-align: center;
 margin-bottom: 0.5rem;
 font-family: 'Baloo 2';
 font-size: 1.25rem;
 font-style: normal;
 font-weight: 800;
 line-height: 130%;
`

export const Paragraph = styled.p`
 width: 13.5rem;
 color: ${({ theme }) => theme.colors.base_label};
 text-align: center;
 font-family: 'Roboto';
 margin: 0 auto; 
 font-size: 0.875rem;
 font-style: normal;
 font-weight: 400;
 line-height: 130%;
`

export const Cards = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 flex-wrap: wrap;
 gap: 2rem;
 margin-bottom: 2rem;
`

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

export const Card = styled.div`
 text-align: center;
 flex-shrink: 0;
 border-radius: 6px 36px;
 background-color: ${({ theme }) => theme.colors.base_card};
 width: 256px;
 height: 280px;

 img {
  display: flex;
  width: 245px;
  height: 120px;
  justify-content: center;
  align-items: center;
  margin-top: -25px;
  flex-shrink: 0;
  margin-bottom: 5px;
 }
`

export const FirstParagraph = styled.p`
 color: ${({ theme }) => theme.colors.yellow_dark};
 margin: 0 auto;
 font-family: 'Roboto';
 font-size: 11px;
 font-style: normal;
 font-weight: 700;
 line-height: 130%;
 text-transform: uppercase;
 border-radius: 100px;
 width: 200px;
`

export const First = styled.span`
 background-color: ${({ theme }) => theme.colors.brand_yellow_light};
 color: ${({ theme }) => theme.colors.yellow_dark};
 font-family: 'Roboto';
 font-size: 10px;
 font-style: normal;
 font-weight: 700;
 line-height: 130%;
 text-transform: uppercase;
`

export const Second = styled.span`
 background-color: ${({ theme }) => theme.colors.brand_yellow_light};
 color: ${({ theme }) => theme.colors.yellow_dark};
 font-family: 'Roboto';
 font-size: 10px;
 font-style: normal;
 font-weight: 700;
 line-height: 130%;
 text-transform: uppercase;
`

export const Third = styled.span`
 
`

export const Contador = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
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