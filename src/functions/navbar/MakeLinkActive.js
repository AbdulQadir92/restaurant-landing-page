export const makeLinkActive = (theme) => {
    const sections = document.querySelectorAll('section[id]');

    window.onscroll = () => {
        const scrollY = window.scrollY;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.id;

            if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
                const activeLi = document.querySelector(`li a[href*=${sectionId}]`);
                activeLi.classList.add('active');
                changeNavBg(section.id, theme);
            } else {
                const li = document.querySelector(`li a[href*=${sectionId}]`);
                li.classList.remove('active')
            }
        })
    }
}

const changeNavBg = (sectionId, theme) => {
    const navbar = document.querySelector('#navbar');
    if (sectionId === 'home') {
        navbar.style.backgroundColor = 'transparent';
    } else {
        navbar.style.backgroundColor = theme.nav.bg;
    }
}