import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as e from './aboutmeComponents'
import { OrbitControls, Sky } from '@react-three/drei'
import { Important } from '../../defaultStyles'
const Lamp = React.lazy(()=>import('../../3d_modules/Lamp.js'))

const AboutMe = () =>{ 
return( 
    <e.AboutMeDiv>
        <e.AboutMeDivWindow data-aos='fade-up' data-aos-offset='-600' data-aos-duration='600'>
                    <e.Point bg="#e14c44" mgleft="23px"/>
                    <e.Point bg="#f5d827" mgleft="52px"/>
                    <e.Point bg="#58cb2e" mgleft="80px"/>
            <e.TitleView data-aos='zoom-in-right' data-aos-offset='-500' data-aos-duration='600'>
                <e.TitleViewLine/>
                <e.Title>Acerca de mí</e.Title>
            </e.TitleView>
            <e.FlexView>
                <e.Biography data-aos='zoom-in-up' data-aos-offset='-500' data-aos-duration='600' data-aos-delay='250'>
                    Hola, mi nombre es Everit Jhon, soy <Important>desarrollador</Important> de software y instructor de desarrollo, esta es mi página donde brindo <Important>información</Important> detallada de mí, de mis habilidades, herramientas que utilizo, proyectos realizados y técnologías aprendidas a lo largo de los años.<br/><br/>
                    Comenzé a interesarme en la programación desde muy niño, siempre he sido una persona muy curiosa y muy autodidacta, a mis 13 años empezé a estudiar por mi cuenta idiomas de programación como C, C++ y C#, esto me ayudó a desarrollar mi <Important>lógica</Important> a una muy corta edad, a lo largo de los años de mucho estudio de forma autodidacta y formaciones online comenzé a crear proyectos como redes sociales, o aplicaciones de diversos usos. esto me ayudo mucho a mejorar mi <Important>habilidad con tecnologías</Important> como javascript, React, PHP, jQuery, MySQL, node.js y entre otros.      
                    <br/>
                    Luego de haber desarrollado diversas páginas e aplicaciones, tuve un empleo en una empresa de instrucción pequeña localizada en Ecuador, Quito. Mi trabajo para está empresa fue desarrollar una aplicación web dónde los profesores podían crear class rooms, poner tareas/videos explicativos a sus clases, también podían evaluar a los alumnos mediante la aplicación, está aplicación fue basada en <Important>Google Class Room</Important>, y contiene sus principales carácteristicas. 
                    <br/>
                    Con el tiempo pude <Important>trabajar para diversas</Important> personas que necesitaban programadores, en el cuál pude ganar mucha experiencia y conocimientos en el desarrollo web e aplicaciones móviles.<br/>
                    <br/>
                    Me dediqué a crear proyectos personales durante un tiempo lo cuál me ayudó a perfeccionar mis <Important>hábitos</Important> y como realizaba mis proyectos, <Important>aprendí sobre herramientas de diseño</Important> como PhotoShop o GIMP, Figma y adquirí diversos conocimientos de Automatización y manejo del sistema mediante una terminal, en este caso Bash.<br/>
                    Despúes de largas investigaciones conocí más herramientas como Vim, el cual me hicieron perfeccionar mis rápidez en el ámbito de trabajo.
                    <br/><br/>
                    Luego de haber perfeccionado mis habilidades decidí en <Important>dictar clases online</Important> gratuitamente, donde podía enseñar mis conocimientos a personas interesadas. Esto me desarrollo habilidad de liderazgo y enseñanza poco a poco, hoy en día luego de haber dictado diversos cursos privados estoy trabajando en desarrollar nuevos cursos en el cuál enseña a <Important>programar con diversas tecnologías</Important>, siempre he tenido interés en enseñar.<br/>
                    <br/>
                    También me interesé en aprender <Important>inglés</Important> avanzado debido a su alta demanda y participación en el desarrollo y también <Important>alemán</Important> básico. <br/>
                    En este momento sigo aprendiendo nuevas tecnologías y maneras de mejorar como desarrollador, buscando oportunidades para crecer profesionalmente.

                </e.Biography>
                <e.D3View>
    <e.D3ModuleCanvas camera={{zoom:1, position:[75, 30, -55]}}>
        <ambientLight intensity={0.5}/>
        <pointLight position={[35,35,0]} intensity={0.4}/>
        <pointLight position={[-35,35,0]} intensity={0.4}/>
        <Lamp/>
        <OrbitControls enableZoom={false}/>
    </e.D3ModuleCanvas>
    <e.D3Text>Arrastra el mouse en el modulo 3D para mover</e.D3Text>
   </e.D3View>
        </e.FlexView>
        </e.AboutMeDivWindow>
    </e.AboutMeDiv>
)
}
export default AboutMe;
