let lang = localStorage.getItem("@app:lang");
export const navigation = [
    lang === "es"
        ? {
              item0: "Inicio",
              item1: "Habilidades",
              item2: "Tecnologías",
              item3: "Proyectos",
              item4: "Cursos",
              item5: "Acerca de",
              item6: "Contacto",
              cvBut: "Descargar CV",
          }
        : {
              item0: "Home",
              item1: "Skills",
              item2: "Technologies",
              item3: "Projects",
              item4: "Courses",
              item5: "About",
              item6: "Contact",
              cvBut: "Download CV",
          },
];
export const footer = [
    lang === "es"
        ? {
              item0: "Inicio",
              item1: "Habilidades",
              item2: "Tecnologías",
              item3: "Proyectos",
              item4: "Cursos",
              item5: "Acerca de",
              item6: "Contacto",
              rights: "Todos los derechos reservados.",
          }
        : {
              item0: "Home",
              item1: "Skills",
              item2: "Technologies",
              item3: "Projects",
              item4: "Courses",
              item5: "About",
              item6: "Contact",
              rights: "All rights reserved.",
          },
];
export const courses = [
    lang === "es"
        ? {
              stillWorking:
                  "Estoy trabajando en el desarrollo de mis cursos, date una vuelta por acá pronto!",
          }
        : {
              stillWorking:
                  "I'm still working on my courses, please come here soon!",
          },
];
export const home = [
    lang === "es"
        ? {
              vidTitle: "Explora mis Proyectos",
              vidDesc:
                  "En este sitio web podrás conocer acerca de mí, de mis proyectos, cursos, tecnologías e habilidades.\nMi objetivo es brindar información detallada sobre mí para futuras oportunidades.",
              exploreText: "Explorar",
              devText: "Desarrollador Full-Stack",
              lvdi1: "Instructor",
              lvd1: "de desarrollo de Software, alta experiencia en el diseño & desarrollo de paginas web e aplicaciones móviles,",
              lvdi2: "completamente autodidacta",
              lvd2: " , me encanta la solución de problemas y",
              lvdi3: "aprender",
              lvd3: "más cada día, también tengo",
              lvdi4: "conocimiento de inglés",
              lvd4: "avanzado.",
              aboutmetext: "Sobre mí",
              devtext: "Desarrollador",
              year: "Años",
              codeyears: "Años de código",
              dayactivity: "Actividad Díaria",
              dictedcourses: "Cursos Dictados",
              frequentlyasked: "Preguntas Frecuentes",
              question1: "¿Por dónde Empezar?",
              question2: "¿Programar sin título Universitario?",
              question3: "¿Buenos Hábitos?",
              question4: "¿Consejos como Programador?",
              answer1:
                  "Dependiendo la rama de desarrollo que tomes será la respuesta, independientemente de eso siempre he recomendando empezar con Python debido a que su curva de aprendizaje es rápida y más sencilla que otras.",
              answer2:
                  "A lo largo de mi vida esta pregunta fue muy común, sin embargo con los años de experiencia & estudios me di cuenta que no es necesario un titulo universitario para tener éxito como programador, hoy en día es posible aprender software mediante internet de forma gratuita o incluso con un costo muy bajo, y poder tener mucho más conocimiento que un recién graduado dependiendo de tú dedicación.",
              answer3:
                  "Ser buen desarrollador consta de tener diversos hábitos, entre ellos nunca dejar de aprender, comentar & refactorizar tu código, masterizar herramientas de desarrollo como por ejemplo Vim, mantener un código limpio y legíble, entre otros.",
              answer4:
                  "Nosotros los programadores requerimos una ruta de aprendizaje muy amplia en el mundo de la tecnología, ser constante y más que tener teoría, mucha práctica, ya que eso os ayudará mucho a crecer como programador, investigar mucho, dormir bien, proponerse a realizar proyectos para armar tu propio CV, conocer diversas tecnologías, recurrir a cursos o personas con conocimientos superiores y sin duda alguna, tomarse un buen café!",
              rptext: "Proyectos Recientes",
              seeptext: "Ver Proyectos",
              inworkdesc:
                  "La plataforma inWork es una red social dirigída al campo profesional en el cual consiste en unir una cuenta de empresa con una cuenta personal contando con sus respectivas preferencias. Como empresa podrás encontrar a tu candidato perfecto, y como personal podrás aumentar tus posibilidades de trabajo y encontrar la empresa indicada.",
              focusdesc:
                  "La plataforma Focus se basa en una aplicación donde puedas tener sesiones privadas con diversas personas que sigues. Focus puede tener como próposito dictar/recibir clases, conocer a tus ídolos en sesiones privadas, realizar cursos de todo tipo, y entre muchos otros própositos. En focus podrás ingresar o recibir dinero como creador de contenido.",
              smallappsdesc:
                  "Small Apps es un template landing page basado en HTML/CSS/JavaScript, fue creado para un uso gratuito por un grupo pequeño de programadores.",
              evercodedesc:
                  "EVERCODE es un proyecto personal en el cuál me dedico a crear proyectos gratuitos/pagos para diversas personas. En el he realizado alrededor de 15+ Android  Apps sencillas con React Native y alrededor de 20+ Web Apps con React, Node.js y MySQL, también forma parte de aplicaciones personales como inWork.",
              skillstec: "Habilidades & Tecnologías",
              exploreprojectstext: "Ver Tecnologías",
              desc1: "Desarrollador Full-Stack dedicado al área de programación Web & Desarrollo de aplicaciones móviles, soy una persona con diversos conocimientos en tecnologías e habilidades personales.",
              desc2: "las principales",
              desc3: "tecnologías que utilizo frecuentemente son",
              desc4: "JavaScript y frameworks de JavaScript como React o React Native, Node.Js, MySQL, HTML & CSS, Styled Components, entre muchas otras. También utilizo",
              desc5: "herramientas",
              desc6: "que facilitan mi trabajo en el desarrollo como por ejemplo Figma para la creación de UI, o Vim para flexibilizar mi código. Uno de mis proyectos personales ha sido dictar cursos de programación, y eso me ha desarrollado una habilidad de liderazgo que crece cada día, también tengo",
              desc7: "conocimiento de inglés",
              desc8: ", soy completamente autodidacta y considero que tengo una alta capacidad para la solución de problemas.",
              contactmetext: "Contáctame",
              biography: "Full-Stack Developer | Descripcion | Editar aqui",
          }
        : {
              vidTitle: "Explore my Projects",
              vidDesc: `In this website you will know about me, my projects, courses, technologies and skills.\nMy objective is provide detailed information about me for next opportunities.`,
              exploreText: "Explore",
              devText: "Full-Stack Developer",
              lvdi1: "Web Developer Instructor,",
              lvd1: "high experience in design & web development and mobile applications development,",
              lvdi2: "i'm very autodidact",
              lvd2: ", i love problem solutions and",
              lvdi3: "learn",
              lvd3: "more everyday, i also have an",
              lvdi4: "advanced english",
              lvd4: "knoweldge.",
              aboutmetext: "About me",
              devtext: "Developer",
              year: "Years",
              codeyears: "Years Coding",
              dayactivity: "Daily Activity",
              dictedcourses: "Dictated Courses",
              frequentlyasked: "Frequently Asked",
              question1: "Where do i start?",
              question2: "Being Developer without a Degree?",
              question3: "Good Habits?",
              question4: "Developer Tips?",
              answer1:
                  "Depending of the development branch you take will be the answer, but i always has recommend start with python because it is more easier than others and it has a fast learning curve.",
              answer2:
                  "throughout my life this question has been very common, however with the years of experience & studies i realized that is not neccesary a degree. today it is possible to learn software free or with a very low cost, and have more knoweldge than a person with degree.",
              answer3:
                  "Being a good developer const of having differents habits, one of them it is never stop learning, comment code, refactor code, master developing tools for example Vim, make the code clean and others.",
              answer4:
                  "Being a good developer const of having differents habits, one of them it is never stop learning, comment code, refactor code, master developing tools for example Vim, make the code clean and others.",
              rptext: "Recent Projects",
              seeptext: "Explore Projects",
              rptext: "Recent Projects",
              seeptext: "Explore Projects",
              inworkdesc:
                  "inWork platform is a social network which it consist in join a business account with a personal account based in their preferences. As a business Account you will find your perfect vacant and as a personal account you will improve your opportunities and find the perfect work",
              focusdesc:
                  "Focus platform is an web application where you will have the opportunitie to know people you follow. Focus can be used for teaching or receiving classes, know your most loved artists in private sessions, teach about some courses of all types, and including a lot more things you can do. In Focus you insert money to pay the sessions and recceive money as a content creator.",
              smallappsdesc:
                  "Small Apps is a web landing page based in HTML/CSS/JavaScript, was created for a small group of developers.",
              evercodedesc:
                  "EVERCODE is a personal project, in this project i decided to create web applications and mobile applications to any person who need it without any cost. i improve my skills a lot with React Native, React, Node.Js, MySQL, inWork platform counts too as a project from EVERCODE.",
              skillstec: "Skills & Technologies",
              exploreprojectstext: "Explore Technologies",
              desc1: "Full-Stack Developer i have multiples knoweldge in technologies and personal skills.",
              desc2: "the main",
              desc3: "technologies that i use frequently are",
              desc4: "JavaScript and JavaScript Frameworks such as React and React Native, Node.Js, MySQL, HTML & CSS, Styled Components, and others. i also use",
              desc5: "tools",
              desc6: "that make my work easier, for example Figma for UI creation, or Vim to make more flexible my coding. one of my personal projects has been teach some courses of web development, and that has increase my leadership skill, i also have",
              desc7: "advanced english knoweldge",
              desc8: ", i am a very autodidact and i think i have a high capacity of problem solutions.",
              contactmetext: "Contact Me",
              biography: "Full-Stack Developer | Description | Edit Here",
          },
];
export const skills = [
    lang === "es"
        ? {
              toolstext: "Herramientas",
              skillstext: "Habilidades",
              question1: "<Por qué utilizo Figma/>",
              question2: "<Por qué utilizo GIMP & Photoshop/>",
              question3: "<Por qué utilizo Vim/>",
              question4: "<Por qué utilizo Bash/>",
              answer1:
                  "Utilizo figma para crear diseños de mis web apps o aplicaciones móviles, me permite ahorrar tiempo y realizar diseños con más fácilidad.",
              answer2:
                  "GIMP & Photoshop me permiten realizar ediciones o creaciones de iconos o imagenes.",
              answer3:
                  "Utilizo Vim para flexibilizar mi trabajo, está herramienta me permite ser mucho más rápido & eficaz a la hora de escribir código.",
              answer4:
                  "Bash me permite controlar el sistema mediante la consola, esto me permite ser más rápido a la hora de crear/editar/buscar archivos o directorios.",
              title1: "Inglés Avanzado",
              title2: "100% Autodidacta",
              title3: "100% Responsive",
              title4: "Gran Analísis & lógica y solución de problemas",
              title5: "Aprendizaje Rápido",
              title7: "Desarrollo Web",
              title6: "Metodología SCRUM",
              title8: "Desarrollo Móvil",
              title9: "Habilidad en Diseño",
          }
        : {
              toolstext: "Tools",
              skillstext: "Skills",
              question1: "<Why do i use Figma/>",
              question2: "<Why do i use GIMP & PhotoShop/>",
              question3: "<Why do i use Vim/>",
              question4: "<Why do i use Bash/>",
              answer1:
                  "I use figma for creating UI for my web applications or mobile applications, this tool helps me saving time and creating designs in a more easier way.",
              answer2:
                  "GIMP & PhotoShop allows me to create or edit icons or images for my projects.",
              answer3:
                  "I use vim because it makes my work flexible, this tool allows me to being more faster when i am writting code.",
              answer4:
                  "Bash allows me to control the system with the terminal, this makes me more faster when i need to create, edit or search for files or directories.",
              title1: "Advanced English",
              title2: "100% Autodidact",
              title3: "100% Responsive",
              title4: "High analisis & logic and problem solutions",
              title5: "Fast learning",
              title6: "SCRUM methodology",
              title7: "Web development",
              title8: "Mobile development",
              title9: "Designer skills",
          },
];
export const technologies = [
    lang === "es"
        ? {
              level: "Nivel",
              basic: "Básico",
              intermediate: "Intermedio",
              advanced: "Avanzado",
              d3movetext: "Arrastra el mouse en el modulo 3D para mover",
          }
        : {
              level: "Level",
              basic: "Basic",
              intermediate: "Intermediate",
              advanced: "Advanced",
              d3movetext: "Drag the mouse in the 3d module to move",
          },
];
export const contact = [
    lang === "es"
        ? {
              contactmetext: "Contáctame en LinkedIn",
              biography: "Full-Stack Developer | Descripcion | Editar aqui",
              question1: "¿Alternativas de contacto como Número/WhatsApp?",
              question2: "¿Cuánto demoro en responder?",
              question3: "¿Próposito de contacto?",
              answer1:
                  "Mi Número de télefono está agregado en la sección de Contacto en mi CV, sientete libre de llamarme o escribirme cuándo desees!",
              answer2:
                  "Suelo responder en un periodo de tiempo corto, LinkedIn o WhatsApp rápido y gmail entre 4 a 24 horas.",
              answer3:
                  "Solo respondo emails/mensajes relacionados con trabajo e oportunidades laborales.",
          }
        : {
              contactmetext: "Contact me on LinkedIn",
              biography: "Full-Stack Developer | Description | Edit Here",
              question1: "Contact alternatives?",
              question2: "How long it takes me to reply?",
              question3: "Contact Propouse?",
              answer1:
                  "My phone number is added in the Contact Section in my CV, feel free to call me or sending me a message when you want!",
              answer2:
                  "I usually reply in a short time lapse, LinkedIn or WhatsApp is fast and gmail it takes me to reply around 4 to 24 hours.",
              answer3:
                  "I only reply emails/messages related with work or job opportunities.",
          },
];
export const aboutme = [
    lang === "es"
        ? {
              aboutmetext: "Acerca de mí",
              d3movetext: "Arrastra el mouse en el modulo 3D para mover",
              am1: "Hola, mi nombre es Everit Jhon, soy",
              am2: "Desarrollador",
              am3: "de software y instructor de desarrollo, esta es mi página donde brindo",
              am4: "información detallada de mí, de mis habilidades, herramientas que utilizo, proyectos realizados y técnologías aprendidas a lo largo de los años",
              am5: "Comenzé a interesarme en la programación desde muy niño, siempre he sido una persona muy curiosa y muy autodidacta, a mis 13 años empezé a estudiar por mi cuenta idiomas de programación como C, C++ y C#, esto me ayudó a desarrollar mi",
              am6: "lógica",
              am7: "a una muy corta edad, a lo largo de los años de mucho estudio de forma autodidacta y formaciones online comenzé a crear proyectos como redes sociales, o aplicaciones de diversos usos. esto me ayudo mucho a mejorar mi",
              am8: "habilidad con tecnologías",
              am9: "como javascript, React, Angular, PHP, jQuery, MySQL, node.js y entre otros.",
              am10: "Luego de haber desarrollado diversas páginas e aplicaciones, tuve un empleo en una empresa de instrucción pequeña localizada en Ecuador, Quito. Mi trabajo para está empresa fue desarrollar una aplicación web dónde los profesores podían crear class rooms, poner tareas/videos explicativos a sus clases, también podían evaluar a los alumnos mediante la aplicación, está aplicación fue basada en",
              am11: "Google Class Room",
              am12: ", y contiene sus principales carácteristicas.",
              am13: "Con el tiempo pude",
              am14: "trabajar para diversas",
              am15: "personas que necesitaban programadores, en el cuál pude ganar mucha experiencia y conocimientos en el desarrollo web e aplicaciones móviles.",
              am16: "Me dediqué a crear proyectos personales durante un tiempo lo cuál me ayudó a perfeccionar mis",
              am17: "hábitos",
              am18: "y como realizaba mis proyectos,",
              am19: "aprendí sobre herramientas de diseño",
              am20: "como PhotoShop o GIMP, Figma",
              am21: "y adquirí diversos conocimientos de Automatización y manejo del sistema mediante una terminal, en este caso Bash.",
              am22: "Despúes de largas investigaciones conocí más herramientas como Vim, el cual me hicieron perfeccionar mis rápidez en el ámbito de trabajo.",
              am23: "Luego de haber perfeccionado mis habilidades decidí en",
              am24: "dictar clases online",
              am25: "gratuitamente, donde podía enseñar mis conocimientos a personas interesadas. Esto me desarrollo habilidad de liderazgo y enseñanza poco a poco, hoy en día luego de haber dictado diversos cursos privados estoy trabajando en desarrollar nuevos cursos en el cuál enseña a",
              am26: "programar con diversas tecnologías",
              am27: ", siempre he tenido interés en enseñar.",
              am28: "También me interesé en aprender",
              am29: "inglés",
              am30: "avanzado debido a su alta demanda y participación en el desarrollo y también decidí aprender sobre",
              am31: "alemán",
              am32: "básico.",
              am33: "En este momento sigo aprendiendo nuevas tecnologías y maneras de mejorar como desarrollador, también me encuentro en una busqueda de oportunidades para crecer profesionalmente.",
          }
        : {
              aboutmetext: "About Me",
              d3movetext: "Drag the mouse in the 3d module to move",
              am1: "Hello my name is Everit Jhon, i am a",
              am2: "Software Developer",
              am3: "and developer instructor, this is my website where i provide",
              am4: "detailed information about me, my skills, tools i use, projects, and technologies learned.",
              am5: "I started interesting in development since i was a kid, i always has been a very curious and autodidact person, i started to study by my own when i was 13 years old, i started with C, C++ and C#, this helped me a lot to improve my",
              am6: "logic",
              am7: "at a very young age, throughout the years of a lot of autodidact and online formations studies i started to create personal projects such as social networks or applications of various uses. this helped me to improve my",
              am8: "skills with technologies",
              am9: "like JavaScript, React, Angular, PHP, jQuery, MySQL, Node.Js, and others.",
              am10: "After developing various web applications and mobile applications, i had a job in a small business of instruction located in Ecuador, Quito. My work here was developing a web application where the professors can create their class rooms, they was able to create/edit tasks for their students, they was also able to evaluate the students, this application was based in",
              am11: "Google Class Room",
              am12: ", and it contains all the main functions of it.",
              am13: "throughout the time i",
              am14: "work with various",
              am15: "people that was looking for developers, in that moment i gain a lot of experience and knoweldge in web & mobile development.",
              am16: "I dedicate to create personal projects for a while, this helped me a lot to perfect my",
              am17: "habits",
              am18: "and improve how i make my projects,",
              am19: "i also learn about design tools",
              am20: "like PhotoShop & GIMP and Figma,",
              am21: "and i learn various knoweldge about automation and system management from a terminal, Bash in this case.",
              am22: "After long investigations i knew more tools such as Vim, which helped me to improve my coding & writting skills making it more faster.",
              am23: "After having improve my skills i decided to ",
              am24: "teach free online classes",
              am25: "where i teach my knoweldge to interested people. this develop to me a leadership skill and it growing up throughout the time. after has been a private instructor for some people today i am working in creating new courses where i will teach ",
              am26: "programming software with various technologies",
              am27: ", i always has having interest in teaching.",
              am28: "I also learn advanced",
              am29: "English",
              am30: "due to its high demand and participation in the software development, and i decided to learn basic",
              am31: "German",
              am32: "too.",
              am33: "In this right moment i am still learning new technologies and looking for ways to improve as a Developer, i am also looking for oportunities to grow professionally.",
          },
];
export const Projects = [lang === "es" ? {
    text:"Visitar Proyecto",
    desc1:"inWork es una plataforma en el cuál se basa en crear conexiónes 100% laborales con el próposito de buscar trabajo o reclutar profesionales y llegar a un acuerdo mediante el algorithmo de la aplicación, Está realizada tanto para navegadores como Dispositivos Android.", 
    desc2:"Small Apps es un template que contiene diversas secciones creadas para facilitar el trabajo a la hora de desarrollar una aplicación landing o sencilla & moderna.", 
    desc3:"Bash Site es un template Moderno para la gente amante de GNU/Linux o Bash, está aplicación Angular brinda un moderno diseño y manejo de routers estilo terminal.", 
    desc4:"Coming Soon es una página web que puede ser utilizada para un conteo, o espera para una aplicación o proyecto en especifico.", 
    desc5:"EVERCODE es un proyecto personal en el cuál realizaba proyectos gratuitos y pagos para personas que necesitaban programadores o empresas muy pequeñas, está página junto a EVERCODE Services son para representar mi proyecto personal.", 
    desc6:"Focus es una red social dedicada a los creadores de contenido, o personas que quieran ofrecer sesiones privadas o pagar por sesiones privadas y conocer a sus personas soñadas. En focus puedes ganar dinero o canjear dinero como creador de contenido.", 
    desc7:"Translators es una aplicación web realizada para una empresa muy pequeña dedicada a realizar traducciones a proyectos, videos, textos o de cualquier necesidad.", 
    desc8:"Pizza Hut es un proyecto que realice para una prueba en la Universidad, este proyecto gano el primer lugar del semestre en una prueba general de conocimientos básicos.", 
    desc9:"Flare es una Template con una interfaz de usuario diferente y muy agradable, está basada en una página web landing.", 
    desc10:"Vanderbilt fue mi primera aplicación creada para una empresa pequeña localizada en Quito, Ecuador, está se basa en ofrecer información y métodos de contacto y servicios.", 
    desc11:"Sharp Development es una página web de una empresa pequeña de desarrollo, ofrecen información y sus respectivos servicios.", 
    desc12:"EVERCODE es un proyecto personal en el cuál realizaba proyectos gratuitos y pagos para personas que necesitaban programadores o empresas muy pequeñas, está página junto a EVERCODE son para representar mi proyecto personal.", 
    desc13:"Hacking Services es una aplicación web One Page con una muy simple interfaz.", 
    desc14:"React Template es un landing page template de React para facilitar el trabajo de desarrolladores en diversas aplicaciones.", 
    desc15:"Besign Invest es una aplicación web que representa un grupo de diseñadores gráficos profesionales que ofrecen sus diversos servicios y demuestran sus proyectos y testimmonios.", 
    desc16:"Animated Portfolio es un portafolio de PRUEBA, donde la información es falsa y fue creado solo para demostrar diversos conocimientos en Next.Js.", 
} : {
    text:"See Project",
    desc1:"inWork is a social network for searching job and recruiting professionals, in this platform the algorithm will help you to connect and reach an agreement, this application is made for browsers and android applications.", 
    desc2:"Small Apps is a template which it contains various sections created for make more flexible the developing of a landing application or a simple and modern application.", 
    desc3:"Bash Site is a modern template for lover people of GNU/Linux or Bash, this Angular application gives you a modern design and router management with terminal style.", 
    desc4:"Coming Soon is a website that can be used for a counting, or for a specific application or project pending.", 
    desc5:"EVERCODE is a personal project where i make free and pay projects for people or small business who are needem for websites or applications, this website with EVERCODE Services is for representating my personal project.", 
    desc6:"Focus is a social network dedicated to content creators or people who want to offer their private sessions, or pay for private sessions and know their dreamed persons. in Focus you can earn and exchange money.", 
    desc7:"Translators is a web application made for a small business, this business is dedicated to translate projects, videos, texts or anything related.", 
    desc8:"Pizza Hut is a project that i make for the University, this project wins the first position of the semester in a general test of basic knoweldge.", 
    desc9:"Flare is a template with a very good UI, it is different and very beautiful, is based in a landing page.", 
    desc10:"Vanderbilt is my first application created for a small business located in Ecuador, Quito, this web application offer their business information and contact methods and services.", 
    desc11:"Sharp Development is a web application for a small business of development, in this website they offer information and their services.", 
    desc12:"EVERCODE is a personal project where i make free and pay projects for people or small business who are needem for websites or applications, this website with EVERCODE is for representating my personal project.", 
    desc13:"Hacking Services is an application one page with a very simple UI.", 
    desc14:"React Template is a landing page from React, is used to make more flexible the developing of a landing website.", 
    desc15:"Besign Invest is a web application, was made for a graphic designer group that offers their services & projects and testimonials.", 
    desc16:"Animated Portfolio is a test portfolio, all the information it contains it is false and this was created for showing various skills in Next.Js.", 
}];
