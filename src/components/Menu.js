import { useState, useEffect } from "react";
import { MenuSection, CardContainer, Card, CardBody, ImageContainer } from "../styles/Menu.styled";


const Menu = () => {
    const [data, setData] = useState(null);

    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Fugiat ipsa sit amet consectetur adipisicing elit.';
    const items = [
        { name: 'Fried Chicken', price: 200, description: description, image: 'fried_chicken-min.jpg' },
        { name: 'Grilled Steak', price: 233, description: description, image: 'grilled_steak-min.jpg' },
        { name: 'Chicken Burger', price: 99, description: description, image: 'chicken_burger-min.jpg' },
        { name: 'Vegetables', price: 144, description: description, image: 'vegetables-min.jpg' },
        { name: 'Fish', price: 50, description: description, image: 'fish-min.jpg' },
        { name: 'Strawberry Popsicles', price: 25, description: description, image: 'strawberry_popsicles-min.jpg' },
        { name: 'Strawberry Cake', price: 49, description: description, image: 'strawberry_cake-min.jpg' },
        { name: 'Vegetable Burger', price: 30, description: description, image: 'burger-min.jpg' }
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
                            <img src={`http://localhost:3000/images/menu/${item.image}`} alt="Menu Item" width="200" height="180" />
                        </ImageContainer>
                    </Card>
                ))}
            </CardContainer>
        </MenuSection>
    )
}

export default Menu