import { HomeSection, HomeShadow, Content } from "../styles/Home.styled";
import home_image from '../images/home/home-min.jpg'

const Home = () => {
    return (
        <HomeSection id="home">
            <img src={home_image} alt="Home" />
            <HomeShadow>
                <Content>
                    <h1>Welcome to Restaurant!</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem natus mollitia minus
                    </p>
                </Content>
            </HomeShadow>
        </HomeSection>
    )
}


export default Home