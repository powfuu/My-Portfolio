import { useState, useEffect } from "react"
import * as e from "./footerComponents"
import test from '../../resources/test.png'
const Footer = (prop) =>{ 
const [ navItems ] = useState([ 
{ title: "Inicio", path:"/", id:0 },  
    { title: "Habilidades", path:"/habilidades", id: 2 }, 
    { title: "Tecnologías", path:"/tecnologias", id: 1 },{ title: "Proyectos", path:"/proyectos", id: 3 },
{ title: "Cursos", path:"/cursos", id: 4 }, { title: "Acerca de", path:"/acerca-de", id: 5 },
{ title: "Contacto", path:"/contacto", id: 6 },
])
return( 
    <e.Footer>
        <e.Logo  alt="logo" src={test}/>
        <e.FlexViewRow>
            { navItems.map((item)=>{ 
                return( 
                    <e.ShortcutLink to={item.path} onClick={() => {prop.setNavItemIdChecked(item.id); localStorage.setItem('@app/nav:itemId', item.id) }}>{item.title}</e.ShortcutLink>
                )
            }) }
        </e.FlexViewRow>
        <e.FlexViewRow style={{marginLeft:'-6px',marginTop:'1.2px'}}>
            <a href="http://www.google.com" target="_blank"><box-icon style={e.BoxIconStyle} size={"35px"} name="linkedin-square" color="#168aff" type="logo"/></a>
            <a href="http://www.google.com" target="_blank"><box-icon style={e.BoxIconStyle} size={"39px"} name="youtube" color="#ff3737" type="logo"/></a>
    </e.FlexViewRow>
    <e.Derechos>Everit Jhon | 2022 © Todos los derechos reservados</e.Derechos>
    <e.Privacidad>
        Políticas de Privacidad
    </e.Privacidad>
    </e.Footer>
)
}
export default Footer;
