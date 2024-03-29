import { AboutSection, LeftColumn, RightComlumn } from "../styles/About.styled"
import restaurant from '../images/about/restaurant-min.jpg';

const About = () => {
    return (
        <AboutSection id="about">
            <h1>About Us</h1>
            <div>
                <LeftColumn>
                    <img src={restaurant} alt="About" width="400" height="350" />
                </LeftColumn>
                <RightComlumn>
                    <h2>Our Restaurant</h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Ducimus porro facere atque iste sapiente libero Culpa laboriosam id vero in voluptas quaerat at libero ducimus placeat ut deserunt rem sint</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Minus dolores mollitia labore voluptatibus rerum a quo tempora animi illo quas nisi ad explicabo nulla debitis numquam officia deleniti natus minima</p>
                    </div>
                </RightComlumn>
            </div>
        </AboutSection>
    )
}

export default About