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
        know_more: 'En savoir plus...',

        career_title: 'PARCOURS',
        bac: 'Baccalauréat',
        section: 'Section: STI2D',
        establishment: 'Lycée: La Martinière Diderot',
        location1: 'Lieu: Lyon',
        // // // // //
        formation1: 'Formation pro: Dév. web et web mobile',
        eLevel1: 'Niveau de sortie: RNCP Niv.5 (Bac+2)',
        organization: 'Organisme de formation : Human Booster',
        location2: 'Lieu : Bel Air School, Villeurbanne',
        // // // // //
        following: 'La suite...',
        see: 'On verra...',

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
        know_more: 'Know more...',

        career_title: 'CAREER',
        bac: 'High school baccalaureate',
        section: 'Section: STI2D',
        establishment: 'High school: La Martinière Diderot',
        location1: 'Location: Lyon',
        // // // // //
        formation1: 'Pro. training: Web dev and mobile web',
        eLevel1: 'Exit level: RNCP Lvl.5 (Bac+2)',
        organization: 'Training organization: Human Booster',
        location2: 'Location: Bel Air School, Villeurbanne',
        // // // // //
        following: 'The following...',
        see: 'We\'ll see...',

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
    document.getElementById('know_more').innerText = translations[lang].know_more;

    document.getElementById('career_title').innerText = translations[lang].career_title;
    document.getElementById('bac').innerText = translations[lang].bac;
    document.getElementById('section').innerText = translations[lang].section;
    document.getElementById('establishment').innerText = translations[lang].establishment;
    document.getElementById('location1').innerText = translations[lang].location1;
    // // // // //
    document.getElementById('formation1').innerText = translations[lang].formation1;
    document.getElementById('eLevel1').innerText = translations[lang].eLevel1;
    document.getElementById('organization').innerText = translations[lang].organization;
    document.getElementById('location2').innerText = translations[lang].location2;
    // // // // //
    document.getElementById('following').innerText = translations[lang].following;
    document.getElementById('see').innerText = translations[lang].see;

    document.getElementById('projects_title').innerText = translations[lang].projects_title;

    document.getElementById('contact_title').innerText = translations[lang].contact_title;
}
function changeLanguage() {
    const langSelect = document.getElementById('langSelect');
    const selectedLang = langSelect.options[langSelect.selectedIndex].value;
    setLanguage(selectedLang);
}

// initial language
setLanguage('fr');