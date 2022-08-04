import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as e from './contactComponents'
import linkedinsvg from '../../resources/linkedin.svg'
import gmailsvg from '../../resources/gmail.svg'
import banner from '../../resources/banner.png'
import pic from '../../resources/pic.png'
import { contact as tr } from '../../translations'
const Contact = () =>{ 
    const [q1State, setq1State] = useState(false)
    const [q2State, setq2State] = useState(false)
    const [q3State, setq3State] = useState(false)
    let questions = [
        {id:0, question:tr[0].question1, desc:tr[0].answer1},
        {id:1, question:tr[0].question2, desc:tr[0].answer2},
        {id:2, question:tr[0].question3, desc:tr[0].answer3}
    ]
    const handleqState = (id) =>{
        if(id === 0){
            setq1State(state=>!state)
        }else if(id === 1){
            setq2State(state=>!state)
        }else if(id === 2){
            setq3State(state=>!state)
        }
    }
return( 
    <e.ContactView>
        <e.ProfileView data-aos='zoom-in-up' data-aos-offset='-400' data-aos-duration='800'>
            <e.Banner src={banner}/>
            <e.Pic data-aos='zoom-in-up' data-aos-delay='0' data-aos-offset='-400' data-aos-duration='600' src={pic}/>
            <e.LinkedInSvg data-aos='zoom-in-left' data-aos-delay='1000' data-aos-duration='600' data-aos-offset='-400' src={linkedinsvg}/>
            <e.Name data-aos='fade-up' data-aos-duration='800' data-aos-delay='100' data-aos-offset='-400'>Everit Jhon</e.Name>
            <e.Desc data-aos='zoom-in-right' data-aos-duration='800' data-aos-delay='500' data-aos-offset='-400'>{tr[0].biography}</e.Desc>
            <e.ContactLinkedin data-aos='zoom-in' data-aos-duration='800' data-aos-delay='1000' data-aos-offset='-400'>{tr[0].contactmetext}</e.ContactLinkedin>
            <e.OrView data-aos='zoom-in-up' data-aos-duration='500' data-aos-delay='500' data-aos-offset='-400'>
                <e.OrLine/>
                <e.Or>o</e.Or>
                <e.OrLine/>
            </e.OrView> 
            <a href="mailto:everit@jhondev.com">
                <e.ContactGmail data-aos-offset='-400' data-aos='zoom-in-right' data-aos-duration='700' data-aos-delay='500' src={gmailsvg}/>
            </a>
        </e.ProfileView> 
        <e.Card data-aos='zoom-in-up' data-aos-duration='450' data-aos-offset='-180'>
        {questions.map((q)=>{
                return(
                    <e.CardQuestion onClick={()=>handleqState(q.id)} height={q.id === 0 ? q1State === true ? 128 : 60 : q.id ===1 ? q2State === true ? 128 : 60 : q.id === 2 ? q3State === true ? 128 : 60 : null}>
                        <e.Plus>{'</>'}</e.Plus>
                        <e.Question>{q.question}</e.Question>
                        <e.Answer>{q.desc}</e.Answer>
                    </e.CardQuestion> 
                )
            })}
    </e.Card>
    </e.ContactView>
)
}
export default Contact;
