import styled from 'styled-components'
import { Link } from "react-router-dom"

export const Footer = styled.footer` 
    width:100%;
    height:194px;
    background: #333;
    position:relative;
    margin-top:50px;
    bottom:0;
    display:flex;
    flex-direction: column;
    padding-top:18px;
    padding-bottom:20px;
    align-items:center;
`
export const Logo = styled.img` 
    height:45px;
    width:45px;
`
export const LogoText = styled.p` 
    color:#fff;
`
export const FlexViewRow = styled.div` 
    display:flex;
    flex-direction: row;
`
export const ShortcutLink = styled(Link)` 
    text-decoration: none;
    color:rgb(235,235,235);
    font-size:15px;
    margin-right:22px;
    margin-top:12px;
    &:hover{
        text-decoration: underline;
    }
`
export const Derechos = styled.p` 
    color: rgb(205,205,205); 
    font-weight:300;
    font-size:14px;
    margin-top:10px;
`
export const Privacidad = styled.p` 
    margin-top:-2px;
    font-size:14px;
    color: rgb(235,235,235);
    font-weight:100;
    &:hover{ 
        text-decoration: underline;
        cursor:pointer;
    }
`
export const BoxIconStyle = { 
paddingLeft:8,
marginTop:14,
cursor:'pointer'
}
