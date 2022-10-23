import { ServicesSection, CardContainer, Card } from "../styles/Services.styled";

import { GiCookingPot } from 'react-icons/gi';
import { FaBirthdayCake, FaHandshake } from "react-icons/fa";


const Services = () => {
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Dolores consequuntur voluptatem odio sapiente voluptatibus blanditiis';

    return (
        <ServicesSection>
            <h1>Our Services</h1>
            <CardContainer>
                <Card>
                    <div>
                        <h2>Wedding Party</h2>
                        <span>
                            <GiCookingPot />
                        </span>
                    </div>
                    <p>{description}</p>
                </Card>
                <Card>
                    <div>
                        <h2>Birthday Party</h2>
                        <span>
                            <FaBirthdayCake />
                        </span>
                    </div>
                    <p>{description}</p>
                </Card>
                <Card>
                    <div>
                        <h2>Business Meeting</h2>
                        <span>
                            <FaHandshake />
                        </span>
                    </div>
                    <p>{description}</p>
                </Card>
            </CardContainer>
        </ServicesSection>
    )
}

export default Services