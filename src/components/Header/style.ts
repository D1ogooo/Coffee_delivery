import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Logo = styled(Link)``
export const Container = styled.div`
 width: 80%;
 margin: 0 auto;
 margin-top: 2rem;
 display: flex;
 justify-content: space-between;
`

export const GPSContainer = styled.div`
 color: ${({ theme }) => theme.colors.yellow_dark};
 background-color: ${({ theme }) => theme.colors.brand_purple_light};
 font-family: 'Roboto', sans-serif;
 font-size: 0.975rem;
 font-style: normal;
 font-weight: 500;
 line-height: 130%;
 display: flex;
 align-items: center;
 display: flex;
 padding: 0.5rem; 
 justify-content: center;
 gap: 0.25rem;
 border-radius: 0.375rem;

 p {
  padding-top: 5px;
  color: ${({ theme }) => theme.colors.brand_purple_dark};
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
 }
`

export const LeftContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 0.75rem;
`