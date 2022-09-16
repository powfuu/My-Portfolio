import styled from "styled-components"
export const View = styled.div`
    margin-top: ${prop=>prop.mgtop || 90}px;
    margin-left: ${prop=>prop.mgleft || 0}px;
    margin-right: ${prop=>prop.mgright || 0}px;
    margin-bottom: ${prop=>prop.mgbottom || 0}px;
`
export const Text = styled.p` 
    margin-top: ${prop=>prop.mgtop || 0}px;
    margin-left: ${prop=>prop.mgleft || 0}px;
    margin-right: ${prop=>prop.mgright || 0}px;
    margin-bottom: ${prop=>prop.mgbottom || 0}px;
`
export const ButtonPrimary = styled.button`
    background-color: ${prop=>prop.theme.primaryButtonBg};
    color: ${ prop => prop.theme.bpc };
    margin-top: ${prop=>prop.mgtop || 0}px;
    margin-left: ${prop=>prop.mgleft || 0}px;
    margin-right: ${prop=>prop.mgright || 0}px;
    margin-bottom: ${prop=>prop.mgbottom || 0}px;
`
export const ButtonSecondary = styled.button`
    background-color: ${prop=>prop.theme.secondaryButtonBg};
    color: ${ prop => prop.theme.bsc };
    margin-top: ${prop=>prop.mgtop || 0}px;
    margin-left: ${prop=>prop.mgleft || 0}px;
    margin-right: ${prop=>prop.mgright || 0}px;
    margin-bottom: ${prop=>prop.mgbottom || 0}px;
`
export const Important = styled.span`
    text-decoration:underline;
    background-position-x: 0px;
    background-size: 200%;
    color:transparent;
    background-clip: text;
  -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: ${p=>p.theme.importantX2};
    background-image: linear-gradient(90deg, ${p=>p.theme.importantX} 0%, ${p=>p.theme.important} 50%, ${p=>p.theme.importantX} 100%);
    animation: 3s ease-in-out 0s infinite normal none running bHafHd;
`

