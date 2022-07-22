import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as e from './homeComponents'
import { View, Important } from "../../defaultStyles"
import testwav from '../../resources/testwav.mp4'
import inworklogo from '../../resources/inworklogo.png'
import focuslogo from '../../resources/focuslogo.png'
import evercodelogo from '../../resources/evercodelogo.png'
import smallappslogo from '../../resources/smallappslogo.png'
import linkedinsvg from '../../resources/linkedin.svg'
import gmailsvg from '../../resources/gmail.svg'
import banner from '../../resources/banner.png'
import pic from '../../resources/pic.png'
const Home = ( props ) =>{ 
    const [years,setYears]=useState(0)
    const [courses,setCourses]=useState(0)
    const [hours,setHours]=useState(0)
    const [loadedVid, setLoadedVid]=useState(false)
    const [selectedVidId, selectVidId] = useState(null);
const handleSelectVid = prop =>{ 
    selectVidId(prop)
}
useEffect(()=>{ 
    if(hours < 9){
    setTimeout(()=>{
        if(years <= 6){
        setYears(years=>years+1)
        }
        if(hours <= 9){
        setHours(hours=>hours+1)
        }
        if(courses <= 2){
        setCourses(courses=>courses+1)
        }
    },100)   
    }
},[hours])
return( 
    <View> 
        <e.HomeView data-aos='zoom-in-up' data-aos-duration='600'>
        <e.RightView>
            <e.Vid loop alt="video" autoPlay={true} muted>
                <source alt="video" src={testwav}/>
            </e.Vid>
            <e.VidDiv>
                <e.VidTitle data-aos-offset='-400' data-aos="zoom-in-up">Explora mis Proyectos</e.VidTitle>
                <e.VidDesc data-aos-offset='-400' data-aos="fade-up" data-aos-delay='300'>En este sitio web podrás conocer acerca de mí, de mis proyectos, cursos, tecnologías e habilidades.<br/>Mi objetivo es brindar información detallada sobre mí para futuras oportunidades.</e.VidDesc>
                <Link to="/proyectos" data-aos-offset='-400' data-aos='zoom-in-up' data-aos-delay='600' onClick={() => {props.setNavItemIdChecked(3); localStorage.setItem('@app/nav:itemId', 3) }}><e.VidButton>Explorar</e.VidButton></Link> 
            </e.VidDiv>
            <e.VidPreview alt="video" loop autoPlay={true} muted>
                <source alt="video" src={testwav}/>
            </e.VidPreview>
                </e.RightView>
           { selectedVidId != null ? null
            :    <e.LeftView>
                    <e.Point bg="#e14c44" mgleft="23px"/>
                    <e.Point bg="#f5d827" mgleft="52px"/>
                    <e.Point bg="#58cb2e" mgleft="80px"/>
                    <e.LeftViewTitleDiv>
                    <e.LeftViewSubTitle data-aos="zoom-in" data-aos-duration="800" data-aos-delay='300'>Everit Jhon</e.LeftViewSubTitle>
                    <e.LeftViewTitle data-aos="zoom-in" data-aos-duration="600">
                        Desarrollador Full-Stack
                    </e.LeftViewTitle>
                        <e.LeftViewDescription data-aos-delay='700' data-aos="zoom-in-left" data-aos-duration="600"><Important>Instructor</Important> de desarrollo de Software, alta experiencia en el diseño & desarrollo de paginas web e aplicaciones móviles, <Important>completamente autodidacta</Important>, me encanta la solución de problemas y <Important>aprender</Important> más cada día, también tengo <Important>conocimiento de inglés</Important> avanzado.</e.LeftViewDescription>
                    </e.LeftViewTitleDiv>
                <e.AboutMeDiv>
                     <e.AboutMeTitle data-aos='zoom-in-up'>Sobre mí</e.AboutMeTitle>
                    <e.AboutMeDivBox data-aos="fade-right" data-aos-delay='400' data-aos-duration="600" bg="#4a4640">
                        <e.AboutMeBoxTitle>{"<Desarrollador/>"}</e.AboutMeBoxTitle>
                        <e.AboutMeBigTitle style={{marginLeft:'14px',fontSize:'21px'}}>Semi-Senior</e.AboutMeBigTitle>
                    </e.AboutMeDivBox>
                    <e.AboutMeDivBox data-aos-delay='550' data-aos="zoom-in" data-aos-duration="700" bg="#605a52">
                        <e.AboutMeBoxTitle>{"<Años de codigo/>"}</e.AboutMeBoxTitle>
                        <e.AboutMeBigTitle>{years}+ <span style={{fontSize:'12.5px'}}>Años</span></e.AboutMeBigTitle>
                    </e.AboutMeDivBox>
                    <e.AboutMeDivBox data-aos="zoom-in" data-aos-delay='600' data-aos-duration="700" bg="#766f65">
                        <e.AboutMeBoxTitle>{"<Actividad Diaria/>"}</e.AboutMeBoxTitle>
                        <e.AboutMeBigTitle style={{marginLeft:'16px'}}>{hours}<span style={{fontSize:'12.5px'}}>hs</span> / 24<span style={{fontSize:'12.5px'}}>hs</span></e.AboutMeBigTitle>
                    </e.AboutMeDivBox>
                    <e.AboutMeDivBox data-aos="fade-right" data-aos-delay='750' data-aos-duration="600" bg="#978F86">
                        <e.AboutMeBoxTitle>{"<Cursos Dictados/>"}</e.AboutMeBoxTitle>
                        <e.AboutMeBigTitle>{courses}</e.AboutMeBigTitle>
                    </e.AboutMeDivBox>
                </e.AboutMeDiv>
                <e.FrequentlyAskedDiv>
                    <e.FrequentlyAskedText data-aos='zoom-in-up'>{"<Preguntas Frecuentes/>"}</e.FrequentlyAskedText>
                    <e.FrequentlyAskedBox data-aos="flip-right" data-aos-duration={800} mgleft={42} width={246} height={60} mgtop={80.5}>
                        <e.FrequenltyBoxTitleDiv>
                    <e.SmallPoint bg={"#e14c44"} mgleft="14px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#f5d827"} mgleft="35px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#58cb2e"} mgleft="55px" mgtop="14.3px"/> 
                            <e.FrequenltyAskedTitle>¿Por dónde Empezar?</e.FrequenltyAskedTitle>
                            <e.FrequentlyAskedAnswer>
                                Dependiendo la rama de desarrollo que tomes será la respuesta, independientemente de eso siempre he recomendando empezar con Python debido a que su curva de aprendizaje es rápida y más sencilla que otras.
                            </e.FrequentlyAskedAnswer>
                </e.FrequenltyBoxTitleDiv>
                    </e.FrequentlyAskedBox>

                    <e.FrequentlyAskedBox data-aos="zoom-in" data-aos-duration={800} width={327} height={75} mgtop={29.5}>
                        <e.FrequenltyBoxTitleDiv>
                    <e.SmallPoint bg={"#e14c44"} mgleft="14px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#f5d827"} mgleft="35px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#58cb2e"} mgleft="55px" mgtop="14.3px"/> 
                            <e.FrequenltyAskedTitle>¿Programar sin título Universitario?</e.FrequenltyAskedTitle>
                            <e.FrequentlyAskedAnswer>
                                A lo largo de mi vida esta pregunta fue muy común, sin embargo con los años de experiencia & estudios me di cuenta que no es necesario un titulo universitario para tener éxito como programador, hoy en día es posible aprender software mediante internet de forma gratuita o incluso con un costo muy bajo, y poder tener mucho más conocimiento que un recién graduado dependiendo de tú dedicación.
                            </e.FrequentlyAskedAnswer>
                </e.FrequenltyBoxTitleDiv>

                    </e.FrequentlyAskedBox>
                    <e.FrequentlyAskedBox data-aos="flip-left" data-aos-duration={800} width={244} height={60} mgtop={80}>
                        <e.FrequenltyBoxTitleDiv>
                    <e.SmallPoint bg={"#e14c44"} mgleft="14px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#f5d827"} mgleft="35px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#58cb2e"} mgleft="55px" mgtop="14.3px"/> 
                            <e.FrequenltyAskedTitle>¿Buenos Hábitos?</e.FrequenltyAskedTitle>
                            <e.FrequentlyAskedAnswer>
                                Ser buen desarrollador consta de tener diversos hábitos, entre ellos nunca dejar de aprender, comentar & refactorizar tu código, masterizar herramientas de desarrollo como por ejemplo Vim, mantener un código limpio y legíble, entre otros.   
                            </e.FrequentlyAskedAnswer>
                </e.FrequenltyBoxTitleDiv>
                    </e.FrequentlyAskedBox>

                    <e.FrequentlyAskedBoxHidden>
                    <e.FrequentlyAskedBox data-aos="zoom-in" data-aos-duration={800} width={300} height={75} mgtop={29.5}>
                        <e.FrequenltyBoxTitleDiv>
                    <e.SmallPoint bg={"#e14c44"} mgleft="14px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#f5d827"} mgleft="35px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#58cb2e"} mgleft="55px" mgtop="14.3px"/> 
                            <e.FrequenltyAskedTitle>¿Consejos como Programador?</e.FrequenltyAskedTitle>
                            <e.FrequentlyAskedAnswer>
                                Nosotros los programadores requerimos una ruta de aprendizaje muy amplia en el mundo de la tecnología, ser constante y más que tener teoría, mucha práctica, ya que eso os ayudará mucho a crecer como programador, investigar mucho, dormir bien, proponerse a realizar proyectos para armar tu propio CV, conocer diversas tecnologías, recurrir a cursos o personas con conocimientos superiores y sin duda alguna, tomarse un buen café! 
                            </e.FrequentlyAskedAnswer>
                </e.FrequenltyBoxTitleDiv>
                    </e.FrequentlyAskedBox>
</e.FrequentlyAskedBoxHidden>
                </e.FrequentlyAskedDiv>
                </e.LeftView>
            }
                </e.HomeView>
        <e.TecnologiesView>
            <e.TecTitleSection>

            <e.TecTitle data-aos='zoom-in-left'>Proyectos Recientes</e.TecTitle>
                    <e.ViewAllDiv data-aos='zoom-in-right'>
                        <Link to="/proyectos" data-aos='zoom-in-up' onClick={() => {props.setNavItemIdChecked(3); localStorage.setItem('@app/nav:itemId', 3) }}><>
                            <box-icon name='chevron-right' color={props.theme === "light" ? "rgb(110,110,110)" : "#d8d8d8"} style={{marginTop:'6px',transform:'scale(1.3)',verticalAlign:'top'}}></box-icon>
                    <e.ViewAllBut>Ver Proyectos</e.ViewAllBut></>
                </Link>
                </e.ViewAllDiv>
            </e.TecTitleSection>
            <e.TecBoxes>
                <e.TecBox data-aos='flip-right' data-aos-duration={660}>
                    <e.TecTitleBoxDiv>
                <e.TecBoxImg alt="logo inwork" src={inworklogo}/>
                <e.TecBoxTitle>inWork</e.TecBoxTitle>
</e.TecTitleBoxDiv>
                <e.TecBoxDesc>La plataforma inWork es una red social dirigída al campo profesional en el cual consiste en unir una cuenta de empresa con una cuenta personal contando con sus respectivas preferencias. Como empresa podrás encontrar a tu candidato perfecto, y como personal podrás aumentar tus posibilidades de trabajo y encontrar la empresa indicada.</e.TecBoxDesc>
                    <e.TectecDiv>
                    <e.Tectec>React</e.Tectec>
                    <e.Tectec>Node.js</e.Tectec>
                    <e.Tectec>React Native</e.Tectec>
                    <e.Tectec>MySQL</e.Tectec>
                    <e.Tectec>+12 más</e.Tectec>
</e.TectecDiv>
            </e.TecBox>
            <e.TecBoxInverse data-aos='flip-up' data-aos-delay='250' data-aos-duration={660}>
                    <e.TecTitleBoxDiv>
                        <e.TecBoxImg style={{height:'35px', marginTop:'21px'}} alt="focus logo" src={focuslogo}/>
                        <e.TecBoxTitleInverse style={{color:'#08edd8'}}>Focus</e.TecBoxTitleInverse>
                    </e.TecTitleBoxDiv>
                <e.TecBoxDescInverse>La plataforma Focus se basa en una aplicación donde puedas tener sesiones privadas con diversas personas que sigues. Focus puede tener como próposito dictar/recibir clases, conocer a tus ídolos en sesiones privadas, realizar cursos de todo tipo, y entre muchos otros própositos. En focus podrás ingresar o recibir dinero como creador de contenido.</e.TecBoxDescInverse>
                    <e.TectecDiv>
                    <e.TectecInverse>React</e.TectecInverse>
                    <e.TectecInverse>Node.js</e.TectecInverse>
                        <e.TectecInverse>Styled Comp...</e.TectecInverse>
                    <e.TectecInverse>MySQL</e.TectecInverse>
                    <e.TectecInverse>+8 más</e.TectecInverse>
</e.TectecDiv>
            </e.TecBoxInverse>
            <e.TecBox data-aos='flip-up' data-aos-delay='500' data-aos-duration={660}>
                    <e.TecTitleBoxDiv>
                <e.TecBoxImg alt="SmallApps Logo" src={smallappslogo}/>
                        <e.TecBoxTitle style={{marginLeft:'12px'}}>Small Apps</e.TecBoxTitle>
</e.TecTitleBoxDiv>
                <e.TecBoxDesc style={{marginTop:'3px'}}>Small Apps es un template landing page basado en HTML/CSS/JavaScript, fue creado para un uso gratuito por un grupo pequeño de programadores.</e.TecBoxDesc>
                <e.TectecDiv style={{marginTop:'78px',marginLeft:'25px'}}>
                    <e.Tectec>HTML</e.Tectec>
                    <e.Tectec>CSS</e.Tectec>
                    <e.Tectec>JavaScript</e.Tectec>
                    <e.Tectec>Bootstrap</e.Tectec>
                    <e.Tectec>+3 más</e.Tectec>
</e.TectecDiv>
            </e.TecBox>
            <e.TecBoxInverse data-aos='flip-right' data-aos-delay='750' data-aos-duration={660}>
                    <e.TecTitleBoxDiv>
                <e.TecBoxImg alt="evercode logo" src={evercodelogo}/>
                        <e.TecBoxTitleInverse style={{color:'#08edd8'}}>EVERCODE</e.TecBoxTitleInverse>
                    </e.TecTitleBoxDiv>
                <e.TecBoxDescInverse>EVERCODE es un proyecto personal en el cuál me dedico a crear proyectos gratuitos/pagos para diversas personas. En el he realizado alrededor de 15+ Android  Apps sencillas con React Native y alrededor de 20+ Web Apps con React, Node.js y MySQL, también forma parte de aplicaciones personales como inWork. </e.TecBoxDescInverse>
                <e.TectecDiv style={{marginTop:'22px'}}>
                    <e.TectecInverse>React</e.TectecInverse>
                    <e.TectecInverse>Node.js</e.TectecInverse>
                    <e.TectecInverse>React Native</e.TectecInverse>
                    <e.TectecInverse>MySQL</e.TectecInverse>
                    <e.TectecInverse>+21 más</e.TectecInverse>
</e.TectecDiv>
            </e.TecBoxInverse>
</e.TecBoxes>
        </e.TecnologiesView>
        <e.TecSkillsView>
            <e.TecLeft>
                <e.TecLeftTitle data-aos='zoom-in-up' data-aos-duration={1470}>Habilidades & Tecnologías</e.TecLeftTitle>
                <e.TecLeftDesc data-aos='fade-up' data-aos-delay='300' data-aos-duration={1460}>
                    Desarrollador Full-Stack dedicado al área de programación Web & Desarrollo de aplicaciones móviles, soy una persona con diversos conocimientos en tecnologías e habilidades personales.<br/> las principales tecnologías que utilizo frecuentemente son JavaScript y frameworks de JavaScript como React o React Native, Node.Js, MySQL, HTML & CSS, Styled Components, entre muchas otras. También utilizo herramientas que facilitan mi trabajo en el desarrollo como por ejemplo Figma para la creación de UI, o Vim para flexibilizar mi código. Uno de mis proyectos personales ha sido dictar cursos de programación, y eso me ha desarrollado una habilidad de liderazgo que crece cada día, también tengo conocimiento de inglés, soy completamente autodidacta y considero que tengo una alta capacidad para la solución de problemas.
                </e.TecLeftDesc>
                <Link to="/tecnologias" data-aos='zoom-in-up' data-aos-duration={660} onClick={() => {props.setNavItemIdChecked(1); localStorage.setItem('@app/nav:itemId', 1) }}><e.ViewTecnologiesButLeft>Ver Tecnologías</e.ViewTecnologiesButLeft></Link>
<svg xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',bottom:'0',width:'100vw',marginLeft:'-175px', transform:'rotateY(0deg)'}} viewBox="0 0 1440 320">
  <path fill="#00cba9" fill-opacity="10" d="M0,256L120,261.3C240,267,480,277,720,261.3C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
            </e.TecLeft>
            <e.TecRight>
                <e.TecnologiesDiv>
                    <Link data-aos='zoom-in-right' data-aos-duration={660} to="/tecnologias" onClick={() => {props.setNavItemIdChecked(1); localStorage.setItem('@app/nav:itemId', 1) }}><e.ViewTecnologiesBut>Ver Tecnologías <box-icon color={"#fff"} style={{verticalAlign:'middle',marginTop:'-4px',transform:'scale(.95)'}} name='right-arrow-alt' ></box-icon></e.ViewTecnologiesBut></Link>
                    <div data-aos='zoom-in-up' data-aos-duration={600}>
                        <box-icon  id='box-icon-first' type='logo' name='javascript' style={{transform:'scale(2.7)',marginRight:'60px',marginBottom:'65px',marginLeft:'166px'}} color={'gold'}></box-icon><br/>
                    <box-icon id='box-icon-second' name='react' type='logo' style={{transform:'scale(2.7)',marginRight:'60px',marginBottom:'65px',marginLeft:'84px'}} color={'dodgerblue'}></box-icon>

<box-icon id='box-icon-second' name='nodejs' type='logo' style={{transform:'scale(2.7)',marginRight:'60px',marginBottom:'65px'}} color={'green'}></box-icon>

<box-icon name='php' id='box-icon-second' type='logo' style={{transform:'scale(2.7)',marginRight:'60px',marginBottom:'65px'}} color={'dodgerblue'}></box-icon>
                    <br/>

<box-icon name='html5' id='box-icon-third' type='logo' style={{transform:'scale(2.7)',marginRight:'60px',marginBottom:'65px'}} color={'#e45c00'} ></box-icon>
                    <box-icon name='jquery' id='box-icon-third' type='logo' style={{transform:'scale(2.7)',marginRight:'60px',marginBottom:'65px'}} color={'#888'}></box-icon>

<box-icon name='css3' id='box-icon-third' type='logo' style={{transform:'scale(2.7)',marginRight:'60px',marginBottom:'65px'}} color={'dodgerblue'}></box-icon>
<box-icon name='github' id='box-icon-third' type='logo' style={{transform:'scale(2.7)',marginRight:'60px',marginBottom:'65px'}} color={'#000'}></box-icon>
                    <box-icon id='box-icon-third' name='data' type='solid' style={{transform:'scale(2.7)',marginRight:'60px',marginBottom:'65px'}} color={'rgb(240,240,240)'}></box-icon>

                    </div>
</e.TecnologiesDiv>
            </e.TecRight>
        </e.TecSkillsView>
        <e.ContactView data-aos-offset='100' data-aos-duration='500' data-aos='zoom-in'>
            <e.Banner src={banner}/> 
            <e.Pic src={pic}/>
            <e.LinkedinSvg src={linkedinsvg}/>
            <e.Name>Everit Jhon</e.Name>
            <e.Description>Full-Stack Developer | Description | Edit this, the contact me button and gmail button</e.Description>
            <e.ContactLinkedin>Contáctame en LinkedIn</e.ContactLinkedin>
            <e.OrDiv>
                <e.OrLine/>
                <e.Or>o</e.Or>
                <e.OrLine/>
            </e.OrDiv>
            <e.GmailSvg src={gmailsvg}/>
        </e.ContactView>
</View>
)
}
export default Home;
