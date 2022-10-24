import { HomeSection, HomeShadow, Content } from "../styles/Home.styled";


const Home = () => {
    return (
        <HomeSection id="home">
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