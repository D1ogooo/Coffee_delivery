import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Cart = styled(Link)`
 display: flex;
 align-items: center;
 border-radius: 0.375rem;
 display: flex;
 padding: 0.5rem;
 justify-content: center;
 align-items: center;
 gap: 0.25rem;
 background-color: ${({ theme }) => theme.colors.brand_yellow_light};
 cursor: pointer;
`

export const QuantityCard = styled.span`
 background-color: ${({ theme }) => theme.colors.brand_purple};
 width: 18px;
 height: 18px;
 border-radius: 20px;
 text-align: center;
 padding: 3px;
 font-family: 'Roboto';
 font-size: 11px;
 font-weight: 600;
 color: ${({ theme }) => theme.colors.base_white};
 position: absolute;
 margin-top: -30px;
 margin-right: -30px;
`