import styled from 'styled-components'

export const View = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding-right:30px;
    padding-left:30px;
`
export const Img_404 = styled.img`
    height:100%;
    opacity:.6 !important;
    @media(max-width:975px){
        height:70%;
    }
    @media(max-width:400px){
        height:60%;
    }
`
export const Img = styled.img`
    height:45%;
    opacity:${p=>p.theme.opacityScheme} !important;
    @media(max-width: 800px){
        height:40%;
    }
    @media(max-width: 508px){
        height:50%;
    }
    @media(max-width: 423px){
        height:40%;
    }
`
export const Advice = styled.p`
    margin-top:77px; 
    color:${prop=>prop.theme.softColor};
    font-size:15.2px;
    @media(max-width:499px){
        font-size:13px;
        margin-top:40px;
    }
`
