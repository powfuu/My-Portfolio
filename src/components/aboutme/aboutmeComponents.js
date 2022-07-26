import styled from 'styled-components'
import { Canvas } from "react-three-fiber"

const mw = (prop)=>{
    return `@media(max-width: ${prop}px)`
}
const mh = (prop)=>{
    return `@media(min-width: ${prop}px)`
}
export const AboutMeDiv = styled.div`
    margin-top:92px;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const AboutMeDivWindow = styled.div`
    border-radius:8px;
    width:90%;
    position: relative;
    margin-top: -3px;
    background: ${(prop) => prop.theme.inverseSoftColorIllusion};
    padding-bottom: 55px;
    height:max-content;
    padding-bottom:140px;
    ${mw(1725)}{
        padding-bottom: 100px;
    }
    ${mw(1637)}{
        padding-bottom:60px;
    }
    ${mw(680)}{
        width:95%;
    }
`
export const Point = styled.div`
    position:absolute;
z-index:1;
    border-radius: 100%;
    padding: 8px;
    width: max-content;
    height: max-content;
    background: #e14c44;
    background: ${(prop) => prop.bg};
    margin-top: 17px;
    margin-left: 23px;
    margin-left: ${(prop) => prop.mgleft};
`
export const TitleView = styled.div`
    margin-top:80px;
    margin-left:30px;
    display:flex;
    flex-direction:row;
    align-items:center;
`
export const TitleViewLine = styled.div`
    height:1px;
    width:100px;
    background:${p=>p.theme.opaqueText2};
`
export const Title = styled.div`
    color:${p=>p.theme.bgtoolIc}; 
    font-size:21px;
    margin-left:10px;
`
export const Biography = styled.p`
    color:${p=>p.theme.bsc};
    margin-top:25px;
    margin-right:66px;
    margin-left:50px;
    font-size:15.4px;
    ${mw(680)}{
        margin-right:35px;
        margin-left:35px;
    }
`

export const D3View = styled.div`
    display:flex; 
    flex-direction:column;
    background:transparent;
    align-items:center;
    margin-left:auto;
    ${mw(1517)}{
        align-items:center;
        width:100%;
        margin-top:0px;
    }
`
export const D3ModuleCanvas = styled(Canvas)`
    background:transparent;
    width:400px !important;
    height:750px !important;
    ${mw(858)}{
        width:720px !important;
        height:520px !important;
    }
    ${mw(519)}{
        width:650px !important;
        height:450px !important;
    }
`
export const D3Text = styled.p`
    color:${pwop=>pwop.theme.opaqueText};     
    font-size:12.8px;
    margin-top:-322px;
    margin-left:10px;

    ${mw(858)}{
        margin-top:-205px;
    }
    ${mw(643)}{
    }
    ${mw(519)}{
        margin-top:-175px;
    }
    ${mw(370)}{
        font-size:11.5px;
    }
`
export const FlexView = styled.div`
    display:flex;
    flex-direction:row;
    ${mw(1517)}{
        flex-direction:column;
    }
`
