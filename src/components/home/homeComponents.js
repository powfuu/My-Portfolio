import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const mw = (prop)=>{
    return `@media(max-width: ${prop}px)`
}
const mh = (prop)=>{
    return `@media(min-width: ${prop}px)`
}
export const ContactView = styled.div`
    width:800px;
    border-radius:8px;
    display:flex;
    align-items:center;
    flex-direction:column;
    position:relative;
    margin:20px auto;
    background:${prop=>prop.theme.navBg};
`
export const Banner = styled.img`
    width:100%;
    border-radius:8px;
    height:125px;
`
export const Pic = styled.img`
    width:67px;
    height:67px;
    border-radius:100%;
    margin-top:-39px;
`
export const Name = styled.p`
    color:${prop=>prop.theme.lightDark};
    margin-top:10px;
`
export const Description = styled.p`
    margin-top:-8px;
    font-size:14px;
    color:${prop=>prop.theme.opaqueText2};
`
export const ContactLinkedin = styled.button`
    padding-left:22px;
    padding-right:22px;
    padding-top:10px;
    padding-bottom:10px;
    font-size:15px;
    background:${prop=>prop.theme.secondaryButtonBg};
    border-radius:50px;
    color:${prop=>prop.theme.bsc};
    margin-top:10px;
`
export const OrDiv = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:5px;
    margin-bottom:5px;
`
export const Or = styled.p`
    color:${prop=>prop.theme.opaqueText2};
    margin-left:10px;
    margin-right:10px;
`
export const OrLine = styled.div`
    background:${prop=>prop.theme.opaqueText};
    margin-top:28px;
    width:120px;
    height:1px;
    border-radius:100px;
`
export const LinkedinSvg = styled.img`
    height:47px;
    width:47px;
    position:absolute; 
    margin-top:135px;
    right:0;
    margin-right:50px;
`
export const GmailSvg = styled.img`
    height:43px;
    width:43px;
    margin-top:-5px;
    margin-bottom:20px;
    cursor:pointer;
`
export const TecnologiesDiv = styled.div`
    margin-top:-45px;
    margin-left:-30px;
    ${mw(1448)}{
        margin-top:0px;
    }
    ${mw(950)}{
        margin:0;
        margin-top:25px;
        padding-left:40px;
        margin-bottom:-10px;
    }
`
export const ViewTecnologiesButLeft = styled.button`
    display:none;
    position:absolute;
    transform:translate(-50%,-50%);
    left:22%;
    margin-top:-91px;
    background:transparent;
    border:1px solid white;
    color:white;
    font-size:16.5px;
    border-radius: 100px;
    padding-left:25px;
    padding-right:25px;
    padding-top:10px;
    padding-bottom:10px;
    z-index:1;
    &:hover{
     color:#08edd8;
    border-color:#08edd8;
    }
    ${mw(950)}{
        display:block;
    }
`
export const ViewTecnologiesBut = styled.button`
    position:absolute;
    top:0;
    right:0;
    margin-top:35px;
    margin-right:70px;
    background:transparent;
    border:1px solid white;
    color:white;
    font-size:16.5px;
    border-radius: 100px;
    padding-left:25px;
    padding-right:25px;
    padding-top:10px;
    padding-bottom:10px;
    &:hover{
     color:#08edd8;
    border-color:#08edd8;
    }
    ${mw(950)}{
        display:none;
    }
`
export const bi = styled.div`

`
export const TecSkillsView = styled.div`
    display:flex;
    flex-direction:row;
    height:650px;
    background:#333;
    //#23282f
    //#0d151b
    margin-top:50px;
    ${mw(950)}{
        height:max-content;
        padding-top:50px;
        flex-direction:column-reverse;
    }
`
export const TecLeft = styled.div`
    padding-left:170px;
    padding-top:70px;
    position:relative;
    width:40%;
    ${mw(1061)}{
        width:50%;
    }
    ${mw(950)}{
        width:80%;
    }
`
export const TecLeftDesc = styled.p`
    color:rgb(230,230,230);
    width:90%;
    ${mw(1448)}{
        margin-left:-50px;
        width:100%;
    }
    ${mw(1194)}{
        font-size:15px;
    }
    ${mw(1061)}{
        margin-left:-90px;
    }
    ${mw(950)}{
        padding-bottom:125px;
    }
    ${mw(667)}{
        margin-left:-130px;  
    }
`
export const TecLeftTitle = styled.p`
    color:#08edd8;
    font-size:34px;
    white-space:break-word;
    ${mw(1448)}{
        margin-left:-50px;
        margin-top:14px;
    }
    ${mw(1194)}{
        font-size:30px;
    }
    ${mw(1061)}{
        margin-left:-90px;
    }
    ${mw(667)}{
        margin-left:-130px;  
        padding-right:110px;
    }
`
export const TecRight = styled.div`
    width:60%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    ${mw(1061)}{
        width:50%;
    }
    ${mw(950)}{
        width:100%;
        margin-bottom:-58px;
    }
`
export const TecnologiesView = styled.div`
    margin-top:60px;
`
export const TecTitleSection = styled.div`
    display:flex;
    flex-direction:row;
`
export const TecTitle = styled.p`
    color: ${prop=>prop.theme.lightDark};
    font-size:17px;
    font-weight:bold;
    margin-left:46px;
        margin-top:8px;
${mw(500)}{
    margin-left:20px;
}
    ${mw(390)}{
        font-size:16px;
    }
    ${mw(363)}{
        margin-left:30px;
        font-size:17px;
        margin-top:0px !important;
    }
`
export const TecBoxes = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:20px;
  flex-wrap: wrap;
    align-items:center;
    margin-left:30px;
    justify-content:center;
`
export const TecBox = styled.div`
    margin-right:30px;
    background:rgb(250,250,250);
    border-radius:25px;
    width:410px;
    height:300px;
    margin-top:13px;
    box-shadow: 1px 1px 1px 1px ${(prop) => prop.theme.inverseSoftFontColor};
    ${mw(411)}{
        width:100%;
        margin-right:20px;
    }
`
export const TecBoxInverse = styled.div`
    margin-right:30px;
    margin-top:13px;
    background:rgb(55,55,55);
    border-radius:25px;
    width:410px;
    height:300px;
    box-shadow: 1px 1px 1px 1px ${(prop) => prop.theme.inverseSoftFontColor};
    ${mw(411)}{
        width:100%;
        margin-right:20px;
    }
`
export const TecTitleBoxDiv = styled.div`
    display:flex;
    flex-direction:row;
`
export const TecBoxImg = styled.img`
    height:42px;
    margin-left:25px;
    margin-top:16px;
    ${mw(460)}{
        height:40px;
    }
`
export const TecBoxTitle = styled.p`
    font-size:20px;
    margin-left:1.75px;
    margin-top:28px;
    color:#000;
    ${mw(460)}{
        font-size:18px;
    }
`
export const TectecDiv = styled.div`
    display:flex; 
    flex-direction:row;
    margin-left:20px;
    margin-top:-10px;
    margin-right:20px;
    ${mw(408)}{
        margin-left:30px;
    }
    ${mw(360)}{
        margin-left:20px;
    }
`
export const Tectec = styled.p`
    color:rgb(110,110,110); 
    border:1px solid rgb(220,220,220);
    width:max-content;
    font-size:12.5px;
    padding-left:9px;
    padding-right:9px;
    padding-top:5px;
    padding-bottom:5px;
    border-radius:5px;
    margin-right:5px;
    &:hover{
        border-color:rgb(85,85,85);
        color:rgb(55,55,55);
    }
    ${mw(460)}{
        font-size:11px;
        margin-top:50px;
    }
    ${mw(429)}{
        margin-top:35px;
    }
    ${mw(407)}{
    padding-left:6px;
    padding-right:6px;
    padding-top:3px;
    padding-bottom:3px;
        font-size:9.5px;
        text-align:center;
        margin-top:30px;
    }
`
export const TectecInverse = styled.p`
    color:#e8e8e8;
    border:1px solid #e8e8e8;
    width:max-content;
    font-size:12.5px;
    padding-left:9px;
    margin-top:15px;
    padding-right:9px;
    padding-top:5px;
    padding-bottom:5px;
    border-radius:5px;
    margin-right:5px;
    &:hover{
        border-color:#08edd8;
        color:#08edd8;
    }
    ${mw(460)}{
        font-size:11px;
        margin-top:30px;
    }
    ${mw(407)}{
    padding-left:6px;
    padding-right:6px;
    padding-top:3px;
    padding-bottom:3px;
        font-size:9.5px;
        text-align:center;
        margin-top:30px;
    }
`
export const TecBoxDesc = styled.p`
    font-size:14px;
    margin-top:4px;
    padding-right:40px;
    padding-left:40px;
    color: rgb(120,120,120);
    ${mw(460)}{
        font-size:12px;
    }
`
export const TecBoxTitleInverse = styled.p`
    color: #e8e8e8;
    font-size:20px;
    margin-left:12px;
    margin-top:28px;
    ${mw(460)}{
        font-size:18px;
    }
`
export const TecBoxDescInverse = styled.p`
    color: #e8e8e8;
    font-size:14px;
    margin-top:2px;
    padding-right:40px;
    padding-left:40px;
    ${mw(460)}{
        font-size:13px;
    }
    ${mw(407)}{
        font-size:12px;
    }
`
export const ViewAllDiv = styled.div`
    margin-left: auto;
    display:flex;
    width:180px;
    margin-right:60px;
    flex-direction:row;
    padding-bottom:0px;
    padding-left:4px;
    border-bottom:1px solid transparent; 
    &:hover{
        border-bottom:1px solid rgb(180,180,180);
    }
${mw(500)}{
    margin-right:0px;
}
`
export const ViewAllBut = styled.button`
    background:transparent;
    white-space:nowrap;
    margin-left:-10px;
margin-top:0px;
    color: ${prop=>prop.theme.lightDark};
    ${mw(390)}{
        font-size:15px;
        margin-left:-15px;
    }
`
export const HomeView = styled.div`
    position:relative;
    background: ${(prop) => prop.theme.navBg};
    margin: 0 auto;
    min-height:600px;
    width: 95%;
    border-radius: 8px;
    display: flex;
    flex-direction:row;
  flex-wrap: wrap;
    ${mw(1150)}{
        width: 100%;
    }
`
export const LeftView = styled.div`
    width:55%;
    background:rgb(55,55,55);
    padding-top:3px;
display: flex;
  flex-flow: column;
    ${mw(1850)}{
        width:100% !important;
    }
`
export const RightView = styled.div`
    width:44.8%;
    background:rgb(55,55,55);
    border-radius:8px;
    border-bottom-right-radius:0px;
    border-top-right-radius:0px;
    ${mh(1151)}{
    border-right:2px solid ${prop=>prop.theme.opaqueBar};
    }
    ${mw(1850)}{
        height:600px;
        width:100% !important;
    }
`
export const VidPreview = styled.video`
    position:absolute;
    z-index:2px;
    width:45%;
    height:100%;
    object-fit:cover;
    object-position:center;
    border-radius:8px;
    border-bottom-right-radius:0px;
    border-top-right-radius:0px;
    ${mw(1850)}{
        width:100%;
    }
`
export const VidDiv = styled.div`
    position:absolute;
    z-index:1;
    width:45%;
    height:99%;
    display:flex;
    flex-direction:column;
    padding-top:3px;
    background:rgba(0,0,0,.3);
    align-items:center;
    justify-content:center;
    border-radius:8px;
    border-bottom-right-radius:0px;
    border-top-right-radius:0px;
    ${mw(1850)}{
        width:100%;
        height:600px;
    }
`
export const VidTitle = styled.p`
    color:white;
    font-size:26px;
  text-shadow: 1px 1px black;
`
export const VidDesc = styled.p`
    color:#d8d8d8;
    font-size:15px;
    width:80%;
    text-align:center;
  text-shadow: 1px 1px black;
    margin-top:2px;
`
export const VidButton = styled.button`
    margin-top:20px;
    color:#333;
    padding: 9.5px 22px 9.5px 22px;
`
export const Vid = styled.video`
    position:absolute;
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:bottom;
    border-radius:8px;
    border-bottom-right-radius:0px;
    border-top-right-radius:0px;
    ${mw(1850)}{
        display:none;
    }
`
export const FrequentlyAskedAnswer = styled.p`
    transition:0s;
    margin-top:-14.5px;
    margin-left:13px;
    padding-right:2px;
    font-size:12.3px;
    color:${prop=>prop.theme.bpc};
    white-space:wrap;
    ${mw(880)}{
        font-size:11px;
    }
    ${mw(797)}{
        font-size:10px;
    }
`
export const FrequentlyAskedDiv = styled.div`
    background:${prop=>prop.theme.inverseSoftColorIllusion};
    border-radius:7px;
    border-bottom-left-radius:0px;
    border-top-left-radius:0px;
    position: relative;
    height:cover;
    width:100%;
    display:flex;
    padding-bottom:0px;
    padding-top:2px;
    flex: 1 1 auto;
    min-height:310px;
    justify-content:center;
    ${mw(646)}{
        display:none !important;
    }
`
export const FrequentlyAskedBox = styled.div`

    border-radius:7px;
    margin-right:17px;
    margin-left:${prop=>prop.mgleft || 0}px;
    height: ${prop=>prop.height || 78}%;
    margin-top:${prop=>prop.mgtop || 30}px;
    width:${prop=>prop.width || 250 }px;
    background:${prop=>prop.theme.opaqueBar};
    border:1px solid ${prop=>prop.theme.inverseSoftFontColor2};
    display:flex;
    flex-direction:row;
    border-radius:7px;
`
export const FrequentlyAskedText = styled.p` 

    color:${prop=>prop.theme.inverseSoftFontColor2};
    position:absolute;
    margin-top:25.5px;
    margin-left:36.5px;
    font-size:14.8px;
    left:0;
`
export const FrequenltyBoxTitleDiv = styled.div`

    transition:0s;
    background:${prop=>prop.theme.opaqueBar};
    border-radius:7px;
    height:40px;
    position:relative;
    width:98%;
`
export const FrequenltyAskedTitle = styled.p`
    margin-top:10.9px;
    padding-left:81px;
    font-size:13px;
    padding-bottom:12px;
    color: ${prop=>prop.theme.navItems};

    ${mw(880)}{
        font-size:12px;
    }

    ${mw(797)}{
        font-size:11px;
    }
`
export const FrequentlyAskedBoxHidden = styled.div`
    display:none; 
    ${mh(2685)}{
        display:block;
    }
    ${mw(1850)}{
        display:block;
    }
    ${mw(1320)}{
        display:none;
    }
`
export const SmallPoint = styled.div` 
    position: absolute;
    border-radius: 100%;
    padding: 6.25px;
    width: max-content;
    height: max-content;
    background: ${(prop) => prop.bg};
    margin-top: ${prop=>prop.mgtop};
    margin-left: 17px;
    margin-left: ${(prop) => prop.mgleft};
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
export const LeftViewTitleDiv = styled.div`
    border-radius:7px;
    border-bottom-left-radius:0px;
    border-top-left-radius:0px;
    position: relative;
    margin-top: -3px;
    background: ${(prop) => prop.theme.inverseSoftColorIllusion};
    padding-bottom: 45px;

`
export const LeftViewDescription = styled.p`
    color: ${(prop) => prop.theme.inverseSoftFontColor};
    margin-right: 50px;
    margin-top: -22.5px;
    padding-left: 65px;
`
export const LeftViewSubTitle = styled.p`
    color: ${(prop) => prop.theme.inverseSoftFontColor2};
    font-size: 18px;
    padding-top: 55px;
    padding-left: 65px;
    margin-bottom: 14px;
`
export const LeftViewTitle = styled.p`
    color: ${(prop) => prop.theme.inverseSoftFontColor};
    margin-top: -14.5px;
    font-size: 35.4px;
    padding-left: 65px;
    ${mw(637)}{
        padding-right:40px !important;
    }
    ${mw(765)}{
        padding-right:380px;
    }
`
const opacityAnimation = keyframes`
    0% { opacity:0; },
    50% { opacity:0.1 },
 100% { opacity:1; }
`
export const Linkv2 = styled(Link)`
    cursor: pointer;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    margin-bottom: -7px;
    align-self: flex-end;
    height: max-content;
`
export const AboutMeDiv = styled.div`
    display:flex;
position:relative;
background:${prop=>prop.theme.glassstyle};
    padding-right:14px;
padding-bottom:20px;
backdrop-filter: blur(3px);
padding-left:25px;
  flex-wrap: wrap;
    ${mw(954)}{
        padding-bottom:75px !important;
    }
`
export const AboutMeTitle = styled.p`
    color: white;
    font-size:17px;
margin-top:16px;
    position:absolute;
    ${mw(954)}{
        margin-top:30px;
    }
`
export const AboutMeDivBox = styled.div` 
    width:max-content;
    border-radius:8px;
    height:105px;
    width:150px;
    margin-top:62px;
background: ${prop=>prop.bg};
    margin-right:13px;
    box-shadow: 0px 0px 0px 0px ${(prop) => prop.theme.inverseSoftFontColor};
    ${mw(954)}{
        margin-top:77px !important;
        margin-bottom:-55px;
    }
    ${mw(415)}{
        width:110%;
        margin-top:71px !important;
    }
`
export const AboutMeBoxTitle = styled.p`
    margin-top:12.6px;
    color:rgb(245,245,245);
    font-size:13px;
    padding-left:16px;
`
export const AboutMeBigTitle = styled.p`
    font-size:25px;
    margin-left:5px;
    margin:.8px auto;
    margin-left:24px;
    color:white;
`
