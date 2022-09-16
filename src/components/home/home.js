import { useState,lazy } from 'react'
import { Link } from 'react-router-dom'
import * as e from './homeComponents'
import { home as tr } from '../../translations'
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
import AOS from 'aos'
import 'aos/dist/aos.css';
const Home = ( props ) =>{ 
    const [years,setYears]=useState(7)
    const [courses,setCourses]=useState(3)
    const [hours,setHours]=useState(9)
    const [loadedVid, setLoadedVid]=useState(false)
    const [selectedVidId, selectVidId] = useState(null);
const handleSelectVid = prop =>{ 
    selectVidId(prop)
}
return( 
    <View> 
        <e.HomeView data-aos='zoom-in' data-aos-offset='-600' data-aos-duration='600'>
        <e.RightView>
            <e.Vid loop alt="video" autoPlay={true} muted>
                <source alt="video" src={testwav}/>
            </e.Vid>
            <e.VidDiv>
                <e.VidTitle data-aos-offset='-400' data-aos="zoom-in-up">{tr[0].vidTitle}</e.VidTitle>
                <e.VidDesc data-aos-offset='-400' data-aos="fade-up" data-aos-delay='300'>
                    {tr[0].vidDesc}
                </e.VidDesc>
                <Link to="/proyectos" data-aos-offset='-400' data-aos='zoom-in-up' data-aos-delay='600' onClick={() => {props.setNavItemIdChecked(3); localStorage.setItem('@app/nav:itemId', 3) }}><e.VidButton>{tr[0].exploreText}</e.VidButton></Link> 
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
                         {tr[0].devText}
                    </e.LeftViewTitle>
                        <e.LeftViewDescription data-aos-delay='700' data-aos="zoom-in-left" data-aos-duration="600"><Important>{tr[0].lvdi1}</Important> {tr[0].lvd1} <Important>{tr[0].lvdi2}</Important>{tr[0].lvd2} <Important>{tr[0].lvdi3}</Important> {tr[0].lvd3} <Important>{tr[0].lvdi4}</Important> {tr[0].lvd4}</e.LeftViewDescription>
                    </e.LeftViewTitleDiv>
                <e.AboutMeDiv>
                     <e.AboutMeTitle data-aos='zoom-in-up'>{tr[0].aboutmetext}</e.AboutMeTitle>
                    <e.AboutMeDivBox data-aos="fade-right" data-aos-delay='400' data-aos-duration="600" bg="#4a4640">
                        <e.AboutMeBoxTitle>{`<${tr[0].devtext}/>`}</e.AboutMeBoxTitle>
                        <e.AboutMeBigTitle style={{marginLeft:'14px',fontSize:'21px'}}>Semi-Senior</e.AboutMeBigTitle>
                    </e.AboutMeDivBox>
                    <e.AboutMeDivBox data-aos-delay='550' data-aos="zoom-in" data-aos-duration="700" bg="#605a52">
                        <e.AboutMeBoxTitle>{`<${tr[0].codeyears}/>`}</e.AboutMeBoxTitle>
                        <e.AboutMeBigTitle>{years}+ <span style={{fontSize:'12.5px'}}>{tr[0].year}</span></e.AboutMeBigTitle>
                    </e.AboutMeDivBox>
                    <e.AboutMeDivBox data-aos="zoom-in" data-aos-delay='600' data-aos-duration="700" bg="#766f65">
                        <e.AboutMeBoxTitle>{`<${tr[0].dayactivity}/>`}</e.AboutMeBoxTitle>
                        <e.AboutMeBigTitle style={{marginLeft:'16px'}}>{hours}<span style={{fontSize:'12.5px'}}>hs</span> / 24<span style={{fontSize:'12.5px'}}>hs</span></e.AboutMeBigTitle>
                    </e.AboutMeDivBox>
                    <e.AboutMeDivBox data-aos="fade-right" data-aos-delay='750' data-aos-duration="600" bg="#978F86">
                        <e.AboutMeBoxTitle>{`<${tr[0].dictedcourses}/>`}</e.AboutMeBoxTitle>
                        <e.AboutMeBigTitle>{courses}</e.AboutMeBigTitle>
                    </e.AboutMeDivBox>
                </e.AboutMeDiv>
                <e.FrequentlyAskedDiv>
                    <e.FrequentlyAskedText data-aos='zoom-in-up'>{`<${tr[0].frequentlyasked}/>`}</e.FrequentlyAskedText>
                    <e.FrequentlyAskedBox data-aos="flip-right" data-aos-duration={800} mgleft={42} width={246} height={200} mgtop={80.5}>
                        <e.FrequenltyBoxTitleDiv>
                    <e.SmallPoint bg={"#e14c44"} mgleft="14px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#f5d827"} mgleft="35px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#58cb2e"} mgleft="55px" mgtop="14.3px"/> 
                            <e.FrequenltyAskedTitle>{tr[0].question1}</e.FrequenltyAskedTitle>
                            <e.FrequentlyAskedAnswer>
                                {tr[0].answer1}
                            </e.FrequentlyAskedAnswer>
                </e.FrequenltyBoxTitleDiv>
                    </e.FrequentlyAskedBox>

                    <e.FrequentlyAskedBox data-aos="zoom-in" data-aos-duration={800} width={327} height={250} mgtop={29.5}>
                        <e.FrequenltyBoxTitleDiv>
                    <e.SmallPoint bg={"#e14c44"} mgleft="14px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#f5d827"} mgleft="35px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#58cb2e"} mgleft="55px" mgtop="14.3px"/> 
                            <e.FrequenltyAskedTitle>{tr[0].question2}</e.FrequenltyAskedTitle>
                            <e.FrequentlyAskedAnswer>
                                {tr[0].answer2}
                            </e.FrequentlyAskedAnswer>
                </e.FrequenltyBoxTitleDiv>

                    </e.FrequentlyAskedBox>
                    <e.FrequentlyAskedBox data-aos="flip-left" data-aos-duration={800} width={244} height={200} mgtop={80}>
                        <e.FrequenltyBoxTitleDiv>
                    <e.SmallPoint bg={"#e14c44"} mgleft="14px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#f5d827"} mgleft="35px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#58cb2e"} mgleft="55px" mgtop="14.3px"/> 
                            <e.FrequenltyAskedTitle>{tr[0].question3}</e.FrequenltyAskedTitle>
                            <e.FrequentlyAskedAnswer>
                                {tr[0].answer3}
                            </e.FrequentlyAskedAnswer>
                </e.FrequenltyBoxTitleDiv>
                    </e.FrequentlyAskedBox>

                    <e.FrequentlyAskedBoxHidden>
                    <e.FrequentlyAskedBox data-aos="zoom-in" data-aos-duration={800} width={300} height={250} mgtop={29.5}>
                        <e.FrequenltyBoxTitleDiv>
                    <e.SmallPoint bg={"#e14c44"} mgleft="14px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#f5d827"} mgleft="35px" mgtop="14.3px"/> 
                    <e.SmallPoint bg={"#58cb2e"} mgleft="55px" mgtop="14.3px"/> 
                            <e.FrequenltyAskedTitle>{tr[0].question4}</e.FrequenltyAskedTitle>
                            <e.FrequentlyAskedAnswer>
                                {tr[0].answer4}
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

            <e.TecTitle data-aos='zoom-in-left'>{tr[0].rptext}</e.TecTitle>
                    <e.ViewAllDiv data-aos='zoom-in-right'>
                        <Link to="/proyectos" data-aos='zoom-in-up' onClick={() => {props.setNavItemIdChecked(3); localStorage.setItem('@app/nav:itemId', 3) }}><>
                            <box-icon name='chevron-right' color={props.theme === "light" ? "rgb(110,110,110)" : "#d8d8d8"} style={{marginTop:'-48px',transform:'scale(1.3)',verticalAlign:'top'}}></box-icon>
                    <e.ViewAllBut>{tr[0].seeptext}</e.ViewAllBut></>
                </Link>
                </e.ViewAllDiv>
            </e.TecTitleSection>
            <e.TecBoxes>
                <Link to="/proyectos" onClick={() => {props.setNavItemIdChecked(3); localStorage.setItem('@app/nav:itemId', 3) }}>
                <e.TecBox data-aos='flip-right' data-aos-duration={660}>
                        <e.Etiqueta bg={'#2DA6A8'}/>
                    <e.TecTitleBoxDiv>
                <e.TecBoxImg alt="logo inwork" src={inworklogo}/>
                <e.TecBoxTitle>inWork</e.TecBoxTitle>
</e.TecTitleBoxDiv>
                <e.TecBoxDesc>{tr[0].inworkdesc}</e.TecBoxDesc>
                    <e.TectecDiv>
                    <e.Tectec>React</e.Tectec>
                    <e.Tectec>Node.js</e.Tectec>
                    <e.Tectec>React Native</e.Tectec>
                    <e.Tectec>MySQL</e.Tectec>
                    <e.Tectec>+12 más</e.Tectec>
</e.TectecDiv>
            </e.TecBox>
</Link>
                <Link to="/proyectos" onClick={() => {props.setNavItemIdChecked(3); localStorage.setItem('@app/nav:itemId', 3) }}>
            <e.TecBoxInverse data-aos='flip-up' data-aos-delay='250' data-aos-duration={660}>
                        <e.Etiqueta bg={'#FF008D'}/>
                    <e.TecTitleBoxDiv>
                        <e.TecBoxImg style={{height:'35px', marginTop:'21px'}} alt="focus logo" src={focuslogo}/>
                        <e.TecBoxTitleInverse style={{color:'#08edd8'}}>Focus</e.TecBoxTitleInverse>
                    </e.TecTitleBoxDiv>
                <e.TecBoxDescInverse>{tr[0].focusdesc}</e.TecBoxDescInverse>
                    <e.TectecDiv>
                    <e.TectecInverse>React</e.TectecInverse>
                    <e.TectecInverse>Node.js</e.TectecInverse>
                        <e.TectecInverse>Styled Comp...</e.TectecInverse>
                    <e.TectecInverse>MySQL</e.TectecInverse>
                    <e.TectecInverse>+8 más</e.TectecInverse>
</e.TectecDiv>
            </e.TecBoxInverse>
                </Link>

                <Link to="/proyectos" onClick={() => {props.setNavItemIdChecked(3); localStorage.setItem('@app/nav:itemId', 3) }}>
            <e.TecBox  data-aos='flip-up' data-aos-delay='500' data-aos-duration={660}>
                        <e.Etiqueta bg={'#4A5587'}/>
                    <e.TecTitleBoxDiv>
                <e.TecBoxImg alt="SmallApps Logo" src={smallappslogo}/>
                        <e.TecBoxTitle style={{marginLeft:'12px'}}>Small Apps</e.TecBoxTitle>
</e.TecTitleBoxDiv>
                <e.TecBoxDesc style={{marginTop:'3px'}}>{tr[0].smallappsdesc}</e.TecBoxDesc>
                <e.TectecDiv style={{marginTop:'78px',marginLeft:'25px'}}>
                    <e.Tectec>HTML</e.Tectec>
                    <e.Tectec>CSS</e.Tectec>
                    <e.Tectec>JavaScript</e.Tectec>
                    <e.Tectec>Bootstrap</e.Tectec>
                    <e.Tectec>+3 más</e.Tectec>
</e.TectecDiv>
            </e.TecBox>
                </Link>
                <Link to="/proyectos" onClick={() => {props.setNavItemIdChecked(3); localStorage.setItem('@app/nav:itemId', 3) }}>
            <e.TecBoxInverse data-aos='flip-right' data-aos-delay='750' data-aos-duration={660}>
                        <e.Etiqueta bg={'black'}/>
                    <e.TecTitleBoxDiv>
                <e.TecBoxImg alt="evercode logo" src={evercodelogo}/>
                        <e.TecBoxTitleInverse style={{color:'#08edd8'}}>EVERCODE</e.TecBoxTitleInverse>
                    </e.TecTitleBoxDiv>
                <e.TecBoxDescInverse>{tr[0].evercodedesc}</e.TecBoxDescInverse>
                <e.TectecDiv style={{marginTop:'22px'}}>
                    <e.TectecInverse>React</e.TectecInverse>
                    <e.TectecInverse>Node.js</e.TectecInverse>
                    <e.TectecInverse>React Native</e.TectecInverse>
                    <e.TectecInverse>MySQL</e.TectecInverse>
                    <e.TectecInverse>+21 más</e.TectecInverse>
</e.TectecDiv>
            </e.TecBoxInverse>

                </Link>
</e.TecBoxes>
        </e.TecnologiesView>
        <e.TecSkillsView>
            <e.TecLeft>
                <e.TecLeftTitle data-aos='zoom-in-up' data-aos-duration={1470}>{tr[0].skillstec}</e.TecLeftTitle>
                <e.TecLeftDesc data-aos='fade-up' data-aos-delay='300' data-aos-duration={1460} style={{paddingBottom:'150px'}}>
                    {tr[0].desc1}<br/> {tr[0].desc2} <Important>{tr[0].desc3}</Important> {tr[0].desc4} <Important>{tr[0].desc5}</Important> {tr[0].desc6} <Important>{tr[0].desc7}</Important>{tr[0].desc8}
                </e.TecLeftDesc>
                <Link to="/tecnologias" data-aos='zoom-in-up' data-aos-duration={660} onClick={() => {props.setNavItemIdChecked(1); localStorage.setItem('@app/nav:itemId', 1) }}><e.ViewTecnologiesButLeft style={{marginTop:'-110px'}}>{tr[0].exploreprojectstext}</e.ViewTecnologiesButLeft></Link>
                <svg xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',bottom:'0',width:'100vw',marginLeft:'-175px', transform:'rotateY(0deg)'}} viewBox="0 0 1440 320">
                    <path fill="#00cba9" fill-opacity="10" d="M0,256L120,261.3C240,267,480,277,720,261.3C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
            </e.TecLeft>
            <e.TecRight>
                <e.TecnologiesDiv>
                    <Link data-aos='zoom-in-right' data-aos-duration={660} to="/tecnologias" onClick={() => {props.setNavItemIdChecked(1); localStorage.setItem('@app/nav:itemId', 1) }}><e.ViewTecnologiesBut>{tr[0].exploreprojectstext}<box-icon color={"#fff"} style={{verticalAlign:'middle',marginTop:'-87px',transform:'scale(.95)'}} name='right-arrow-alt' ></box-icon></e.ViewTecnologiesBut></Link>
                    <div  data-aos='zoom-in-up' data-aos-duration={600}>
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
        <br/>
        <e.ContactView data-aos-offset='100' data-aos-duration='500' data-aos='zoom-in'>
            <e.Banner src={banner}/> 
            <e.Pic src={pic}/>
            <e.LinkedinSvg src={linkedinsvg}/>
            <e.Name>Everit Jhon</e.Name>
            <e.Description>Full-Stack Developer | Description | Edit this, the contact me button and gmail button</e.Description>
            <e.ContactLinkedin>{tr[0].contactmetext}</e.ContactLinkedin>
            <e.OrDiv>
                <e.OrLine/>
                <e.Or>o</e.Or>
                <e.OrLine/>
            </e.OrDiv>
            <a href="mailto:everit@jhondev.com"><e.GmailSvg src={gmailsvg}/></a>
        </e.ContactView>
</View>
)
}
export default Home;
