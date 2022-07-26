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
    color: ${prop=>prop.theme.important};
    text-decoration:underline;
`
