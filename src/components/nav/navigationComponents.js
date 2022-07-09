import styled from "styled-components"

export const Logo = styled.img` 
    height:40px;
    width:40px;
    margin-top:5px;
    margin-left:110px;
`
export const Nav = styled.nav` 
    box-shadow: 3px 4px 4px ${prop => prop.theme.body};
    width: 95%;
    border-radius:20px;
    background-color: ${prop => prop.theme.navBg};
    height:52px;
    display:flex;
    justify-content:space-between;
    margin:20px auto;
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
    margin-left:20px;
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
    border-bottom:1px solid ${prop => prop.theme.fontColor};
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
