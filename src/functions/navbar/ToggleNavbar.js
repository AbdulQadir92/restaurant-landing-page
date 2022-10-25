export const _toggleNavbar = (navUl) => {

    const toggleLisDisplay = (val) => {
        let intTime;
        if (val === 'block') {
            intTime = 250;
        } else {
            intTime = 0;
        }

        setTimeout(() => {
            const lis = [...navUl.children];
            lis.forEach(li => {
                li.style.display = val;
            })
        }, intTime)
    }

    if (!navUl.style.height || navUl.style.height === '0px') {
        navUl.style.height = '250px';
        toggleLisDisplay('block');
    } else if (navUl.style.height === '250px') {
        navUl.style.height = '0';
        toggleLisDisplay('none');
    }
}