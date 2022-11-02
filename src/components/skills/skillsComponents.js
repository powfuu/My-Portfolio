import styled from 'styled-components'
const mw = (prop)=>{
    return `@media(max-width: ${prop}px)`
}

export const TitleView = styled.div`
    display:flex;  
    flex-direction:row;
    align-items:center;
`
export const TitleLine = styled.div`
    background-color:${prop=>prop.theme.inverseSoftFontColor2};
    width:200px;
    height:1px;
`
export const Title = styled.p`
    color:${prop=>prop.theme.softColor};
    margin-left:15px;
`
export const ToolsView = styled.div`
    margin-top:20px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-bottom:10px;
    justify-content:center;
    padding-left:50px;
    ${mw(1800)}{
        justify-content: center;
    }
    ${mw(499)}{
        margin-left:0px;
        margin-right:0px;
    }
`
export const ToolBox = styled.div`
    padding:6px;
    background:${prop=>prop.theme.navBg};
    width:350px;
    height:250px;
    border-radius:12px;
    margin-bottom:20px;
box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    margin-right:20px;
    position:relative;
    padding-left:24px;
    padding-right:24px;
    ${mw(976)}{
        width:100%;
    }
    ${mw(499)}{
        margin-right:0px;
        margin-left:-50px;
    }
`
export const ToolCircle = styled.div`
    position:absolute;
    right:0;
    padding-left:11px; padding-right:11px;
    padding-top:5px; padding-bottom:5px;
    border-radius:100%;
    background:${prop=>prop.theme.fontColor};
    margin-right:23px;
    margin-top:13px;
    &:hover{
        opacity:.5;
    }
`
export const ToolCircleNumber = styled.div`
    color:${prop=>prop.theme.inverseSoftFontColorImportant};
    font-size:17px;
`
export const ToolQuestion = styled.p`
    color:${p=>p.theme.fontColor};
    font-weight:bold;
    margin-top:25px;
    padding-right:55px;
`
export const ToolDesc = styled.p`
    margin-top:9px;
    font-size:14px;
    color:${p=>p.theme.softColor};
    ${mw(372)}{
        font-size:13px;
    }
    ${mw(349)}{
        font-size:12px;
    }
`
export const ToolBoxTitleView = styled.div`
    background-color: ${p=>p.theme.bgtool};
    border-radius:8px;
    display:flex;
    margin:0px auto;
    align-items:center;
    position:absolute;
    width:88%;
    bottom:0;
    margin-bottom:20px;
`
export const ToolBoxIcView = styled.div`
    background:${p=>p.theme.bgtoolIc};
    width:max-content;
    height:max-content;
    padding:9px;
    border-radius:8px;
    margin-top:-36px;
    margin-left:22.5px;
box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

`
export const ToolBoxIc = styled.img`
    height:40px;
    width:40px;
`
export const ToolBoxTitle = styled.p`
    margin-left:20px;
    font-size:15.5px;
    color:${p=>p.theme.lightDark};
     ${mw(357)}{
        font-size:14px;
    }
`
export const SkillsView = styled.div`
    display:flex;
    justify-content:center;
    padding-right:30px;
    padding-left:30px;
    flex-wrap:wrap;
`
export const SkillBoxPolygon = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:60px;
    ${mw(1029)}{
        margin-bottom: 100px;
    }
`
export const SkillBox = styled.div`
    background:${prop=>prop.theme.navBg};
    display:flex;
    flex-direction:column;
    height:185px;
    width:195px;
    text-align:center;
    align-items:center;
    justify-content: center;
    margin-right:95px;
box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    border-radius:20px;
    transform:rotate(46deg);
    position:relative;
    z-index:1;
padding-left:5px; padding-top:5px;
    margin-bottom:25px;
`
export const SkillBoxBehind = styled.div`
    background:${prop=>prop.theme.softColor};
    background:rgb(70,70,70);
    display:flex;
    flex-direction:column;
    height:185px;
    width:195px;
    text-align:center;
    align-items:center;
    justify-content: center;
    margin-right:95px;
box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    border-radius:20px;
    transform:rotate(20deg);
    position:relative;
    z-index:1;
    margin-right:-200px;
`
export const SkillSvg = styled.img`
    height:${p=>p.height}px; 
    transform:rotate(-48deg);
    position:absolute; 
    border-radius:4px;
    top:0;
    left:0;
margin-left:${p=>p.ml}px;
margin-top:${p=>p.mt}px;
`
export const SkillTitle = styled.p`
    color:${p=>p.theme.softColor};
    font-size:14px;
    margin-top:55px;
    margin-right:6px;
    margin-left:45px;
    transform:rotate(-48deg);
    margin-bottom:38px;
    position:absolute; 
`
