import styled from "styled-components"
import { Burger } from '@mantine/core';

const mh = (prop) => {
    return `@media (min-width: ${prop}px)`
}
const mw = (prop) => {
    return `@media (max-width: ${prop}px)`
}
export const HamMenu = styled(Burger)`
    display:none;
    position:absolute;
    margin-right:5.75%;
    right:0;
    top:0;
    transform:scale(.9);
    margin-top:27px;
    ${mw(1150)}{
        display:block;
        margin-top:8px;
    }
`
export const Logo = styled.img` 
    height:40px;
    width:40px;
    margin-top:5px;
    margin-left:110px;
    ${mw(1200)}{
        margin-left:70px;
    }
    ${mw(800)}{
        margin-left:25px;
        height:37px;
        width:37px;
        margin-top:7px;
    }
`
export const Nav = styled.nav` 
    box-shadow: 3px 4px 4px ${prop => prop.theme.body};
    width: 95%;
    border-radius:20px;
    background-color: ${prop => prop.theme.navBg};
    height: ${prop=>prop.height || 52}px;
    display:flex;
    justify-content:space-between;
    margin:20px auto;
    ${mh(1151)}{
        height:52px !important;
    }
    ${mw(1150)}{
        overflow-y:hidden;
        justify-content: none;
        flex-direction:column;
        width:100%;
        border-radius:0px;
        margin:0px auto;
        margin-bottom:12px;
    }
`
export const ToggleTheme = styled.div` 
    float:right;
    margin-right:23px;
    display:table;
    width:70px;
    border-radius: 20px;
    border-bottom-right-radius:${prop=>prop.bbrr || 0}px;
    border-bottom-left-radius:${prop=>prop.bblr || 0}px;
    margin-top: 8px;
    padding-bottom:2px;
    padding-top:2px;
    padding-left:${prop=>prop.pl}px;
    padding-right:${prop=>prop.pr}px;
    background: ${prop => prop.bg};
    cursor:pointer;
    ${mw(1150)}{
    }
`
export const ToggleThemeText = styled.p` 
    font-size:13px;
    display:table-cell;
    vertical-align: middle;
    padding-top:2.5px;
    color:${prop=>prop.theme.fontColor};
    padding-left:4.5px;
`
export const ThemeModeView = styled.div` 
    display:table-cell;
    background:${prop=>prop.bg};
    padding:4.5px;
    width:24px;
    border-radius:20px;
`
export const NavItems = styled.div` 
    display:flex;
    align-self:center;
    margin-top:0px;
    ${mw(1150)}{
        margin-top:-13px;
        display:block;
    }
`
export const Item = styled.p` 
    margin-right:27px;
    color:${prop=>prop.theme.navItems};
    cursor:pointer;
    transition:.6s;
    padding-top:13px;
    font-size:15px;
    border-bottom:1px solid transparent;
    margin-top:17px;
    width:max-content;
    ${mw(1150)}{
        padding-top:4px;
        display:block;
    }
    //padding-bottom:12.5px;
    &:hover{ 
color:${prop=>prop.theme.fontColor};
    }
&:after {
  display:block;
  content: '';
  border-bottom:1px solid ${prop => prop.theme.fontColor};
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
    padding-bottom:14px;
}
    &:hover:after {  
        transform: scaleX(1); 
         }
`

export const ItemWithoutEffect = styled.p` 
    transition: .6s;
    font-size:15px;
    margin-right:27px;
    color:${prop=>prop.theme.fontColor};
    padding-top:15px;
    padding-bottom:14px;
    border-bottom:1px solid ${prop => prop.theme.fontColor};
    ${mw(1150)}{
        padding-top:4px;
        display:block;
    }
`
export const moon = { 
transform: 'scale(.78)',
cursor:'pointer',
color:'#555',
}
export const sun = { 
color:'#444',
cursor:'pointer',
transform: 'rotate(-90deg) scale(1.12)',
}
export const downloadCvStyle = { 
float:'right',
marginTop:'9px',
marginRight:'16px',
fontSize:'14px'
}
export const ViewR = styled.div`
    ${mw(1150)}{
        margin:0 auto;
        padding-bottom:50px;
    }
`
export const ButtonSecondary = styled.button`
    background-color: ${prop=>prop.theme.secondaryButtonBg};
    color: ${ prop => prop.theme.bsc };
    margin-top: ${prop=>prop.mgtop || 0}px;
    margin-left: ${prop=>prop.mgleft || 0}px;
    margin-right: ${prop=>prop.mgright || 0}px;
    margin-bottom: ${prop=>prop.mgbottom || 0}px;
`
