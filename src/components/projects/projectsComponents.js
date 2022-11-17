import styled from 'styled-components'

const mw = (prop)=>{
    return `@media(max-width: ${prop}px)`
}
export const ArrowLeft={
    transform:'rotate(180deg) scale(1.3)',
    marginLeft:'13px',
    cursor:'pointer'
}
export const ArrowRight={
    transform:'scale(1.3)',
    marginLeft:'-21px',
    cursor:'pointer'
}
export const ArrowView = styled.div`
    display:flex;
    flex-direction:row;
    position:absolute;
    margin-top:-80px;
    ${mw(1646)}{
        margin-top:-65px;
    }
`
export const PreviewView = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:700px;
    align-items:center;
    justify-content:center;
    ${mw(784)}{
        flex-direction:column;
    }
    ${mw(420)}{
        height:750px;
    }
`
export const Point = styled.div`
    position:absolute;
    z-index:1;
    border-radius: 100%;
    padding: 7.5px;
    width: max-content;
    height: max-content;
    background: #e14c44;
    background: ${(prop) => prop.bg};
    margin-top: -3px;
    margin-left: 23px;
    margin-left: ${(prop) => prop.mgleft};
`
export const PreviewViewLeft = styled.div`
    background:${p=>p.theme.navBg};
    width:70%;
    border-radius:15px;
    margin-left:10px;
    height:100%;
    position:relative;
    margin-right:20px;
    background:#D6D6D6;
    opacity:0;
    ${mw(1244)}{
        width:60%;
        height:80%;
        margin-top:-80px;
    }
    ${mw(1244)}{
        width:55%;
        height:80%;
        margin-top:-80px;
    }
    ${mw(784)}{
        width:100%;
        margin:-20px auto;
        border-radius:0px;
    }
`
export const ProjectsView = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
`
export const ProjectsBox = styled.p`
    background:${p=>p.fg};
    color:${p=>p.fg};
    color:white;
    width:max-content;
    padding-left:14px;
    padding-right:14px;
    padding-top:5px;
    padding-bottom:5px;
    border-radius:6px;
    margin-right:7px;
    margin-top:-5px;
    font-size:13px;

    ${mw(1428)}{
        font-size:12px;
    }
    ${mw(1088)}{
        font-size:10px;
        margin-right:3px;
    }
`
export const PreviewViewRight = styled.div`
    width:24%;
    background:${p=>p.theme.navBg};
    margin-right:0px;
    border-radius:18px;
    margin-top:0px;
    padding-top:5px;
    padding-bottom:150px;
    padding-left:4px;
    border-radius:18px;
    height:max-content;
    ${mw(1454)}{
        padding-bottom:80px;
    }
    ${mw(1244)}{
        width:30%;
    }
    ${mw(957)}{
        width:35%;
    }
    ${mw(816)}{
        margin-top:-30px;
    }
    ${mw(784)}{
        width:80%;
        margin-top:85px;
    }
    ${mw(480)}{
        width:90%;
    }
`
export const PreviewLeftBg = styled.img`
    background:#D6D6D6;
    height:90%;
    width:90%;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    position:absolute;
    border-radius:15px;
    object-fit:contain;
    object-position:center;
    opacity:0;
    z-index:1;
`
export const ViewProjectButton = styled.button`
    background:${fabiana=>fabiana.bg};
    color:#e8e8e8;
    position:absolute;
    right:0;
    bottom:0;
    margin-bottom:43px;
    font-size:18.5px;
    border-radius:100px;
    margin-right:20px;
    margin-bottom:-120px;
    &:hover{
        opacity:.7;
    }
    ${mw(1454)}{
        margin-bottom:-50px;
    }
    ${mw(1428)}{
        font-size:16px;
    }
`
export const PreviewProjectsView = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    margin-top:47px;
    ${mw(1244)}{
        margin-top:-55px;
    }
    ${mw(784)}{
        margin-top:25px;
    }
`
export const ProjectBox = styled.div`
    width:300px;
    text-align:center;
    height:70px;
    background:${p=>p.bg || p.theme.navBg};
    margin-right:13.5px;
    margin-left:17.5px;
    border-radius:18px;
    margin-bottom:20px;
    display:flex;
    flex-direction:row;
    align-items:center;
    cursor:pointer;
-webkit-font-smoothing: subpixel-antialiased;
    backface-visibility: hidden;
    will-change: transform;
    position:relative;
    &:hover{
        transform: scale(1.12) perspective(1px) translateZ(0);
        background:${p=>p.theme.opaqueText};
    }
`
export const Etiqueta = styled.div`
    background:${p=>p.bg};
    position:absolute;
    height:40px;
    width:54px;
    right:0;
    border-bottom-right-radius:18px;
    margin-bottom:-30px;
  -webkit-clip-path: polygon(100% 0, 100% 0%, 100% 100%, 24% 100%);
  clip-path: polygon(100% 0, 100% 0%, 100% 100%, 24% 100%);
`
export const TechnologiesBox = styled.div`
    position:absolute;
    top:0;
    right:0;
    border-radius:18px;
    border-top-left-radius:0px;
    height:190px;
    width:480px;
    background:rgba(0,0,0,.5);
    backdrop-filter:blur(7px);
`
export const ProjectIc = styled.img`
    height:38px;
    transform:${p=>p.transf};
    user-select:none !important;
    margin-top:-5px;
    margin-left:15px;
    margin-right:0px;
`
export const ProjectTitle = styled.p`
    font-size:14.5px; 
    margin-top:15px;
    color:${p=>p.theme.lightDark};
    margin-left:10px;
    margin-right:10px;
`

export const ProjectId = styled.p`
    background:${p=>p.bg};
    color:${p=>p.theme.highContrastScheme};
    // padding:10px;
    // padding-bottom:5px; padding-top:5px;
    text-align:center;
    padding-top:5px;
    padding-bottom:5px;
    width:25px;
    font-size:12px;
    border-radius:100%;
    align-self:flex-start;
    margin-left:15.5px;
    color:white;
    margin-top:20px;
`
export const PreviewRightView = styled.div`
    padding-left:25px;
    padding-right:40px;
    padding-top:17px;
    position:relative;
`
export const PreviewRightTitle = styled.p`
    font-size:19px;
    color:${p=>p.fg};
    margin-left:6px;
    ${mw(1428)}{
        font-size:17px;
    }
    ${mw(1022)}{
        margin-right:30px;
    }
`
export const PreviewRightDesc = styled.p`
    margin-top:0px; 
    font-size:15px;
    margin-bottom:30px;
    color:${p=>p.theme.lightDark};
    ${mw(1428)}{
        font-size:14px;
    }
`
export const PreviewRightIc = styled.img`
    height:${p=>p.height || 42}px;
    transform:${p=>p.transf};
    transition:0s;
    position:absolute;
    right:0;
    margin-right:30px;
    margin-top:-6px;
`
export const PreviewRightLine =styled.div`
    width:120px;
    height:1px;
    background:${p=>p.bg};
    ${mw(1712)}{
        width:50px;
    }
    ${mw(1428)}{
        width:38px;
    }
    ${mw(784)}{
        width:80px;
    }
`
export const PreviewRightTitleView = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-top:10px;
`
