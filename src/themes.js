import { createGlobalStyle } from "styled-components"

export const light = { 
body: "rgb(230,230,230)",
fontColor: "#000",
primaryButtonBg: "rgb(205,205,205)",
secondaryButtonBg: "#2E3138",
navBg: "rgb(250,250,250)",
bpc: '#333',
bsc: '#e4e4e4',
scrollc:'#999',
navItems:'#888',
opaqueText: 'rgb(205,205,205)',
inverseSoftColor:'#333',
inverseSoftColorIllusion:'rgb(55,55,55)',
inverseSoftFontColor:'#e8e8e8',
inverseSoftFontColor2:'rgb(180,180,180)',
inverseSoftFontColorImportant:'#fff',
opaqueText2: 'rgb(170,170,170)',
opaqueBar: 'rgb(225,225,225)',
}
export const dark = {
body: "#222",
fontColor: "#fff",
primaryButtonBg: "#494949",
secondaryButtonBg: "rgb(225,225,225)",
navBg: "#333",
bpc: '#e8e8e8',
bsc: '#333',
scrollc:'#444',
navItems:'rgb(165,165,165)',
opaqueText: 'rgb(112,112,112)',
inverseSoftColor:'#d8d8d8',
inverseSoftColorIllusion:'#d8d8d8',
inverseSoftFontColor:'#444',
inverseSoftFontColor2:'rgb(120,120,120)',
inverseSoftFontColorImportant:'#000',
opaqueText2: 'rgb(205,205,205)',
opaqueBar: '#333',
}
export const GlobalStyles = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    *{ 
        transition: .4s all ease-in-out;
    }
    body{ 
        background-color: ${prop=>prop.theme.body};
        padding:0;
        margin:0;
        overflow-x:hidden;
    }
    p,h1,h2,h3,h4,h5,h6,ul,li,button,a{
        color:${prop=>prop.theme.fontColor};
        user-select: none;
font-family: 'Open Sans', sans-serif;
    }
    button{ 
        border:none;
        padding: 8.5px 19px 8.5px 19px;
        font-size:17px;
        border-radius: 6px;
        outline:none;
        cursor:pointer;
    }
    a{ 
        text-decoration: none;
        height:max-content;
        width:max-content;
    }
/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
        background: ${prop=>prop.theme.scrollc};
}
`
