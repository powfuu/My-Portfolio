import { useState, useEffect } from "react"
import * as e from "./footerComponents"
import test from '../../resources/test.png'
import { footer as tr } from '../../translations'
const Footer = (prop) =>{ 
const [ navItems ] = useState([ 
{ title: tr[0].item0, path:"/", id:0 },  
    { title: tr[0].item1, path:"/habilidades", id: 2 }, 
    { title: tr[0].item2, path:"/tecnologias", id: 1 },{ title: tr[0].item3, path:"/proyectos", id: 3 },
{ title: tr[0].item4, path:"/cursos", id: 4 }, { title: tr[0].item5, path:"/acerca-de", id: 5 },
{ title: tr[0].item6, path:"/contacto", id: 6 },
])
return( 
    <e.Footer>
        <e.Logo  alt="logo" src={test}/>
        <e.FlexViewRow style={{marginBottom:'-40px',zIndex:'1'}}>
            { navItems.map((item)=>{ 
                return( 
                    <e.ShortcutLink to={item.path} onClick={() => {prop.setNavItemIdChecked(item.id); localStorage.setItem('@app/nav:itemId', item.id) }}>{item.title}</e.ShortcutLink>
                )
            }) }
        </e.FlexViewRow>
        <e.FlexViewRow style={{marginLeft:'-6px',marginTop:'50px'}}>
            <a href="http://www.google.com" target="_blank"><box-icon style={e.BoxIconStyle} size={"35px"} name="linkedin-square" color="#168aff" type="logo"/></a>
            <a href="http://www.google.com" target="_blank"><box-icon style={e.BoxIconStyle} size={"39px"} name="youtube" color="#ff3737" type="logo"/></a>
    </e.FlexViewRow>
    <e.Derechos>Everit Jhon | 2022 © {tr[0].rights}</e.Derechos>
    <e.Privacidad>
        {tr[0].policy}
    </e.Privacidad>
    </e.Footer>
)
}
export default Footer;
