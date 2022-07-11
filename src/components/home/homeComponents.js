import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const mw = (prop)=>{
    return `@media(max-width: ${prop}px)`
}
const mh = (prop)=>{
    return `@media(max-height: ${prop}px)`
}

export const VidDivMiddle = styled.div`
    max-height:100%;
    background: rgba(0, 0, 0, 0.18);
    cursor: pointer;
    width: 942px;
height:71.6%;
margin-left: ${prop=>prop.mgleft || 0}px;
position:absolute;
opacity: 0;
z-index:1;
    &:hover {
        opacity: 1 !important;
    }
`
export const LeftView = styled.div`
    width:93%;
`
export const FrequentlyAskedAnswer = styled.p`
    margin-top:-14.5px;
    margin-left:13px;
    padding-right:2px;
    font-size:12.3px;
    color:${prop=>prop.theme.bpc};
    white-space:wrap;
`
export const FrequentlyAskedDiv = styled.div`
    margin-top:30px;
    background:${prop=>prop.theme.inverseSoftColorIllusion};
    border-top-left-radius:7px;
    border-bottom-left-radius:7px;
    height:278px;
    width:100%;
    display:flex;
    flex-direction:row;
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
    margin-left:22px;
    margin-top:18.5px;
    font-size:14.8px;
`
export const FrequenltyBoxTitleDiv = styled.div`
    background:${prop=>prop.theme.opaqueBar};
    border-radius:7px;
    height:40px;
    width:98%;
`
export const FrequenltyAskedTitle = styled.p`
    margin-top:10.9px;
    padding-left:81px;
    font-size:13px;
    padding-bottom:12px;
    color: ${prop=>prop.theme.navItems};
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
export const HomeView = styled.div`
    background: ${(prop) => prop.theme.navBg};
    height: 71vh;
    margin: 0 auto;
    padding-bottom: 6px;
    width: 95%;
    border-radius: 8px;
    display: flex;
    flex-direction:row;
    ${mw(800)}{
        display:none !important;
    }
`
export const Point = styled.div`
    position: absolute;
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

    border-top-left-radius:7px;
    border-bottom-left-radius:7px;
    margin-top: -18px;
    background: ${(prop) => prop.theme.inverseSoftColor};
    padding-bottom: 22px;
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
    white-space: nowrap;
    padding-left: 65px;
`
export const VidView = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    width:100%;
height:100%;
align-self:center;
    transition: 0.6s all ease-in;
`
export const VidDiv = styled.div`
    max-height:100%;
    background: rgba(0, 0, 0, 0.18);
    cursor: pointer;
    width: 430px;
height:71.6%;
margin-left: ${prop=>prop.mgleft || 0}px;
position:absolute;
    opacity: 0;
clip-path: ${prop=>prop.cp || "polygon(100% 0%, 0 0, 0% 100%)"}; 
  filter: drop-shadow(-1px 6px 10px rgba(0, 0, 0, 1));
z-index:3;
    &:hover {
        opacity: 1 !important;
    }
`
const opacityAnimation = keyframes`
    0% { opacity:0; },
    50% { opacity:0.1 },
 100% { opacity:1; }
`
export const Vid = styled.video`
    cursor: pointer;
    width: 430px;
    height: 100.8%;
    object-fit:cover;
    object-position:center;
    border-top-right-radius:8px;
    border-bottom-right-radius:8px;
    transition:0s;
clip-path: ${prop=>prop.clipPath};
`
export const VidGlassView = styled.div`
    min-width: 26%;
    position: absolute;
    min-height: 70%;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    background: ${(prop) => prop.theme.navBg};
`
export const VidTitleTop = styled.p`
    color: ${(prop) => prop.theme.navItems};
    position: absolute;
    margin-right: 717px;
    font-size: 16px;
    margin-top: 23.5px;
`
export const VidTitleTopLine = styled.p`
    width: 700px;
    border-bottom: 1px solid ${(prop) => prop.theme.opaqueText};
    position: absolute;
    margin-right: 4px;
    margin-top: 36px;
`
export const Test = styled.img`
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    border-radius: 8px;
`
export const MergeV2 = styled.div`
    padding-left: 22.5px;
    padding-right: 22.5px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 7px;
    background: ${(prop) => prop.theme.secondaryButtonBg};
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
export const MergeV = styled.div`
    align-self: flex-end;
    height: max-content;
    padding-left: 22.5px;
    padding-right: 22.5px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 7px;
    background: ${(prop) => prop.theme.body};
    cursor: pointer;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    margin-bottom: -7px;
    &:hover {
        background: ${(prop) => prop.theme.navBg};
    }
`
export const InfoVidView = styled.div`
    width:1274px !important;
position:absolute;
    background: rgba(0, 0, 0, 0.35);
    padding-bottom:0px !important;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    border-radius: 0px;
    backdrop-filter: blur(5px);
    animation-name: ${opacityAnimation};
    animation-duration: 1s;
    animation-iteration-count: 1;
`
export const InfoVidTitle = styled.p`
    color: #fff;
    text-shadow: 1px 1px 1px rgb(80, 80, 80);
    font-size: 19px;
`
export const TitleInfoDiv = styled.div`
    margin-left: 26px;
    padding-left: 4px;
    margin-top: 4px;
    border-bottom: 1px solid rgb(225, 225, 225);
    margin-right: 45px;
    flex-direction: row;
    display: flex;
`
export const InfoVidDescription = styled.p`
    color: white;
    padding-left: 26px;
    margin-top: 13px;
    font-size: 14px;
    margin-right: 26px;
`
export const InfoVidTagDiv = styled.div`
    margin-top: -11.5px;
    padding-left: 25px;
`
export const InfoVidTag = styled.p`
    display: inline-block;
    border: 1px solid white;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: max-content;
    color: white;
    font-size: 14px;
    border-radius: 4px;
    margin-right: 12px;
    margin-bottom: -1px;
`
export const AboutMeDiv = styled.div`
    margin-top:5px;
    display:flex;
    flex-direction:row;
    margin-left:35px;
`
export const AboutMeTitle = styled.p`
    color: ${prop=>prop.theme.navItems};
    font-size:16px;
margin-top:16px;
    position:absolute;
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
