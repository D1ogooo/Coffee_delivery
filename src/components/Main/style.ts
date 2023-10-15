import styled from 'styled-components'

export const Main = styled.main`
 
`

export const Pai = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 3.5rem;
`

export const PaiContainer = styled.div`
 display: flex;
 flex-direction: column;
`

export const SecondContainer = styled.div`
 img {
  width: 29.75rem;
  height: 22.5rem;
  flex-shrink: 0;
 }
`

export const TextContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin-bottom: 4.12rem;

 h1 {
  color: ${({ theme }) => theme.colors.base_title};
  font-family: 'Baloo 2';
  font-size: 3rem;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
 }
 
 p { 
  color: ${({ theme }) => theme.colors.base_subtitle};
  font-family: 'Roboto';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 1.625rem */
 }
`

export const SecondTextContainer = styled.div`
 display: flex;
 gap: 2.5rem;
 align-items: center;
`

export const MiniContainer = styled.div`
 display: flex;
 flex-direction: column;
`

export const SecondMiniContainer = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 30px;
 gap: 15px;

`

export const First = styled.div`
 display: flex;
 align-items: center;
 gap: 0.75rem;
 margin-bottom: 1.25rem;

 p {
 color: ${({ theme }) => theme.colors.base_text};
 font-family: Roboto;
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 130%;
 }
`

export const Second = styled.div`
 display: flex;
 align-items: center;
 gap: 0.75rem;
 
 p {
 color: ${({ theme }) => theme.colors.base_text};
 font-family: Roboto;
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 130%;
 }
`

export const Third = styled.div`
 margin-top: -28px;
 display: flex;
 align-items: center;
 gap: 0.75rem;

 p {
 color: ${({ theme }) => theme.colors.base_text};
 font-family: Roboto;
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 130%;
 }
`

export const For = styled.div`
 margin-top: 5px;
 display: flex;
 align-items: center;
 gap: 0.75rem;
 
 p {
 color: ${({ theme }) => theme.colors.base_text};
 font-family: Roboto;
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 130%;
 }
`

export const ContentImage = styled.div`
 border-radius: 62.5rem;
 background-color: ${({ theme }) => theme.colors.yellow_dark};
 display: flex;
 padding: 0.5rem;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;

 img {
  width: 1.2rem;
  height: 1.2rem;
 }
`

export const SecondContentImage = styled.div`
 border-radius: 62.5rem;
 background-color: ${({ theme }) => theme.colors.brand_yellow};
 display: flex;
 padding: 0.5rem;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;

 img {
  width: 1.2rem;
  height: 1.2rem;
 }
`

export const ThirdContentImage = styled.div`
 border-radius: 62.5rem;
 background-color: ${({ theme }) => theme.colors.base_text};
 display: flex;
 padding: 0.5rem;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;

 img {
  width: 1.2rem;
  height: 1.2rem;
 }
`

export const ForContentImage = styled.div`
 border-radius: 62.5rem;
 background-color: ${({ theme }) => theme.colors.brand_purple};
 display: flex;
 padding: 0.5rem;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;

 img {
  width: 1.2rem;
  height: 1.2rem;
 }
`