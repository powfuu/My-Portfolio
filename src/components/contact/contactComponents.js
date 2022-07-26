import styled from 'styled-components'

const mw = (prop)=>{
    return `@media(max-width: ${prop}px)`
}
const mh = (prop)=>{
    return `@media(min-width: ${prop}px)`
}
export const ContactView = styled.div`
    margin-top:90px;
`
export const ProfileView = styled.div`
box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    position:relative;
    background-color:${p => p.theme.navBg};
    margin: 0 auto;
    min-height:600px;
    width: 70%;
    border-radius: 8px;
    display: flex;
    flex-direction:column;
    align-items:center;
    ${mw(1150)}{
        width: 100%;
    }
`
export const Banner = styled.img`
    width:100%;
    border-radius:8px;
    height:210px;
    object-fit:cover;
    ${mw(1150)}{
        border-radius:0px;
    }
`
export const Pic = styled.img`
    object-fit:cover;
    height:105px;
    width:105px;
    border-radius:100%;
    margin-top:-65px;
`
export const LinkedInSvg = styled.img`
    height:55px;
    width:55px;
    position:absolute; 
    margin-top:228px;
    right:0;
    margin-right:100px;
    ${mw(560)}{
        margin-right:20px !important;
        height:44px;
        width:44px;
    }
`
export const Name = styled.p`
    color:${prop=>prop.theme.lightDark};
    margin-top:14.5px;
    font-size:17.4px;
`
export const Desc = styled.p`
    margin-top:-2px;
    font-size:15.2px;
    color:${prop=>prop.theme.opaqueText2};
    width:60%;
    text-align:center;
    ${mw(560)}{
        font-size:12px;
        width:80%;
    }
`
export const ContactLinkedin = styled.p`
    padding-left:22px;
    padding-right:22px;
    padding-top:10px;
    padding-bottom:10px;
    font-size:16px;
    background:${prop=>prop.theme.secondaryButtonBg};
    border-radius:50px;
    color:${prop=>prop.theme.bsc};
    margin-top:23.5px;
    cursor:pointer;
`
export const OrView = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:6px;
    margin-bottom:5px;
`
export const OrLine = styled.div`
    background:${prop=>prop.theme.opaqueText};
    margin-top:28px;
    width:300px;
    height:1px;
    border-radius:100px;
`
export const Or = styled.p`
    color:${prop=>prop.theme.opaqueText2};
    margin-left:10px;
    margin-right:10px;
    font-size:17px;
`
export const ContactGmail = styled.img`
    height:50px;
    width:50px;
    margin-top:9px;
    margin-bottom:25px;
    cursor:pointer;
`
export const Card = styled.div`
    margin-top:25px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    margin-right:30px;
    margin-left:30px;
    padding-top:10px;
`
export const CardQuestion = styled.div`
    width:500px;
    height: ${prop=>prop.height | 60}px;
    text-align:center;
    background-color:${p => p.theme.navBg};
    border-radius: 20px;
    margin-right:30px;
    margin-bottom:20px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    overflow-y:hidden;
    cursor:pointer;
    &:hover{
        opacity:.6;
    }
    ${mw(570)}{
        margin-right:0px;
        width:92%;
    }
`
export const Plus = styled.p`
    float:left;
    display:inline-block;
    color:#00CBA9;
    font-weight:bold;
    margin-left:40px;
    font-size:20px;
    margin-top:17.2px;
    margin-right:-15px;
`
export const Question = styled.p`
    margin-top:20.5px;
    color:${p=>p.theme.fontColor};
    font-size:14px;
    font-weight:${p=>p.theme.boldInLight};
    ${mw(570)}{
        padding-right:50px;
        padding-left:100px;
    }
    ${mw(533)}{
        font-size:12px;
        margin-top:17px;
    }
`
export const Answer = styled.p`
    text-align:left;
    padding-right:50px;
    padding-left:50px;
    margin-top:30px;
    color:${p=>p.theme.softColor};
    font-size:15px;
    ${mw(533)}{
        margin-top:25px;
    }
`
