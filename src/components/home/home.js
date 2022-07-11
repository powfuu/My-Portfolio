import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as e from './homeComponents'
import { Text, View, ButtonSecondary, ButtonPrimary, Important } from "../../defaultStyles"
import inworkwav from '../../resources/inworkwav.mp4'
import focuswav from '../../resources/focuswav.mp4'
import appswav from '../../resources/appswav.mp4'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
const Home = ( props ) =>{ 
    const [years,setYears]=useState(0)
    const [courses,setCourses]=useState(0)
    const [hours,setHours]=useState(0)
    const [clipPathState, setClipPathState]=useState(false)
    const [vids] = useState([
        {vid: appswav, id: 0, title:'Template Bootstrap', description:'Template para principiantes.', tec1:'HTML', tec2:'CSS',tec3:'AOS',tec4:'JavaScript',tec5:'Bootstrap',tecx:'Responsive'},{vid: inworkwav, id: 2, title: 'inWork Platform', description:'inWork es una plataforma en la cual te permite como cuenta personal buscar trabajo y comunicarte con diversas empresas, y como cuenta de empresa permite encontrar tu vacante mediante tus necesidades.',tec1:'Node.Js', tec2:'express', tec3:'bcrypt', tec4:'MySQL', tec5:'JWT', tec6:'HTML',tec7:'CSS', tec8:'jQuery', tec9:'React.Js', tec10:'React Native', tec11: 'Sweet Alert 2',  tec12: 'SCSS',tec13:'AOS',tec14:'Axios HTTP Requests',tec18:'Styled-Components',tec19:'Expo',tec15:'unDraw',tec16:'boxicons',tec17:'css.gg',tecx:'Responsive' },{vid: focuswav, id: 1, title: 'Focus Official Website', description:'Focus es una plataforma que te permite aprender & explorar y tener sesiones privadas con las personas que tu sigues en cualquier momento o lugar del mundo.', tec1:'HTML', tec2:'CSS', tec3:'JavaScript', tec4:'React.Js', tec5:'Styled-Components', tec6:'AOS',tec7:'Animate.CSS', tec8:'unDraw', tec9:'boxicons & css.gg', tecx:'Responsive'}, 
    ]);
    const [selectedVidId, selectVidId] = useState(null);
const handleSelectVid = prop =>{ 
    selectVidId(prop)
    // setClipPathState(clipPathState => !clipPathState)
}
useEffect(()=>{ 
    AOS.init();
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
})
return( 
    <View> 
    <e.HomeView>
           { selectedVidId != null ? null
            :    <e.LeftView>
                    <e.Point bg="#e14c44" mgleft="23px"/>
                    <e.Point bg="#f5d827" mgleft="52px"/>
                    <e.Point bg="#58cb2e" mgleft="80px"/>
                    <e.LeftViewTitleDiv>
                    <e.LeftViewSubTitle data-aos="zoom-in" data-aos-duration="800">Everit John</e.LeftViewSubTitle>
                    <e.LeftViewTitle data-aos="zoom-in" data-aos-duration="600">
                        Desarrollador Full-Stack
                    </e.LeftViewTitle>
                        <e.LeftViewDescription data-aos="zoom-in-left" data-aos-duration="600"><Important>Instructor</Important> de desarrollo de Software, alta experiencia en el diseño & desarrollo de paginas web e aplicaciones móviles, <Important>completamente autodidacta</Important>, me encanta la solución de problemas y <Important>aprender</Important> más cada día, también tengo <Important>conocimiento de inglés</Important> avanzado.</e.LeftViewDescription>
                    </e.LeftViewTitleDiv>
                <e.AboutMeDiv>
                     <e.AboutMeTitle>Sobre mí</e.AboutMeTitle>
                    <e.AboutMeDivBox data-aos="fade-right" data-aos-duration="600" bg="#4a4640">
                        <e.AboutMeBoxTitle>{"<Desarrollador/>"}</e.AboutMeBoxTitle>
                        <e.AboutMeBigTitle style={{marginLeft:'14px',fontSize:'22px'}}>Mid-Senior</e.AboutMeBigTitle>
                    </e.AboutMeDivBox>
                    <e.AboutMeDivBox data-aos="zoom-in" data-aos-duration="700" bg="#605a52">
                        <e.AboutMeBoxTitle>{"<Años de codigo/>"}</e.AboutMeBoxTitle>
                        <e.AboutMeBigTitle>{years}+ <span style={{fontSize:'12.5px'}}>Años</span></e.AboutMeBigTitle>
                    </e.AboutMeDivBox>
                    <e.AboutMeDivBox data-aos="zoom-in" data-aos-duration="700" bg="#766f65">
                        <e.AboutMeBoxTitle>{"<Actividad Diaria/>"}</e.AboutMeBoxTitle>
                        <e.AboutMeBigTitle style={{marginLeft:'16px'}}>{hours}<span style={{fontSize:'12.5px'}}>hs</span> / 24<span style={{fontSize:'12.5px'}}>hs</span></e.AboutMeBigTitle>
                    </e.AboutMeDivBox>
                    <e.AboutMeDivBox data-aos="fade-left" data-aos-duration="600" bg="#978F86">
                        <e.AboutMeBoxTitle>{"<Cursos Dictados/>"}</e.AboutMeBoxTitle>
                        <e.AboutMeBigTitle>{courses}</e.AboutMeBigTitle>
                    </e.AboutMeDivBox>
                </e.AboutMeDiv>
                <e.FrequentlyAskedDiv>
                    <e.FrequentlyAskedText>{"<Preguntas Frecuentes/>"}</e.FrequentlyAskedText>
                    <e.FrequentlyAskedBox data-aos="flip-right" data-aos-duration={800} mgleft={22} width={240} height={62} mgtop={71.5}>
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

                    <e.FrequentlyAskedBox data-aos="zoom-in" data-aos-duration={800} width={320} height={75} mgtop={35}>
                        <e.FrequenltyBoxTitleDiv>
                    <e.SmallPoint bg={"#e14c44"} mgleft="14px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#f5d827"} mgleft="35px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#58cb2e"} mgleft="55px" mgtop="14.3px"/> 
                            <e.FrequenltyAskedTitle>¿Programar sin título Universitario?</e.FrequenltyAskedTitle>
                            <e.FrequentlyAskedAnswer>
                                A lo largo de mi vida esta pregunta fue muy común, sin embargo con los años de experiencia & estudios me di cuenta que no es necesario un titulo universitario para tener éxito como programador, hoy en día es posible aprender software mediante internet de forma gratuita o incluso con un costo muy bajo, y poder tener mucho más conocimiento que un recién graduado dependiendo de tu dedicación.
                            </e.FrequentlyAskedAnswer>
                </e.FrequenltyBoxTitleDiv>

                    </e.FrequentlyAskedBox>
                    <e.FrequentlyAskedBox data-aos="flip-left" data-aos-duration={800} width={235} height={60} mgtop={77.25}>
                        <e.FrequenltyBoxTitleDiv>
                    <e.SmallPoint bg={"#e14c44"} mgleft="14px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#f5d827"} mgleft="35px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#58cb2e"} mgleft="55px" mgtop="14.3px"/> 
                            <e.FrequenltyAskedTitle>¿Buenos Hábitos?</e.FrequenltyAskedTitle>
                            <e.FrequentlyAskedAnswer>
                                Ser buen desarrollador consta de tener diversos hábitos, entre ellos nunca dejar de aprender, comentar & refactorizar tu código, masterizar herramientas de desarrollo como por ejemplo Vim, entre otros.   
                            </e.FrequentlyAskedAnswer>
                </e.FrequenltyBoxTitleDiv>

                    </e.FrequentlyAskedBox>
                </e.FrequentlyAskedDiv>

                </e.LeftView>
            }
        <e.VidView>
            {/*
            {selectedVidId === null ? null : <e.Linkv2 to="/proyectos" onClick={()=>{ props.setNavItemIdChecked(3) }}><e.MergeV2 style={{marginLeft:'203px',marginBottom:'-3.1px'}}><Text style={{fontSize:'14px', color: props.theme === "light" ? "#fff" : "#000"}}>Ver Proyectos</Text></e.MergeV2></e.Linkv2>}
            {selectedVidId === null ? null : <e.MergeV onClick={()=> {selectVidId(null); setClipPathState(false)}}> <i style={{ transform:'scale(1.3)', color: props.theme === "light" ? "rgb(105,105,105)" : "rgb(220,220,220)"}} class="gg-merge-vertical" ></i></e.MergeV>}

*/}
            {vids.map((vi)=>{ 
                return( 
                <> 
                    <e.Vid  alt="video" data-aos={vi.id ===1 ? "fade-in": vi.id === 0 ? "fade-in" : null} data-aos-duration="1000" clipPath={clipPathState ? "none" : vi.id===1 ? "polygon(100% 100%,0 0, 100% 0)" : vi.id === 0 ? "polygon(100% 0%, 0 0, 0% 100%)" : null} onClick={()=>handleSelectVid(vi.id)} style={vi.id === selectedVidId ? { clipPath:'none',width:'70%',border:'1px solid rgb(225,225,225)',transition:'0 all ease-in-out',cursor:'default',borderRadius:'0px', margin:'0 auto' } : clipPathState || vi.id != selectedVidId && selectedVidId !=null ? {clipPath:'none',width:'15%',borderRadius:'0',marginLeft:'-2px'} :  vi.id === 2 ? {marginLeft:'-429px',marginRight:'-621px',width:'942px'} : vi.id === 1 ? {marginLeft:'190px'} : null}  loop autoPlay muted>
                        <source src={vi.vid} type="video/mp4"/>
                    </e.Vid>
                    {
                        selectedVidId === vi.id ? <e.InfoVidView style={{height:vi.id === 2 ? '242px' : '182px',marginTop:vi.id === 2 ? '480.5px' : '541px',marginLeft: vi.id === 1 ? "542px" : vi.id === 2 ? "270px" : null}}>
                        <e.TitleInfoDiv>
                            <i class="gg-smartphone" style={{color:"white",marginTop:'20.2px'}}></i>
                            <box-icon name='desktop' color="white" style={{marginTop:'18px',marginLeft:'6.5px',marginRight:'9px'}}></box-icon>
                            <e.InfoVidTitle style={{marginBottom:'12px'}}>{vi.title}</e.InfoVidTitle>
                        </e.TitleInfoDiv>
                            <e.InfoVidDescription>
                                 {vi.description}
                            </e.InfoVidDescription>
                        <e.InfoVidTagDiv>
                             <e.InfoVidTag>{vi.tec1}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec2}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec3}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec4}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec5}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tecx}</e.InfoVidTag>
                            {vi.tec6 != null ? 
                                <>
                             <e.InfoVidTag>{vi.tec6}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec7}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec8}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec9}</e.InfoVidTag>
                                </>
                             : null}
                            {vi.tec10 != null ?  
                                <>
                             <e.InfoVidTag>{vi.tec10}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec11}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec12}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec13}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec14}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec15}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec16}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec17}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec18}</e.InfoVidTag>
                             <e.InfoVidTag>{vi.tec19}</e.InfoVidTag>
                                    </>
                             : null}
                        </e.InfoVidTagDiv>
                        
                       </e.InfoVidView> : null}
                    { selectedVidId != null ? null : <e.VidDiv cp={vi.id === 1 ? "polygon(100% 100%, 0 0, 100% 0)" : vi.id === 0 ? 'none' : null} mgleft={vi.id === 1 ? 513 : vi.id === 0 ? -0 : null} style={vi.id === 1 ? { borderRadius:'8px'} : vi.id === 0 ? {width:'49.3%'} : null} onClick={()=>handleSelectVid(vi.id)}>
                        </e.VidDiv>
                        }
            </>
                )
            })}
                </e.VidView>
    </e.HomeView>
</View>
)
}
export default Home;
