import { useState, useEffect } from "react";
import { MenuSection, CardContainer, Card, CardBody, ImageContainer } from "../styles/Menu.styled";

import fried_chicken from '../images/menu/fried_chicken-min.jpg';
import grilled_steak from '../images/menu/grilled_steak-min.jpg';
import chicken_burger from '../images/menu/chicken_burger-min.jpg';
import vegetables from '../images/menu/vegetables-min.jpg';
import fish from '../images/menu/fish-min.jpg';
import strawberry_popsicles from '../images/menu/strawberry_popsicles-min.jpg';
import strawberry_cake from '../images/menu/strawberry_cake-min.jpg';
import burger from '../images/menu/burger-min.jpg';


const Menu = () => {
    const [data, setData] = useState(null);

    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Fugiat ipsa sit amet consectetur adipisicing elit.';
    const items = [
        { name: 'Fried Chicken', price: 200, description: description, image: fried_chicken },
        { name: 'Grilled Steak', price: 233, description: description, image: grilled_steak },
        { name: 'Chicken Burger', price: 99, description: description, image: chicken_burger },
        { name: 'Vegetables', price: 144, description: description, image: vegetables },
        { name: 'Fish', price: 50, description: description, image: fish },
        { name: 'Strawberry Popsicles', price: 25, description: description, image: strawberry_popsicles },
        { name: 'Strawberry Cake', price: 49, description: description, image: strawberry_cake },
        { name: 'Vegetable Burger', price: 30, description: description, image: burger }
    ]

    useEffect(() => {
        setData(items)
    }, [])

    return (
        <MenuSection id="menu">
            <h1>Menu</h1>
            <CardContainer>
                {data && data.map((item, index) => (
                    <Card key={index}>
                        <CardBody>
                            <div>
                                <h2>{item.name}</h2>
                                <h2>${item.price}</h2>
                            </div>
                            <p>{item.description}</p>
                        </CardBody>
                        <ImageContainer>
                            <img src={item.image} alt="Menu Item" width="200" height="180" />
                        </ImageContainer>
                    </Card>
                ))}
            </CardContainer>
        </MenuSection>
    )
}

export default Menu