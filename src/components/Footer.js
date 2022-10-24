import { StyledFooter, AboutUs, OpeningHours, QuickLinks, FooterBottom } from "../styles/Footer.styled";


const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <AboutUs>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi maiores error ratione Nam autem voluptatibus alias reprehenderit quidem nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime praesentium</p>
                </AboutUs>
                <OpeningHours>
                    <h3>Opening Hours</h3>
                    <ul>
                        <li>Monday ..................... Closed</li>
                        <li>Tuesday .................... 8 am - 10 pm</li>
                        <li>Wednesday ................ 8 am - 10 pm</li>
                        <li>Thursday ................... 8 am - 10 pm</li>
                        <li>Friday ....................... 9 am - 2 pm</li>
                        <li>Saturday ................... 8 am - 10 pm</li>
                        <li>Sunday ..................... 8 am - 10 pm</li>
                    </ul>
                </OpeningHours>
                <QuickLinks>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#menu">Menu</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#dishes">Dishes</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </QuickLinks>
            </div>
            <FooterBottom>
                Copyright &#169;2022 All rights reserved. Made by Abdul Qadir.
            </FooterBottom>
        </StyledFooter>
    )
}

export default Footer