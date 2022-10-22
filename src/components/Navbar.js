import { useRef } from 'react';

import { StyledNavbar, BrandMenu, Brand, MenuIcon, NavUl } from '../styles/Navbar.styled';

import { FaBars } from 'react-icons/fa';


const Navbar = () => {
    const navUl = useRef();

    const makeActive = (e) => {
        const navlinks = document.querySelectorAll('[data-navlink]');

        navlinks.forEach(navLink => {
            if (navLink.classList.contains('active')) {
                navLink.classList.remove('active')
            }
        })

        e.target.classList.add('active')
    }

    const toggleNavbar = () => {

        const toggleLisDisplay = (val) => {
            let intTime;
            if (val === 'block') {
                intTime = 250;
            } else {
                intTime = 0;
            }

            setTimeout(() => {
                const lis = [...navUl.current.children];
                lis.forEach(li => {
                    li.style.display = val;
                })
            }, intTime)
        }

        if (!navUl.current.style.height || navUl.current.style.height === '0px') {
            navUl.current.style.height = '250px';
            toggleLisDisplay('block');
        } else if (navUl.current.style.height === '250px') {
            navUl.current.style.height = '0';
            toggleLisDisplay('none');
        }
    }


    return (
        <StyledNavbar>
            <BrandMenu>
                <Brand>
                    <h2>
                        <a href="#">Restaurant</a>
                    </h2>
                </Brand>
                <MenuIcon>
                    <FaBars onClick={toggleNavbar} />
                </MenuIcon>
            </BrandMenu>
            <NavUl ref={navUl}>
                <li>
                    <a href="#" className="active" onClick={makeActive} data-navlink>Home</a>
                </li>
                <li>
                    <a href="#" onClick={makeActive} data-navlink>Menu</a>
                </li>
                <li>
                    <a href="#" onClick={makeActive} data-navlink>About</a>
                </li>
                <li>
                    <a href="#" onClick={makeActive} data-navlink>Dishes</a>
                </li>
                <li>
                    <a href="#" onClick={makeActive} data-navlink>Services</a>
                </li>
                <li>
                    <a href="#" onClick={makeActive} data-navlink>Contact</a>
                </li>
            </NavUl>
        </StyledNavbar>
    )
}

export default Navbar