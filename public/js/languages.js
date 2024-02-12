const translations = {
    fr: {
        header_title: 'Basile ALEVEQUE-DESSOLIN',
        header_link1: 'Accueil',
        header_link2: 'Informations',
        header_link3: 'Parcours',
        header_link4: 'Projets',
        header_link5: 'Contact',
    },
    en: {
        header_title: 'Basile ALEVEQUE-DESSOLIN',
        header_link1: 'Home',
        header_link2: 'Informations',
        header_link3: 'Course',
        header_link4: 'Projects',
        header_link5: 'Contact',
    }
};
  
function setLanguage(lang) {
    document.getElementById('header_title').innerText = translations[lang].header_title;
    document.getElementById('header_link1').innerText = translations[lang].header_link1;
    document.getElementById('header_link2').innerText = translations[lang].header_link2;
    document.getElementById('header_link3').innerText = translations[lang].header_link3;
    document.getElementById('header_link4').innerText = translations[lang].header_link4;
    document.getElementById('header_link5').innerText = translations[lang].header_link5;
}
function changeLanguage() {
    const langSelect = document.getElementById('langSelect');
    const selectedLang = langSelect.options[langSelect.selectedIndex].value;
    setLanguage(selectedLang);
}

// initial language
setLanguage('fr');