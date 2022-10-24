import { useEffect, useRef } from 'react';

import { StyledNavbar, BrandMenu, Brand, MenuIcon, NavUl } from '../styles/Navbar.styled';

import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = ({ theme }) => {
    const navUl = useRef();

    useEffect(() => {
        makeLinkActive();
    }, [])

    const makeLinkActive = () => {
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
                    changeNavBg(section.id);
                } else {
                    const li = document.querySelector(`li a[href*=${sectionId}]`);
                    li.classList.remove('active')
                }
            })
        }
    }

    const changeNavBg = (sectionId) => {
        const navbar = document.querySelector('#navbar');
        if (sectionId === 'home') {
            navbar.style.backgroundColor = 'transparent';
        } else {
            navbar.style.backgroundColor = theme.nav.bg;
        }
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
        <StyledNavbar id="navbar">
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
                <span>
                    <FaTimes onClick={toggleNavbar} />
                </span>
                <li>
                    <a href="#home" className="active" onClick={toggleNavbar}>Home</a>
                </li>
                <li>
                    <a href="#menu" onClick={toggleNavbar}>Menu</a>
                </li>
                <li>
                    <a href="#about" onClick={toggleNavbar}>About</a>
                </li>
                <li>
                    <a href="#dishes" onClick={toggleNavbar}>Dishes</a>
                </li>
                <li>
                    <a href="#services" onClick={toggleNavbar}>Services</a>
                </li>
                <li>
                    <a href="#contact" onClick={toggleNavbar}>Contact</a>
                </li>
            </NavUl>
        </StyledNavbar>
    )
}

export default Navbar