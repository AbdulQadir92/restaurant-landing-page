import { StyledHome, HomeShadow, Content } from "../styles/Home.styled";


const Home = () => {
    return (
        <StyledHome>
            <HomeShadow>
                <Content>
                    <h1>Welcome to Restaurant!</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit Quidem natus mollitia minus
                    </p>
                </Content>
            </HomeShadow>
        </StyledHome>
    )
}


export default Home