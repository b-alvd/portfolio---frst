const translations = {
    fr: {
        header_link1: 'Accueil',
        header_link2: 'Informations',
        header_link3: 'Parcours',
        header_link4: 'Projets',
        header_link5: 'Contact',

        informations_title: 'INFORMATIONS',
        presentation_paragraph: 'Bienvenue sur mon portfolio ! Je suis un développeur web junior passionné par la création d\'expériences en ligne remarquables. Avec une expertise en HTML, CSS et JavaScript, je transforme les concepts en sites web élégants et fonctionnels. Explorez mes projets pour voir comment je combine créativité et compétences techniques pour produire des résultats exceptionnels. Prêt à collaborer sur votre prochain projet passionnant !',
        spoken_languages: 'Langues parlées',
        mastered_technologies: 'Technologies maîtrisées',

        career_title: 'PARCOURS',

        projects_title: 'PROJETS',

        contact_title: 'CONTACT',
    },
    en: {
        header_link1: 'Home',
        header_link2: 'Informations',
        header_link3: 'Career',
        header_link4: 'Projects',
        header_link5: 'Contact',

        informations_title: 'INFORMATIONS',
        presentation_paragraph: 'Welcome to my portfolio ! I\'m a junior web developer passionate about creating remarkable online experiences. With expertise in HTML, CSS and JavaScript, I transform concepts into elegant and functional websites. Explore my projects to see how I combine creativity and technical skills to produce exceptional results. Ready to collaborate on your next exciting project !',
        spoken_languages: 'Spoken languages',
        mastered_technologies: 'Mastered technologies',

        career_title: 'CAREER',

        projects_title: 'PROJECTS',

        contact_title: 'CONTACT',
    }
};
  
function setLanguage(lang) {
    document.getElementById('header_link1').innerText = translations[lang].header_link1;
    document.getElementById('header_link2').innerText = translations[lang].header_link2;
    document.getElementById('header_link3').innerText = translations[lang].header_link3;
    document.getElementById('header_link4').innerText = translations[lang].header_link4;
    document.getElementById('header_link5').innerText = translations[lang].header_link5;

    document.getElementById('informations_title').innerText = translations[lang].informations_title;
    document.getElementById('presentation_paragraph').innerText = translations[lang].presentation_paragraph;
    document.getElementById('spoken_languages').innerText = translations[lang].spoken_languages;
    document.getElementById('mastered_technologies').innerText = translations[lang].mastered_technologies;

    document.getElementById('career_title').innerText = translations[lang].career_title;

    document.getElementById('projects_title').innerText = translations[lang].projects_title;

    document.getElementById('contact_title').innerText = translations[lang].contact_title;
}
function changeLanguage(lang) {
    setLanguage(lang);
}

// initial language
setLanguage('fr');