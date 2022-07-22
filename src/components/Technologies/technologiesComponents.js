import styled from 'styled-components'
import { Canvas } from "react-three-fiber"


const mw = (prop)=>{
    return `@media(max-width: ${prop}px)`
}
const mh = (prop)=>{
    return `@media(min-width: ${prop}px)`
}
export const TecView = styled.div`
`
export const TecBox = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    ${mw(1517)}{
        flex-direction: column-reverse !important;
        margin-right:20px;
        margin-left:0px;
    }
`
export const TechnologiesView = styled.div`
    background:transparent;
    width:100%;
    margin-top:1vh;
`
export const TecLevelView = styled.div`

box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    background:${prop=>prop.theme.navBg};
    border-radius:21px;
    width:max-content;
    padding-left:30px;
    padding-right:14px;
    padding-top:4px;
    padding-bottom:8px;
    margin-left:48px;
    &:hover{
        opacity:.5 !important;
    }
    ${mw(1517)}{
        margin: 30px auto;
    }
    ${mw(433)}{
        width:85% !important;
        margin-left:10px !important;
    }
`
export const LevelsDiv = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    ${mw(433)}{
    flex-direction:column;
        align-items:flex-start;
    }
`
export const TecLevelDiv = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding-right:28px;
    margin-top:-14.5px;
    margin-bottom:5px;
`
export const TectLevelTitle = styled.p``
export const TechnologiesListView = styled.div`
    margin-top:30px;
    margin-left:48px;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:center;
`
export const TechBox = styled.div`
    background:${prop=>prop.theme.navBg};
    border-radius:18px;
    width:147px;
    height:130px;
    margin-right:13.5px;
    margin-bottom:13.5px;
box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    &:hover{
        opacity:.5 !important;
    }
`
export const TechTitle = styled.p`
    margin-left:22px;
    padding-top:1.5px;
    font-size:${prop=>prop.fz || 14.7}px;
    color:${prop=>prop.theme.softColor};
`
export const TechIS = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`
export const TechIndicator = styled.div`
    height:64px; 
    width:2px;
    margin-top:-2px;
    background:${prop=>prop.bg};
    margin-left:32px;
`
export const TechSvg = styled.img`
    width:48px;
    height:48px;
    margin-left:26.5px;
    margin-top:-5px;
`
export const TecLevelIndicator = styled.div`
    background:${prop=>prop.bg};
    border-radius:100%;
    height:13.5px;
    width:13.5px;
`
export const TecLevelVal = styled.p`
    margin-left:8px;
    color:${prop=>prop.theme.opaqueText2};
    font-size:14.5px;
`
export const D3View = styled.div`
    display:flex; 
    flex-direction:column;
    width:30%;
    align-items:center;
    margin-left:auto;
    margin-right:210px;
    margin-top:-100px;
    ${mw(1517)}{
        align-items:center;
        width:100%;
        margin-top:0px;
    }
`
export const D3ModuleCanvas = styled(Canvas)`
    background:transparent;
    width:750px !important;
    height:550px !important;
    float:right !important;
    margin-right:20px !important;
    ${mw(858)}{
        width:620px !important;
        height:420px !important;
    }
    ${mw(643)}{
        margin-right:60px !important;
        width:550px !important;
        height:350px !important;
    }
    ${mw(519)}{
        width:450px !important;
        height:250px !important;
    }
`
export const D3Text = styled.p`
    color:${pwop=>pwop.theme.opaqueText2};     
    font-size:12.8px;
    margin-top:-142px;
    margin-left:100px;
    ${mw(1517)}{
        margin-top:-155px;
    }
    ${mw(858)}{
        margin-top:-120px;
    }
    ${mw(643)}{
        margin-top:-90px;
    }
    ${mw(519)}{
        margin-top:-52px;
        font-size:11px;
        margin-left:50px;
    }
`
