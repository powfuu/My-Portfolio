import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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
    border-radius:7px;
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
    flex-direction: row;
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
    border-radius: 8px;
    margin-top: -20px;
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
    justify-content: flex-end;
    margin-right: 40px;
    width: 97%;
    transition: 0.6s all ease-in;
`
export const VidDiv = styled.div`
    max-height: 82%;
margin-top: 67px;
    background: rgba(0, 0, 0, 0.18);
    margin-left: 22.5px;
    cursor: pointer;
    width: 15.6%;
    width: 277px;
    border-radius: 8px;
    margin-left: -276.5px;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`
const opacityAnimation = keyframes`
    0% { opacity:0; },
    50% { opacity:0.1 },
 100% { opacity:1; }
`
export const Vid = styled.video`
    margin-left: 22.5px;
    cursor: pointer;
    width: 15.5%;
    width: 277px;
    max-height: 82%;
    object-fit: cover;
    object-position: center;
    border-radius: 7px;
    transition:0s;
    margin-top: 66px;
    box-shadow: 0px 2px 2px 2px ${(prop) => prop.theme.body};
`
export const VidGlassView = styled.div`
    min-width: 26%;
    position: absolute;
    min-height: 70%;
    border-radius: 5px;
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
    width: 1200px;
    margin-top: 482px;
    background: rgba(0, 0, 0, 0.35);
    margin-left: 22.5px;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    border-radius: 8px;
    margin-left: -1142px;
    backdrop-filter: blur(5px);
    animation-name: ${opacityAnimation};
    animation-duration: 3s;
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
    box-shadow: 0px 0px 1px 1px ${(prop) => prop.theme.inverseSoftFontColor};
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
