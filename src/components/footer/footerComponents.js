import styled from 'styled-components'
import { Link } from "react-router-dom"
const mw = (prop) => {
    return `@media (max-width: ${prop}px)`
}
export const Footer = styled.footer` 
    background: ${props=>props.theme.footerBg};
    position:relative;
    bottom:0;
    display:flex;
    flex-direction: column;
    padding-top:18px;
    padding-bottom:20px;
    align-items:center;
    width:100%;
    // width: 98.4%;
    // border-radius:20px;
    // margin-bottom:14px;
    // border-radius:8px;
    margin:40px auto;
    margin-bottom:-18px !important;
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
  flex-wrap: wrap;
    position:relative;
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
    ${mw(660)}{
        display:none;
    }
`
export const Derechos = styled.p` 
    color: rgb(205,205,205); 
    font-weight:300;
    font-size:14px;
    margin-top:10px;
    ${mw(660)}{
        padding-right:20px;
        padding-left:40px;
    }
`
export const Privacidad = styled.p` 
    margin-top:-2px;
    font-size:14px;
    color:white;
    font-weight:100;
    &:hover{ 
        text-decoration: underline;
        cursor:pointer;
    }
    ${mw(660)}{
        margin-top:0px;
    }
`
export const BoxIconStyle = { 
paddingLeft:8,
marginTop:-35,
cursor:'pointer'
}
