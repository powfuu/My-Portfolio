import styled from "styled-components"
import { Burger } from '@mantine/core';

const mh = (prop) => {
    return `@media (min-width: ${prop}px)`
}
const mw = (prop) => {
    return `@media (max-width: ${prop}px)`
}
export const ScrollUpView = styled.div`
    height:60px;
    width:60px;
    position:fixed;
    transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    z-index:2;
    top:120%;
    right:0;
    margin-right:55px;
    background:black;
    border-radius:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px;
    ${mw(1560)}{
        margin-right:50px;
    }
    ${mw(1024)}{
        margin-right:35px;
    }
    ${mw(500)}{
        margin-right:5px;
        height:55px;
        width:55px;
    }
`
export const ScrollUpIc={
    transform:'scale(1.3)'
}
export const LanguageView = styled.div`
    height:55px;
    width:55px;
    position:fixed;
    transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    z-index:2;
    top:92%;
    right:left;
    margin-left:75px;
    background:${p=>p.theme.navBg};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px;
    border-radius:100%;
    border-bottom-left-radius:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    ${mw(500)}{
        margin-left:45px;
        height:55px;
        width:55px;
    }
`
export const CurrentLanguageSvg = styled.img`
    height:25px;
    width:33px;
    border-radius:6px;
    transition:0s !important;
`
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
    width: 95%;
    border-radius:20px;
    background-color: ${prop => prop.theme.navBg};
    height: ${prop=>prop.height || 52}px;
    display:flex;
    justify-content:space-between;
    z-index:5;
    margin:20px auto;
    ${mh(1151)}{
        height:52px !important;
    top:0;
    position:fixed;
    transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    left:50%;
    top:20px;
    }
    ${mw(1150)}{
        display:block !important;
        overflow-y:hidden !important;
        justify-content: none !important;
        flex-direction:column !important;
        width:100% !important;
        border-radius:0px !important;
        margin:0px auto !important;
        margin-bottom:-70px !important;
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
    ${mh(1151)}{
    margin-top:-88.25px;
    }
    ${mw(1150)}{
        padding:0;
        display:block;
        margin:-72px auto;
        width:max-content;
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
        margin-bottom:-70px;
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
        margin-bottom:-70px;
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
        width:max-content;
        margin:110px auto;
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
