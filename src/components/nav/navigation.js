import test from '../../resources/test.png'
import { useState, useEffect } from "react" 
import { View, ButtonSecondary } from "../../defaultStyles"
import * as e from './navigationComponents'
import { Link } from "react-router-dom"

const Navigation = (prop) =>{
const [ navItems ] = useState([ 
{ title: "Inicio", path:"/", id:0 }, { title: "Tecnologías", path:"/tecnologias", id: 1 }, 
{ title: "Habilidades", path:"/habilidades", id: 2 }, { title: "Proyectos", path:"/proyectos", id: 3 },
{ title: "Cursos", path:"/cursos", id: 4 }, { title: "Acerca de", path:"/acerca-de", id: 5 },
{ title: "Contacto", path:"/contacto", id: 6 },
])

const themeToggler = () => {
if(prop.theme === "light"){
    prop.setTheme("dark");
    localStorage.setItem("@app:theme", "dark");
}else if(prop.theme === "dark"){
    prop.setTheme("light");
    localStorage.setItem("@app:theme", "light");
}
}
    return ( 
        <e.Nav>
            <e.Logo src={test}/>
            <e.NavItems> 
                {navItems.map((item,KEY)=>{ 
                    return( 
                        <View key={KEY}>
                            {prop.navItemIdChecked == item.id ? <e.ItemWithoutEffect style={{paddingBottom: '14px'}}>{item.title}</e.ItemWithoutEffect> : <Link onClick={() => {prop.setNavItemIdChecked(item.id); localStorage.setItem('@app/nav:itemId', item.id);  }} to={item.path} style={{cursor:'default'}}><e.Item>{item.title}</e.Item></Link> }
                </View>
                    )
                })}
            </e.NavItems>
            <View>
            {prop.theme === "light" ? 
        <e.ToggleTheme pr={12} pl={3} bbrr={5} bblr={20} bg={'rgb(230,230,230)'} onClick={themeToggler}><e.ThemeModeView bg={'white'}><i className="gg-sun" style={e.moon}></i></e.ThemeModeView> <e.ToggleThemeText>Light</e.ToggleThemeText></e.ToggleTheme>
            : <e.ToggleTheme bblr={5} bbrr={20} bg={'#242424'} pl={12} pr={2} onClick={themeToggler} ><e.ToggleThemeText style={{paddingRight:'6px'}}>Dark</e.ToggleThemeText><e.ThemeModeView bg={'rgb(230,230,230)'}><i className="gg-moon" style={e.sun}></i></e.ThemeModeView></e.ToggleTheme>}
            <ButtonSecondary style={e.downloadCvStyle}>Descargar CV</ButtonSecondary>
    </View>
        </e.Nav>
    )
}
export default Navigation;
