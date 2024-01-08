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

