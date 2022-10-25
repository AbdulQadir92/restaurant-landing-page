import { useEffect } from 'react';
import { StyledNavbar, BrandMenu, Brand, MenuIcon, NavUl, ThemeIcons } from '../styles/Navbar.styled';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

import { useTheme } from 'styled-components';
import { LightTheme } from '../themes/LightTheme';
import { DarkTheme } from "../themes/DarkTheme";

import { makeLinkActive } from '../functions/navbar/MakeLinkActive';
import { _toggleNavbar } from '../functions/navbar/ToggleNavbar';


const Navbar = ({ setTheme }) => {
    const theme = useTheme();

    useEffect(() => {
        makeLinkActive(theme)
    }, [theme])

    const toggleNavbar = () => {
        const navUl = document.querySelector('#navUl');
        _toggleNavbar(navUl);
    }

    const toggleTheme = (newTheme) => {
        const home = document.querySelector('#home');
        const homeTop = home.offsetTop - 50;
        const homeHeight = home.offsetHeight;
        const scrollY = window.scrollY;

        if (newTheme === 'LightTheme') {
            localStorage.setItem('theme', JSON.stringify(LightTheme));
            if (scrollY > homeTop + homeHeight) {
                document.querySelector('#navbar').style.backgroundColor = LightTheme.nav.bg;
            }
        } else if (newTheme === 'DarkTheme') {
            localStorage.setItem('theme', JSON.stringify(DarkTheme));
            if (scrollY > homeTop + homeHeight) {
                document.querySelector('#navbar').style.backgroundColor = DarkTheme.nav.bg;
            }
        }
        setTheme(JSON.parse(localStorage.getItem('theme')));
    }

    return (
        <StyledNavbar id="navbar">
            <BrandMenu>
                <Brand>
                    <h2>
                        <a href="#">
                            Restaurant
                            {/* <img src={`http://localhost:3000/logo.png`} alt="logo" width="20" height="20" /> */}
                        </a>
                    </h2>
                </Brand>
                <MenuIcon>
                    <FaBars onClick={toggleNavbar} />
                </MenuIcon>
            </BrandMenu>
            <NavUl id="navUl">
                <span>
                    <FaTimes onClick={toggleNavbar} />
                </span>
                <li>
                    <a href="#home" className="active" onClick={window.innerWidth < 768 ? toggleNavbar : () => { }}>Home</a>
                </li>
                <li>
                    <a href="#menu" onClick={window.innerWidth < 768 ? toggleNavbar : () => { }}>Menu</a>
                </li>
                <li>
                    <a href="#about" onClick={window.innerWidth < 768 ? toggleNavbar : () => { }}>About</a>
                </li>
                <li>
                    <a href="#dishes" onClick={window.innerWidth < 768 ? toggleNavbar : () => { }}>Dishes</a>
                </li>
                <li>
                    <a href="#services" onClick={window.innerWidth < 768 ? toggleNavbar : () => { }}>Services</a>
                </li>
                <li>
                    <a href="#contact" onClick={window.innerWidth < 768 ? toggleNavbar : () => { }}>Contact</a>
                </li>
            </NavUl>
            <ThemeIcons>
                {theme.light && <FaMoon id="moon" title="Dark Mode" onClick={() => toggleTheme('DarkTheme')} />}
                {theme.dark && <FaSun id="sun" title="Light Mode" onClick={() => toggleTheme('LightTheme')} />}
            </ThemeIcons>
        </StyledNavbar>
    )
}

export default Navbar