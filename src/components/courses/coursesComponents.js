import styled from 'styled-components'

export const View = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    padding-right:30px;
    padding-left:30px;
    margin-top:100px;
`
export const Img_404 = styled.img`
    height:40%;
    position:absolute;
    transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    left:50%;
    top:40%;
    opacity:.6 !important;
    @media(max-width:975px){
        height:32%;
    }
    @media(max-width:400px){
        height:22%;
    }
`
export const Img = styled.img`
    height:45%;
    margin-top:50px;
    opacity:.5 !important;
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
