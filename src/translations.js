let lang = localStorage.getItem('@app:lang')
export const navigation = [
    lang === 'es' ?
    { 
        item0:'Inicio',
        item1:'Habilidades',
        item2:'Tecnologías',
        item3:'Proyectos',
        item4:'Cursos',
        item5:'Acerca de',
        item6:'Contacto',
        cvBut:'Descargar CV',
    } 
    : 
    { 
        item0:'Home',
        item1:'Skills',
        item2:'Technologies',
        item3:'Projects',
        item4:'Courses',
        item5:'About',
        item6:'Contact',
        cvBut:'Download CV',
    } 
]
export const footer = [
    lang === 'es' ?
    { 
        item0:'Inicio',
        item1:'Habilidades',
        item2:'Tecnologías',
        item3:'Proyectos',
        item4:'Cursos',
        item5:'Acerca de',
        item6:'Contacto',
        policy:'Políticas de Privacidad',
        rights:'Todos los derechos reservados.'
    } 
    : 
    { 
        item0:'Home',
        item1:'Skills',
        item2:'Technologies',
        item3:'Projects',
        item4:'Courses',
        item5:'About',
        item6:'Contact',
        policy:'Policy Privacy',
        rights:'All rights reserved.'
    } 
]
export const courses = [
    lang === 'es' ? 
    {
        stillWorking: 'Estoy trabajando en el desarrollo de mis cursos, date una vuelta por acá pronto!'
    }
    :
    {
        stillWorking: "I'm still working on my courses, please come here soon!"
    }
]
export const home = [
    lang === 'es' ?
    {
        vidTitle:'Explora mis Proyectos',
        vidDesc:'En este sitio web podrás conocer acerca de mí, de mis proyectos, cursos, tecnologías e habilidades.\nMi objetivo es brindar información detallada sobre mí para futuras oportunidades.',
        exploreText:'Explorar',
        devText:'Desarrollador Full-Stack',
        lvdi1:'Instructor',
        lvd1:'de desarrollo de Software, alta experiencia en el diseño & desarrollo de paginas web e aplicaciones móviles,',
        lvdi2:'completamente autodidacta',
        lvd2:' , me encanta la solución de problemas y',
        lvdi3:'aprender',
        lvd3:'más cada día, también tengo',
        lvdi4:'conocimiento de inglés',
        lvd4:'avanzado.',
        aboutmetext:'Sobre mí',
        devtext:'Desarrollador',
        year:'Años',
        codeyears:'Años de código',
        dayactivity:'Actividad Díaria',
        dictedcourses:'Cursos Dictados',
        frequentlyasked:'Preguntas Frecuentes',
        question1:'¿Por dónde Empezar?',
        question2:'¿Programar sin título Universitario?',
        question3:'¿Buenos Hábitos?',
        question4:'¿Consejos como Programador?',
        answer1:'Dependiendo la rama de desarrollo que tomes será la respuesta, independientemente de eso siempre he recomendando empezar con Python debido a que su curva de aprendizaje es rápida y más sencilla que otras.',
        answer2:'A lo largo de mi vida esta pregunta fue muy común, sin embargo con los años de experiencia & estudios me di cuenta que no es necesario un titulo universitario para tener éxito como programador, hoy en día es posible aprender software mediante internet de forma gratuita o incluso con un costo muy bajo, y poder tener mucho más conocimiento que un recién graduado dependiendo de tú dedicación.',
        answer3:'Ser buen desarrollador consta de tener diversos hábitos, entre ellos nunca dejar de aprender, comentar & refactorizar tu código, masterizar herramientas de desarrollo como por ejemplo Vim, mantener un código limpio y legíble, entre otros.',
        answer4:'Nosotros los programadores requerimos una ruta de aprendizaje muy amplia en el mundo de la tecnología, ser constante y más que tener teoría, mucha práctica, ya que eso os ayudará mucho a crecer como programador, investigar mucho, dormir bien, proponerse a realizar proyectos para armar tu propio CV, conocer diversas tecnologías, recurrir a cursos o personas con conocimientos superiores y sin duda alguna, tomarse un buen café!',
        rptext:'Proyectos Recientes',
        seeptext:'Ver Proyectos',
        inworkdesc:'La plataforma inWork es una red social dirigída al campo profesional en el cual consiste en unir una cuenta de empresa con una cuenta personal contando con sus respectivas preferencias. Como empresa podrás encontrar a tu candidato perfecto, y como personal podrás aumentar tus posibilidades de trabajo y encontrar la empresa indicada.',
        focusdesc:'La plataforma Focus se basa en una aplicación donde puedas tener sesiones privadas con diversas personas que sigues. Focus puede tener como próposito dictar/recibir clases, conocer a tus ídolos en sesiones privadas, realizar cursos de todo tipo, y entre muchos otros própositos. En focus podrás ingresar o recibir dinero como creador de contenido.',
        smallappsdesc:'Small Apps es un template landing page basado en HTML/CSS/JavaScript, fue creado para un uso gratuito por un grupo pequeño de programadores.',
        evercodedesc:'EVERCODE es un proyecto personal en el cuál me dedico a crear proyectos gratuitos/pagos para diversas personas. En el he realizado alrededor de 15+ Android  Apps sencillas con React Native y alrededor de 20+ Web Apps con React, Node.js y MySQL, también forma parte de aplicaciones personales como inWork.',
        skillstec:'Habilidades & Tecnologías',
        exploreprojectstext:'Ver Tecnologías',
        desc1:'Desarrollador Full-Stack dedicado al área de programación Web & Desarrollo de aplicaciones móviles, soy una persona con diversos conocimientos en tecnologías e habilidades personales.',
        desc2:'las principales',
        desc3:'tecnologías que utilizo frecuentemente son',
        desc4:'JavaScript y frameworks de JavaScript como React o React Native, Node.Js, MySQL, HTML & CSS, Styled Components, entre muchas otras. También utilizo',
        desc5:'herramientas',
        desc6:'que facilitan mi trabajo en el desarrollo como por ejemplo Figma para la creación de UI, o Vim para flexibilizar mi código. Uno de mis proyectos personales ha sido dictar cursos de programación, y eso me ha desarrollado una habilidad de liderazgo que crece cada día, también tengo',
        desc7:'conocimiento de inglés',
        desc8:', soy completamente autodidacta y considero que tengo una alta capacidad para la solución de problemas.',
    }
    : 
    {
        vidTitle:'Explore my Projects',
        vidDesc:`In this website you will know about me, my projects, courses, technologies and skills.\nMy objective is give you information about me for next opportunities.`,
        exploreText:'Explore',
        devText:'Full-Stack Developer',
        lvdi1:'Web Developer Instructor,',
        lvd1:'high experience in design & web development and mobile applications development,',
        lvdi2:"i'm very autodidact",
        lvd2:', i love problem solutions and',
        lvdi3:'learn',
        lvd3:'more everyday, i also have an',
        lvdi4:'advanced english',
        lvd4:'knoweldge.',
        aboutmetext:'About me',
        devtext:'Developer',
        year:'Years',
        codeyears:'Years Coding',
        dayactivity:'Daily Activity',
        dictedcourses:'Dictated Courses',
        frequentlyasked:'Frequently Asked',
        question1:'Where do i start?',
        question2:'Being Developer without a Degree?',
        question3:'Good Habits?',
        question4:'Developer Tips?',
        answer1:'Depending of the development branch you take will be the answer, but i always has recommend start with python because it is more easier than others and it has a fast learning curve.',
        answer2:'throughout my life this question has been very common, however with the years of experience & studies i realized that is not neccesary a degree. today it is possible to learn software free or with a very low cost, and have more knoweldge than a person with degree.',
        answer3:'Being a good developer const of having differents habits, one of them it is never stop learning, comment code, refactor code, master developing tools for example Vim, make the code clean and others.',
        answer4:'Being a good developer const of having differents habits, one of them it is never stop learning, comment code, refactor code, master developing tools for example Vim, make the code clean and others.',
        rptext:'Recent Projects',
        seeptext:'Explore Projects',
        rptext:'Proyectos Recientes',
        seeptext:'Ver Proyectos',
        inworkdesc:'La plataforma inWork es una red social dirigída al campo profesional en el cual consiste en unir una cuenta de empresa con una cuenta personal contando con sus respectivas preferencias. Como empresa podrás encontrar a tu candidato perfecto, y como personal podrás aumentar tus posibilidades de trabajo y encontrar la empresa indicada.',
        focusdesc:'La plataforma Focus se basa en una aplicación donde puedas tener sesiones privadas con diversas personas que sigues. Focus puede tener como próposito dictar/recibir clases, conocer a tus ídolos en sesiones privadas, realizar cursos de todo tipo, y entre muchos otros própositos. En focus podrás ingresar o recibir dinero como creador de contenido.',
        smallappsdesc:'Small Apps es un template landing page basado en HTML/CSS/JavaScript, fue creado para un uso gratuito por un grupo pequeño de programadores.',
        evercodedesc:'EVERCODE es un proyecto personal en el cuál me dedico a crear proyectos gratuitos/pagos para diversas personas. En el he realizado alrededor de 15+ Android  Apps sencillas con React Native y alrededor de 20+ Web Apps con React, Node.js y MySQL, también forma parte de aplicaciones personales como inWork.',
        skillstec:'Habilidades & Tecnologías',
        exploreprojectstext:'Ver Tecnologías',
        desc1:'Desarrollador Full-Stack dedicado al área de programación Web & Desarrollo de aplicaciones móviles, soy una persona con diversos conocimientos en tecnologías e habilidades personales.',
        desc2:'las principales',
        desc3:'tecnologías que utilizo frecuentemente son',
        desc4:'JavaScript y frameworks de JavaScript como React o React Native, Node.Js, MySQL, HTML & CSS, Styled Components, entre muchas otras. También utilizo',
        desc5:'herramientas',
        desc6:'que facilitan mi trabajo en el desarrollo como por ejemplo Figma para la creación de UI, o Vim para flexibilizar mi código. Uno de mis proyectos personales ha sido dictar cursos de programación, y eso me ha desarrollado una habilidad de liderazgo que crece cada día, también tengo',
        desc7:'conocimiento de inglés',
        desc8:', soy completamente autodidacta y considero que tengo una alta capacidad para la solución de problemas.',
    }
]
